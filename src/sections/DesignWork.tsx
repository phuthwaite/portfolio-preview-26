import { useRef, type KeyboardEvent } from "react";
import SectionHeading from "../components/SectionHeading";
import { Label } from "../components/Widget";
import pip from "../assets/pip.svg";
import pipActive from "../assets/pip-active.svg";
import carouselNav from "../assets/carousel-nav.svg";
import { designWork } from "../data/content";
import { progressOf, useMomentumSlider } from "../hooks/useMomentumSlider";

const GAP = 40; // px between cards (Figma: item → next item)

// Only slides near the current position are worth rendering in the synced layers.
const isNear = (i: number, position: number) => Math.abs(i - position) < 1.5;

// Figma: other sections > design work.
// Behaves like the momentum-slider "portfolio carousel": drag/throw the cards, and the
// card image zoom, big number and description all move in sync with the drag.
export default function DesignWork() {
  const firstCard = useRef<HTMLButtonElement>(null);
  const count = designWork.length;
  const { position, index, goTo, wasDragged, bind } = useMomentumSlider(
    count,
    () => (firstCard.current?.offsetWidth ?? 882) + GAP,
  );

  const onKeyDown = (e: KeyboardEvent) => {
    if (e.key === "ArrowRight") goTo(index + 1);
    else if (e.key === "ArrowLeft") goTo(index - 1);
    else return;
    e.preventDefault();
  };

  return (
    <section
      id="design"
      className="overflow-x-clip pt-[15px] pb-16 lg:min-h-[862px] lg:pb-0"
    >
      <div className="site-container">
        <SectionHeading>Design</SectionHeading>
        {/* Figma: design content > item */}
        <div
          role="region"
          aria-roledescription="carousel"
          aria-label="Design work"
          tabIndex={0}
          onKeyDown={onKeyDown}
          className="relative py-10 outline-none focus-visible:ring-1 focus-visible:ring-accent-border/50"
        >
          {/* Slide number: scales up and fades in as its card arrives (momentum-slider "numbers") */}
          <div
            aria-hidden
            className="pointer-events-none absolute -top-[48px] right-0 h-[84px] w-[110px] overflow-hidden lg:top-[40px] lg:right-auto lg:left-0 lg:h-[120px] lg:w-[132px]"
          >
            {designWork.map((_, i) => {
              if (!isNear(i, position)) return null;
              const p = progressOf(i, position);
              return (
                <span
                  key={i}
                  className="absolute inset-0 flex items-start justify-center font-display text-[72px] leading-none lg:text-[104px]"
                  style={{
                    transform: `translateX(${(i - position) * 100}%) scale(${0.4 + 0.6 * p})`,
                    opacity: p,
                    backgroundImage: "linear-gradient(to bottom, rgb(255 255 255 / 0.22), rgb(255 255 255 / 0.03))",
                    backgroundClip: "text",
                    WebkitBackgroundClip: "text",
                    color: "transparent",
                  }}
                >
                  {String(i + 1).padStart(2, "0")}
                </span>
              );
            })}
          </div>

          {/* Cards: the draggable track */}
          <div
            {...bind}
            className="@container relative cursor-grab touch-pan-y select-none [clip-path:inset(-40px_-100vw_-40px_0)] active:cursor-grabbing lg:pl-[140px] lg:[clip-path:inset(-40px_-100vw_-40px_140px)]"
          >
            <div
              className="flex [--card-w:100cqw] lg:[--card-w:882px]"
              style={{ gap: GAP, transform: `translateX(calc(${-position} * (var(--card-w) + ${GAP}px)))` }}
            >
              {designWork.map((item, i) => {
                const p = progressOf(i, position);
                return (
                  <button
                    key={i}
                    ref={i === 0 ? firstCard : undefined}
                    type="button"
                    tabIndex={-1}
                    aria-label={`${item.client}: ${item.alt}`}
                    aria-hidden={i !== index}
                    onClick={() => !wasDragged() && goTo(i)}
                    className={`glass-panel relative aspect-[882/499] w-(--card-w) shrink-0 overflow-hidden transition-[border-color] [--glass-radius:0] ${
                      i === index ? "[--glass-border:var(--color-accent-border)]" : ""
                    }`}
                    style={{ opacity: 0.44 + 0.56 * p }}
                  >
                    {/* Image zooms from 1.5x to 1x as the card settles (momentum-slider "images") */}
                    <span
                      className="absolute inset-0 block"
                      style={{ transform: `scale(${1.5 - 0.5 * p})` }}
                    >
                      <img
                        src={item.image}
                        alt={item.alt}
                        loading="lazy"
                        decoding="async"
                        draggable={false}
                        className={`size-full ${item.fit === "contain" ? "object-contain p-4 lg:p-6" : "object-cover object-top"}`}
                      />
                    </span>
                  </button>
                );
              })}
            </div>
          </div>

          {/* Figma: desc — titles slide vertically and cross-fade (momentum-slider "titles") */}
          <div className="relative z-10 -mt-6 h-[172px] w-[92%] overflow-hidden bg-[rgb(21_21_21/0.82)] sm:h-[132px] sm:max-w-[420px] lg:absolute lg:bottom-[138px] lg:left-0 lg:mt-0 lg:h-[150px]">
            {designWork.map((item, i) => {
              if (!isNear(i, position)) return null;
              return (
                <div
                  key={i}
                  aria-hidden
                  className="absolute inset-0 flex flex-col justify-center gap-2 py-3 pr-6 pl-2"
                  style={{
                    transform: `translateY(${-(i - position) * 100}%)`,
                    opacity: progressOf(i, position),
                  }}
                >
                  <Label>{item.year ? `${item.client} · ${item.year}` : item.client}</Label>
                  <p className="text-base leading-6 text-light-gray">{item.description}</p>
                </div>
              );
            })}
          </div>
          <p aria-live="polite" className="sr-only">
            {`${designWork[index].client}: ${designWork[index].description}, ${index + 1} of ${count}`}
          </p>

          {/* Figma: pips + nav */}
          <div className="mt-6 flex h-[74px] items-end gap-4 lg:mt-4 lg:gap-10 lg:pl-[140px]">
            {/* 31 dots don't fit a phone, so small screens get a counter instead */}
            <p aria-hidden className="flex h-[54px] flex-1 items-center font-label text-base tracking-[0.04em] text-dark-gray lg:hidden">
              <span className="text-white">{String(index + 1).padStart(2, "0")}</span>
              &nbsp;/&nbsp;{count}
            </p>
            <div className="hidden h-[54px] flex-1 items-center justify-between lg:flex lg:px-6">
              {designWork.map((item, i) => (
                <button
                  key={i}
                  type="button"
                  aria-label={`Show slide ${i + 1}: ${item.client}`}
                  aria-current={i === index ? "true" : undefined}
                  onClick={() => goTo(i)}
                  className="flex size-5 items-center justify-center"
                >
                  <img src={i === index ? pipActive : pip} alt="" width={9} height={8} />
                </button>
              ))}
            </div>
            <div className="relative h-[54px] w-[107px] shrink-0">
              <img src={carouselNav} alt="" width={107} height={54} />
              <button
                type="button"
                aria-label="Previous"
                disabled={index === 0}
                onClick={() => goTo(index - 1)}
                className="absolute inset-y-0 left-0 w-1/2 rounded hover:bg-white/5 disabled:cursor-default disabled:bg-page/50"
              />
              <button
                type="button"
                aria-label="Next"
                disabled={index === count - 1}
                onClick={() => goTo(index + 1)}
                className="absolute inset-y-0 right-0 w-1/2 rounded hover:bg-white/5 disabled:cursor-default disabled:bg-page/50"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
