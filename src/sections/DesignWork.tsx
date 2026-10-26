import { useEffect, useRef, type KeyboardEvent } from "react";
import SectionHeading, {
  GHOST_NUMERAL_GRADIENT,
  GHOST_OPACITY,
} from "../components/SectionHeading";
import { Label } from "../components/Widget";
import { CarouselControls } from "../components/CarouselArrows";
import { designWork } from "../data/content";
import { progressOf, useMomentumSlider } from "../hooks/useMomentumSlider";
import { trackOnce } from "../lib/analytics";
import { useEdgeNav } from "../hooks/useEdgeNav";

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

  // which slides people move on to (the first is counted by "section-reached")
  const firstRender = useRef(true);
  useEffect(() => {
    if (firstRender.current) return void (firstRender.current = false);
    trackOnce("design-viewed", {
      item: `${index + 1} ${designWork[index].client}`,
    });
  }, [index]);

  const onKeyDown = (e: KeyboardEvent) => {
    if (e.key === "ArrowRight") goTo(index + 1);
    else if (e.key === "ArrowLeft") goTo(index - 1);
    else return;
    e.preventDefault();
  };

  // click either side of the section (outer 40% of the window) to step through the work
  const { cursorClass, edgeNav } = useEdgeNav({
    index,
    count,
    goTo,
    wasDragged,
  });

  return (
    <section
      id="design"
      {...edgeNav}
      className={`overflow-x-clip pt-[15px] pb-16 lg:min-h-[862px] lg:pb-0 ${cursorClass}`}
    >
      <div className="site-container">
        <SectionHeading
          aside={<CarouselControls index={index} count={count} goTo={goTo} />}
        >
          Design
        </SectionHeading>
        {/* Figma: design content > item */}
        <div
          role="region"
          aria-roledescription="carousel"
          aria-label="Design work"
          tabIndex={0}
          onKeyDown={onKeyDown}
          className="relative py-10 outline-none focus-visible:ring-1 focus-visible:ring-accent-border/50"
        >
          {/* Slide number: scales up and fades in as its card arrives (momentum-slider "numbers"); the
              box is placed so the numerals' tops line up with the card's top edge */}
          <div
            aria-hidden
            className="pointer-events-none absolute top-[-5px] left-0 hidden h-[136px] w-[132px] overflow-hidden lg:block"
          >
            {designWork.map((_, i) => {
              if (!isNear(i, position)) return null;
              const p = progressOf(i, position);
              return (
                <span
                  key={i}
                  className="absolute inset-0 flex items-start justify-center font-display text-[104px] leading-[1.3]"
                  style={{
                    transform: `translateX(${(i - position) * 100}%) scale(${0.4 + 0.6 * p})`,
                    opacity: GHOST_OPACITY * p,
                    backgroundImage: GHOST_NUMERAL_GRADIENT,
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

          {/* Cards: the draggable track, inside a strip that reaches the viewport's right edge so the
              next card can fade out towards it (as the client logos do) */}
          <div className="design-track-fade">
            <div
              {...bind}
              className="@container relative touch-pan-y select-none [clip-path:inset(-40px_-100vw_-40px_0)] lg:pl-[140px] lg:[clip-path:inset(-40px_-100vw_-40px_140px)]"
            >
              <div
                className="flex [--card-w:100cqw] lg:[--card-w:min(882px,100cqw)]"
                style={{
                  gap: GAP,
                  transform: `translateX(calc(${-position} * (var(--card-w) + ${GAP}px)))`,
                }}
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
                      className="glass-panel relative aspect-[882/499] cursor-[inherit] w-(--card-w) shrink-0 overflow-hidden [--glass-radius:0]"
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
          </div>

          {/* Figma: desc — titles slide vertically and cross-fade (momentum-slider "titles") */}
          <div className="relative z-10 -mt-6 h-[172px] w-[92%] overflow-hidden bg-[rgb(21_21_21/0.82)] sm:h-[132px] sm:max-w-[420px] lg:absolute lg:bottom-[48px] lg:left-0 lg:mt-0 lg:h-[150px]">
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
                  <Label>
                    {item.year ? `${item.client} · ${item.year}` : item.client}
                  </Label>
                  <p className="text-base leading-6 text-light-gray">
                    {item.description}
                  </p>
                </div>
              );
            })}
          </div>
          <p aria-live="polite" className="sr-only">
            {`${designWork[index].client}: ${designWork[index].description}, ${index + 1} of ${count}`}
          </p>
        </div>
      </div>
    </section>
  );
}
