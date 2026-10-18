import {
  useEffect,
  useRef,
  type CSSProperties,
  type KeyboardEvent,
  type MouseEvent,
  type PointerEvent,
  type WheelEvent,
} from "react";
import SectionHeading from "../components/SectionHeading";
import ArtCanvas from "../components/ArtCanvas";
import { FillUnderline, LinkArrow } from "../components/LinkDecor";
import { caseStudyArt } from "./case-study-art";
import pip from "../assets/pip.svg";
import pipActive from "../assets/pip-active.svg";
import carouselNav from "../assets/carousel-nav.svg";
import { caseStudies, type CaseStudy } from "../data/content";
import { progressOf, useMomentumSlider } from "../hooks/useMomentumSlider";
import { trackOnce } from "../lib/analytics";

// Show the stats column on each slide (hidden for now; the data stays in content.ts)
const SHOW_STATS = false;

// Figma: HB 2 / VW 2 / SS 2 / AXS 2 / TWC 2 — a full-width preview of one case study: outline, key
// stats and imagery. Laid out in Figma frame coordinates: the title sits at y 166.
// `offset` is this slide's distance from the carousel position (0 = current, ±1 = neighbour); the
// artwork drifts sideways and settles from a slight zoom, while the text and stats slide sideways
// and cross-fade, the stats travelling further so they trail the text (as in the Design carousel).
function CaseStudyPreview({
  study,
  offset,
}: {
  study: CaseStudy;
  offset: number;
}) {
  const { Art, crop } = caseStudyArt[study.id];
  const p = progressOf(0, offset);
  // text hands over at the midpoint (outgoing gone before incoming appears); artwork overlaps a little
  const textOpacity = Math.max(0, 1 - 2 * Math.abs(offset));
  const artOpacity = Math.max(0, 1 - 1.4 * Math.abs(offset));
  return (
    <article
      aria-labelledby={`case-study-${study.id}`}
      className="relative flex flex-col pt-[35px] font-case lg:block lg:h-[530px]"
      style={{ "--accent": study.accent } as CSSProperties}
    >
      <ArtCanvas
        crop={crop}
        label={study.artAlt}
        style={{
          opacity: artOpacity,
          transform: `translateX(${offset * 8}%) scale(${1.15 - 0.15 * p})`,
          transformOrigin: "70% 50%",
        }}
      >
        <Art />
      </ArtCanvas>

      <div className="relative flex flex-col gap-10 lg:flex-row lg:gap-0">
        {/* Figma: details */}
        <div
          className="lg:w-[441px] lg:shrink-0"
          style={{
            opacity: textOpacity,
            transform: `translateX(${offset * 60}px)`,
          }}
        >
          <h3
            id={`case-study-${study.id}`}
            className="font-case-display text-2xl tracking-[0.01em] text-(--accent)"
          >
            {study.title}
          </h3>
          <div className="mt-4 flex flex-col gap-1">
            <img
              src={study.logo}
              alt={study.logoAlt}
              width={study.logoWidth}
              height={study.logoHeight}
              className="block"
            />
            <p className="text-sm leading-7 tracking-[0.01em] text-white uppercase">
              {study.company}
            </p>
          </div>
          <div className="mt-6 max-h-[240px] overflow-hidden text-[15px] leading-6 tracking-[0.01em] text-white lg:w-[323px]">
            {study.summary.map((para, i) => (
              <p key={i} className="whitespace-pre-wrap">
                {para}
              </p>
            ))}
          </div>
          {/* Figma: cta */}
          <a
            href={study.href}
            data-umami-event="case-study-read-more"
            data-umami-event-study={study.id}
            target="_blank"
            rel="noopener noreferrer"
            className="group cursor-new-window mt-9 inline-flex flex-col pt-1 text-(--accent)"
          >
            <span className="inline-flex items-center gap-1.5 font-condensed text-lg leading-[1.4] font-semibold tracking-[0.04em] uppercase">
              Read more
              <span className="sr-only">
                : {study.title} (opens in a new tab)
              </span>
              <LinkArrow className="size-[0.8em]" />
            </span>
            <FillUnderline />
          </a>
        </div>

        {/* Figma: stats */}
        {SHOW_STATS && (
          <dl
            className="grid grid-cols-1 gap-[19px] font-case-display sm:grid-cols-3 lg:flex lg:w-[252px] lg:flex-col"
            style={{
              opacity: textOpacity,
              transform: `translateX(${offset * 110}px)`,
            }}
          >
            {study.stats.map((stat) => (
              // label first for screen readers; value shown above it
              <div key={stat.label} className="flex flex-col-reverse">
                <dt className="text-lg tracking-[0.01em] text-[#d9d9d9]">
                  {stat.label}
                </dt>
                <dd className="text-[clamp(36px,4vw,44px)] tracking-[0.01em] text-(--accent)">
                  {stat.value}
                </dd>
              </div>
            ))}
          </dl>
        )}
      </div>
    </article>
  );
}

// The slides are stacked in one place and animated from a single, continuous position: on touch
// screens drag or flick to move (with momentum, springing to the nearest study), or use the dots,
// arrows, arrow keys or a sideways trackpad swipe. Controls hide when there's only one study.
export default function CaseStudies() {
  const stage = useRef<HTMLDivElement>(null);
  const count = caseStudies.length;
  const { position, index, goTo, wasDragged, bind } = useMomentumSlider(
    count,
    () => stage.current?.clientWidth ?? 1000,
  );

  // which slides people move on to (the first is counted by "section-reached")
  const firstRender = useRef(true);
  useEffect(() => {
    if (firstRender.current) return void (firstRender.current = false);
    trackOnce("case-study-viewed", { study: caseStudies[index].id });
  }, [index]);

  // drag to swipe on touch screens only; mice use the arrows, dots, keys or a trackpad swipe
  const onPointerDown = (e: PointerEvent<HTMLDivElement>) => {
    if (e.pointerType !== "mouse") bind.onPointerDown(e);
  };

  const onKeyDown = (e: KeyboardEvent) => {
    if (e.key === "ArrowRight") goTo(index + 1);
    else if (e.key === "ArrowLeft") goTo(index - 1);
    else return;
    e.preventDefault();
  };

  // sideways trackpad swipes step one study at a time
  const wheel = useRef({ sum: 0, locked: false });
  const onWheel = (e: WheelEvent) => {
    if (Math.abs(e.deltaX) <= Math.abs(e.deltaY)) return;
    const w = wheel.current;
    if (w.locked) return;
    w.sum += e.deltaX;
    if (Math.abs(w.sum) < 40) return;
    goTo(index + Math.sign(w.sum));
    w.sum = 0;
    w.locked = true;
    setTimeout(() => (w.locked = false), 600);
  };

  // a drag shouldn't also follow the "Read more" link it started on
  const onClickCapture = (e: MouseEvent) => {
    if (wasDragged()) e.preventDefault();
  };

  return (
    <section
      id="case-studies"
      aria-roledescription="carousel"
      aria-label="Case studies"
      // Figma: case-study frame fill; the panel spans the full width and clips the artwork
      className="relative flex flex-col overflow-hidden bg-[#1a1a1a] pt-[15px] pb-12 lg:block lg:min-h-[max(681px,100vh)] lg:pb-0"
    >
      {/* the title stays put while the previews change beneath it */}
      <div className="site-container pointer-events-none relative z-10 order-1">
        <SectionHeading>Case Studies</SectionHeading>
      </div>

      <div
        ref={stage}
        {...bind}
        onPointerDown={onPointerDown}
        tabIndex={0}
        aria-label="Case study previews"
        onKeyDown={onKeyDown}
        onWheel={onWheel}
        onClickCapture={onClickCapture}
        className="order-3 grid touch-pan-y outline-none select-none focus-visible:ring-1 focus-visible:ring-white/30 lg:absolute lg:inset-0"
      >
        {caseStudies.map((study, i) => {
          const offset = i - position;
          return (
            <div
              key={study.id}
              role="group"
              aria-roledescription="slide"
              aria-label={`${i + 1} of ${count}`}
              aria-hidden={i !== index}
              inert={i !== index}
              className="relative col-start-1 row-start-1 overflow-hidden"
              style={{
                visibility: Math.abs(offset) < 1 ? "visible" : "hidden",
              }}
            >
              <div className="site-container relative h-full lg:pt-[131px]">
                <CaseStudyPreview study={study} offset={offset} />
              </div>
            </div>
          );
        })}
      </div>

      {count > 1 && (
        // on phones the controls sit above the slides, since slides differ in height
        <div className="site-container relative z-10 order-2 mt-14 flex items-center gap-6 lg:absolute lg:inset-x-0 lg:top-[612px] lg:mt-0">
          <div className="flex items-center gap-1">
            {caseStudies.map((study, i) => (
              <button
                key={study.id}
                type="button"
                aria-label={`Show case study ${i + 1}: ${study.title}`}
                aria-current={i === index ? "true" : undefined}
                onClick={() => goTo(i)}
                className="flex size-5 items-center justify-center"
              >
                <img
                  src={i === index ? pipActive : pip}
                  alt=""
                  width={9}
                  height={8}
                />
              </button>
            ))}
          </div>
          <div className="relative h-[54px] w-[107px] shrink-0">
            <img src={carouselNav} alt="" width={107} height={54} />
            <button
              type="button"
              aria-label="Previous case study"
              disabled={index === 0}
              onClick={() => goTo(index - 1)}
              className="absolute inset-y-0 left-0 w-1/2 rounded hover:bg-white/5 disabled:cursor-default disabled:bg-[#1a1a1a]/60"
            />
            <button
              type="button"
              aria-label="Next case study"
              disabled={index === count - 1}
              onClick={() => goTo(index + 1)}
              className="absolute inset-y-0 right-0 w-1/2 rounded hover:bg-white/5 disabled:cursor-default disabled:bg-[#1a1a1a]/60"
            />
          </div>
        </div>
      )}
    </section>
  );
}
