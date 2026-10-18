import { useEffect, useRef, useState, type RefObject } from "react";
import type { SectionId } from "../data/content";

// Drives the <Slide>s (components/SlideStack): pins them on desktop, shrinks/darkens the slide being
// covered, and reports the active nav section and whether the hero has been covered.

const STACK_QUERY = "(min-width: 1024px) and (prefers-reduced-motion: no-preference)";
const COVERED_SCALE = 0.05; // the covered slide shrinks by up to 5%
const COVERED_SHADE = 0.55; // …and darkens by up to 55%
// "proximity": settles on a slide only when scrolling stops near one.
// "mandatory": always settles on a slide (or a screen-height step within a tall one).
const SNAP: "proximity" | "mandatory" = "proximity";

const clamp01 = (n: number) => Math.min(1, Math.max(0, n));

/** Drives the slides inside `container`; returns the active nav section and whether the hero is covered. */
export function useSlideStack(container: RefObject<HTMLElement | null>) {
  const [active, setActive] = useState<SectionId>("case-studies");
  const [heroHidden, setHeroHidden] = useState(false);
  const state = useRef({ active: "case-studies" as SectionId, heroHidden: false });

  useEffect(() => {
    const root = container.current;
    if (!root) return;
    const slides = [...root.querySelectorAll<HTMLElement>(":scope > [data-slide]")];
    const mq = window.matchMedia(STACK_QUERY);
    let tops: number[] = [];
    let heights: number[] = [];
    let frame = 0;

    const update = () => {
      frame = 0;
      const y = window.scrollY;
      const vh = window.innerHeight;
      const stacking = mq.matches;

      slides.forEach((slide, i) => {
        const inner = slide.querySelector<HTMLElement>("[data-slide-inner]")!;
        const shade = slide.querySelector<HTMLElement>("[data-slide-shade]")!;
        const next = tops[i + 1];
        // how far the next slide has slid over this one (0 → 1)
        const p = stacking && next !== undefined ? clamp01((y + vh - next) / vh) : 0;
        const stickyTop = Math.min(0, vh - heights[i]);
        inner.style.transformOrigin = `50% ${-stickyTop + vh / 2}px`;
        inner.style.transform = p ? `scale(${1 - COVERED_SCALE * p})` : "";
        shade.style.opacity = String(COVERED_SHADE * p);
      });

      let current = state.current.active;
      slides.forEach((slide, i) => {
        if (tops[i] <= y + vh * 0.4) current = slide.dataset.section as SectionId;
      });
      const hidden = tops[1] !== undefined && y >= tops[1] - vh * 0.25;
      if (current !== state.current.active) setActive((state.current.active = current));
      if (hidden !== state.current.heroHidden) setHeroHidden((state.current.heroHidden = hidden));
    };

    const schedule = () => {
      if (!frame) frame = requestAnimationFrame(update);
    };

    // Slide positions in the page's normal flow (sticky elements keep their flow position)
    const measure = () => {
      let acc = root.getBoundingClientRect().top + window.scrollY;
      heights = slides.map((s) => s.offsetHeight);
      tops = heights.map((h) => {
        const top = acc;
        acc += h;
        return top;
      });
      const vh = window.innerHeight;
      slides.forEach((slide, i) => {
        slide.style.setProperty("--slide-top", `${tops[i]}px`);
        slide.style.top = mq.matches ? `${Math.min(0, vh - heights[i])}px` : "";
      });
      placeSnapPoints(vh);
      schedule();
    };

    // Scroll snap (see SNAP). Pinned elements make unreliable snap targets, so invisible markers mark each slide's place in
    // the flow, plus the point where a slide taller than the screen pins, so its end can be reached.
    const snapLayer = document.createElement("div");
    snapLayer.setAttribute("aria-hidden", "true");
    snapLayer.style.cssText = "position:absolute;inset:0 auto auto 0;width:0;height:0;pointer-events:none";
    root.prepend(snapLayer);
    const placeSnapPoints = (vh: number) => {
      const rootTop = root.getBoundingClientRect().top + window.scrollY;
      // a slide taller than the screen also gets a point every screen-height and one where it pins,
      // so nothing is skipped even with mandatory snapping
      const points = mq.matches
        ? tops.flatMap((top, i) => {
            const end = top + heights[i] - vh;
            const stops = [top];
            for (let y = top + vh; y < end; y += vh) stops.push(y);
            if (end > top + 1) stops.push(end);
            return stops;
          })
        : [];
      snapLayer.replaceChildren(
        ...points.map((y) => {
          const marker = document.createElement("div");
          marker.style.cssText = `position:absolute;left:0;top:${y - rootTop}px;width:1px;height:1px;scroll-snap-align:start`;
          return marker;
        }),
      );
      document.documentElement.style.scrollSnapType = mq.matches ? `y ${SNAP}` : "";
    };

    // Section links scroll to the slide's place in the flow (scrolling to a pinned element is unreliable)
    const onClick = (e: MouseEvent) => {
      const link = (e.target as Element).closest<HTMLAnchorElement>('a[href^="#"]');
      const id = link?.hash.slice(1);
      const target = id ? document.getElementById(id) : null;
      const i = target ? slides.findIndex((s) => s.contains(target)) : -1;
      if (i < 0 || e.defaultPrevented || e.metaKey || e.ctrlKey) return;
      e.preventDefault();
      const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
      window.scrollTo({ top: tops[i], behavior: reduce ? "auto" : "smooth" });
      history.replaceState(null, "", `#${id}`);
    };

    const resize = new ResizeObserver(measure);
    slides.forEach((s) => resize.observe(s));
    window.addEventListener("scroll", schedule, { passive: true });
    window.addEventListener("resize", measure);
    mq.addEventListener("change", measure);
    document.addEventListener("click", onClick);
    measure();

    return () => {
      cancelAnimationFrame(frame);
      resize.disconnect();
      window.removeEventListener("scroll", schedule);
      window.removeEventListener("resize", measure);
      mq.removeEventListener("change", measure);
      document.removeEventListener("click", onClick);
      snapLayer.remove();
      document.documentElement.style.scrollSnapType = "";
    };
  }, [container]);

  return { active, heroHidden };
}
