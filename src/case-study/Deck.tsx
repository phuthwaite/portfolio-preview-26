import { useEffect, useRef, useState, type KeyboardEvent, type ReactNode, type TouchEvent } from "react";
import { useEdgeNav } from "../hooks/useEdgeNav";
import { trackOnce } from "../lib/analytics";
import { closeDeck } from "./deckRoute";
import { SlideFooter } from "./slide";

export type SlideDef = {
  /** short name, for the dots and the screen-reader status */
  label: string;
  /** which of the deck's two backgrounds: "cover" (cover and sidebar slides) or "dark" */
  bg: "cover" | "dark";
  /** hide the deck footer (e.g. the cover and closing slides, which don't have one) */
  noFooter?: boolean;
  /** the slide's content, laid out with the pieces in slide.tsx */
  content: ReactNode;
};

export type DeckDef = {
  /** matches the id in content.ts caseStudies; the deck's address is /case-studies/<id> */
  id: string;
  title: string;
  client: string;
  /** the deck's backgrounds (Figma: Elements / BG) */
  backgrounds: { cover: string; dark: string };
  /** footer text, e.g. "UX Case Study: Samsung UK" */
  footer: string;
  slides: SlideDef[];
};

// A case study as a slide deck, in a full-screen modal over the site. On desktop each slide is a 16:9
// canvas scaled to fit the window, laid out as in the original deck; on phones its pieces stack in one
// scrolling column. Arrows, dots, arrow keys, swipe and clicking either side move between slides; Escape,
// the close button or Back closes it.
export default function Deck({ deck }: { deck: DeckDef }) {
  const dialog = useRef<HTMLDialogElement>(null);
  const [index, setIndex] = useState(0);
  const count = deck.slides.length;
  const goTo = (i: number) => setIndex(Math.max(0, Math.min(count - 1, i)));

  // open as a modal (focus stays inside; the page behind can't scroll), and put things back on close
  useEffect(() => {
    const d = dialog.current!;
    if (!d.open) d.showModal();
    const root = document.documentElement;
    const before = root.style.overflow;
    const title = document.title;
    root.style.overflow = "hidden";
    return () => {
      root.style.overflow = before;
      document.title = title;
    };
  }, []);

  useEffect(() => {
    document.title = `${deck.title} · ${deck.client} — Pauline Huthwaite`;
    trackOnce("case-study-slide", { study: deck.id, slide: `${index + 1} ${deck.slides[index].label}` });
  }, [deck, index]);

  const onKeyDown = (e: KeyboardEvent) => {
    const keys: Record<string, number> = { ArrowRight: index + 1, PageDown: index + 1, " ": index + 1, ArrowLeft: index - 1, PageUp: index - 1, Home: 0, End: count - 1 };
    if (!(e.key in keys)) return;
    e.preventDefault();
    goTo(keys[e.key]);
  };

  // swipe sideways on touch screens (vertical swipes scroll the slide)
  const touch = useRef<{ x: number; y: number } | null>(null);
  const onTouchStart = (e: TouchEvent) => (touch.current = { x: e.touches[0].clientX, y: e.touches[0].clientY });
  const onTouchEnd = (e: TouchEvent) => {
    if (!touch.current) return;
    const dx = e.changedTouches[0].clientX - touch.current.x;
    const dy = e.changedTouches[0].clientY - touch.current.y;
    if (Math.abs(dx) > 50 && Math.abs(dx) > Math.abs(dy) * 1.5) goTo(index + (dx < 0 ? 1 : -1));
    touch.current = null;
  };

  const { cursorClass, edgeNav } = useEdgeNav({ index, count, goTo, share: 0.25 });

  return (
    <dialog
      ref={dialog}
      aria-label={`${deck.client} case study: ${deck.title}`}
      onCancel={(e) => {
        e.preventDefault();
        closeDeck();
      }}
      onKeyDown={onKeyDown}
      className="m-0 h-dvh max-h-none w-dvw max-w-none overflow-hidden bg-[#050914] p-0 text-white backdrop:bg-[#050914]"
    >
      <div
        className={`relative h-full ${cursorClass}`}
        aria-roledescription="carousel"
        aria-label="Slides"
        onTouchStart={onTouchStart}
        onTouchEnd={onTouchEnd}
        {...edgeNav}
      >
        {deck.slides.map((slide, i) => {
          if (Math.abs(i - index) > 1) return null;
          const current = i === index;
          return (
            <section
              key={slide.label}
              aria-roledescription="slide"
              aria-label={`${slide.label}, ${i + 1} of ${count}`}
              aria-hidden={!current}
              inert={!current}
              className={`absolute inset-0 overflow-y-auto overscroll-contain transition-[opacity,translate] ease-out motion-reduce:transition-none lg:flex lg:items-center lg:justify-center lg:overflow-hidden ${
                current ? "translate-x-0 opacity-100 delay-100 duration-500" : `opacity-0 duration-300 ${i < index ? "-translate-x-[3%]" : "translate-x-[3%]"}`
              }`}
            >
              {/* the slide: a 16:9 canvas, as large as fits (sizes inside are in cqw of its width) */}
              <div className="relative isolate min-h-full overflow-hidden px-5 pt-20 pb-28 [container-type:inline-size] sm:px-10 lg:aspect-video lg:min-h-0 lg:w-[min(100vw,177.78dvh)] lg:p-0">
                <img src={deck.backgrounds[slide.bg]} alt="" aria-hidden className="absolute inset-0 -z-20 size-full object-cover" />
                <div aria-hidden className="absolute inset-0 -z-10 bg-black/18" />
                <div className="flex flex-col gap-8 lg:contents">{slide.content}</div>
                {!slide.noFooter && <SlideFooter label={deck.footer} />}
              </div>
            </section>
          );
        })}
      </div>

      {/* close, top right */}
      <button
        type="button"
        onClick={closeDeck}
        aria-label="Close case study"
        data-edge-nav-ignore
        className="absolute top-3 right-3 z-20 flex size-10 cursor-pointer items-center justify-center rounded-full border border-white/25 bg-[#030714]/40 text-white backdrop-blur transition-colors hover:bg-white/20 focus-visible:ring-2 focus-visible:ring-white/50 focus-visible:outline-none"
      >
        <svg aria-hidden viewBox="0 0 24 24" width="18" height="18" fill="none" stroke="currentColor" strokeWidth="1.5">
          <path d="M6 6l12 12M18 6 6 18" />
        </svg>
      </button>

      {/* bottom centre: previous, a dot per slide (just the arrows on phones), next */}
      <div className="absolute inset-x-0 bottom-1.5 z-20 flex items-center justify-center gap-3" data-edge-nav-ignore>
        <StepButton direction="prev" disabled={index === 0} onClick={() => goTo(index - 1)} />
        <nav aria-label="Slides" className="hidden items-center gap-[7px] sm:flex">
          {deck.slides.map((slide, i) => (
            <button
              key={slide.label}
              type="button"
              onClick={() => goTo(i)}
              aria-label={`Go to ${slide.label}`}
              aria-current={i === index ? "step" : undefined}
              className="group flex h-4 cursor-pointer items-center"
            >
              <span className={`block h-1.5 rounded-full transition-all duration-200 ${i === index ? "w-[22px] bg-white" : "w-1.5 bg-white/40 group-hover:bg-white/70"}`} />
            </button>
          ))}
        </nav>
        <StepButton direction="next" disabled={index === count - 1} onClick={() => goTo(index + 1)} />
      </div>
      <p aria-hidden className="absolute top-5 left-5 z-20 text-sm text-white/60 tabular-nums sm:hidden">
        {String(index + 1).padStart(2, "0")} / {String(count).padStart(2, "0")}
      </p>

      <p aria-live="polite" className="sr-only">
        {deck.slides[index].label}, slide {index + 1} of {count}
      </p>
    </dialog>
  );
}

function StepButton({ direction, disabled, onClick }: { direction: "prev" | "next"; disabled: boolean; onClick: () => void }) {
  return (
    <button
      type="button"
      aria-label={direction === "prev" ? "Previous slide" : "Next slide"}
      disabled={disabled}
      onClick={onClick}
      className="flex size-9 cursor-pointer items-center justify-center rounded-full text-white/80 transition-colors hover:bg-white/15 hover:text-white focus-visible:ring-2 focus-visible:ring-white/50 focus-visible:outline-none disabled:cursor-default disabled:bg-transparent disabled:text-white/20"
    >
      <svg aria-hidden viewBox="0 0 17 34" width="8" height="16" fill="none" stroke="currentColor" strokeWidth="2" overflow="visible">
        <path d={direction === "prev" ? "M17 0 0 17l17 17" : "M0 0l17 17L0 34"} />
      </svg>
    </button>
  );
}
