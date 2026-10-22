import { useEffect, useRef, useState, type KeyboardEvent } from "react";
import { Label } from "../components/Widget";
import { CarouselControls } from "../components/CarouselArrows";
import { FillUnderline, LinkArrow } from "../components/LinkDecor";
import { recommendationsUrl, testimonials } from "../data/content";
import { trackOnce } from "../lib/analytics";

// LinkedIn recommendations in the Contact section: one quote at a time, cross-fading, stepped with
// the arrows (or arrow keys). No auto-advance, so nobody loses a quote mid-sentence. The quotes are
// stacked in one grid cell, so the panel is as tall as the longest and doesn't jump between them.
export default function Testimonials({
  className = "",
}: {
  className?: string;
}) {
  const [index, setIndex] = useState(0);
  const count = testimonials.length;
  const goTo = (i: number) => setIndex(Math.max(0, Math.min(count - 1, i)));

  const onKeyDown = (e: KeyboardEvent) => {
    if (e.key === "ArrowRight") goTo(index + 1);
    else if (e.key === "ArrowLeft") goTo(index - 1);
    else return;
    e.preventDefault();
  };

  // which quotes people read on to (the first is seen with the section)
  const firstRender = useRef(true);
  useEffect(() => {
    if (firstRender.current) return void (firstRender.current = false);
    trackOnce("testimonial-viewed", { name: testimonials[index].name });
  }, [index]);

  return (
    <div
      role="region"
      aria-roledescription="carousel"
      aria-label="Recommendations"
      tabIndex={0}
      onKeyDown={onKeyDown}
      className={`glass-panel flex flex-col gap-6 max-lg:p-5 outline-none focus-visible:[--glass-border:rgb(255_255_255/0.4)] ${className}`}
    >
      <div className="flex items-center justify-between gap-4">
        <Label>Recommendations</Label>
        <CarouselControls
          index={index}
          count={count}
          goTo={goTo}
          size="sm"
          prevLabel="Previous recommendation"
          nextLabel="Next recommendation"
        />
      </div>

      <div className="grid">
        {testimonials.map((t, i) => {
          const current = i === index;
          return (
            <figure
              key={t.name}
              aria-roledescription="slide"
              aria-label={`${i + 1} of ${count}`}
              aria-hidden={!current}
              inert={!current}
              className={`col-start-1 row-start-1 flex flex-col justify-between gap-6 transition-[opacity,translate] duration-500 ease-out motion-reduce:transition-none ${
                current
                  ? "translate-y-0 opacity-100"
                  : `opacity-0 ${i < index ? "-translate-y-2" : "translate-y-2"}`
              }`}
            >
              <blockquote className="relative text-lg leading-8 text-white lg:text-xl lg:leading-9">
                <span
                  aria-hidden
                  className="absolute -top-3 -left-1 font-display text-6xl leading-none text-white/10 select-none"
                >
                  “
                </span>
                <p className="relative">{t.quote}</p>
              </blockquote>
              <figcaption className="flex flex-col gap-0.5 text-[15px] leading-6">
                <span className="font-semibold text-white">{t.name}</span>
                <span className="text-light-gray">{t.role}</span>
                <span className="text-light-gray/60">{t.relationship}</span>
              </figcaption>
            </figure>
          );
        })}
      </div>

      <a
        href={recommendationsUrl}
        target="_blank"
        rel="noopener noreferrer"
        data-umami-event="recommendations-linkedin-click"
        className="group cursor-new-window inline-flex w-fit flex-col gap-1 self-start font-label text-xs tracking-[0.2em] whitespace-nowrap text-light-gray uppercase"
      >
        <span className="inline-flex items-center gap-1.5">
          More on LinkedIn
          <LinkArrow className="size-[1.1em]" />
          <span className="sr-only">(opens in a new tab)</span>
        </span>
        <FillUnderline className="h-px" />
      </a>
    </div>
  );
}
