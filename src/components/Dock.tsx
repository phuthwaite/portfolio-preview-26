import { useState, type MouseEvent, type PointerEvent } from "react";
import NavTile from "./NavTile";
import { navItems, type SectionId } from "../data/content";

// Interactions ported from the macOS project's dock (_site/macos/src/module/desktop/dock):
// a discrete step-function magnify, so only icons within 2 places of the hovered one
// are affected, each at a fixed scale/lift.
const STEP_TRANSFORMS = [
  { scale: 1.5, translateY: -10 }, // distance 0 — the hovered icon
  { scale: 1.2, translateY: -6 }, // distance 1
  { scale: 1.1, translateY: 0 }, // distance 2
];
const RESTING_TRANSFORM = { scale: 1, translateY: 0 };

const getTransform = (distance: number | null) =>
  (distance === null ? undefined : STEP_TRANSFORMS[distance]) ??
  RESTING_TRANSFORM;

// "Home" (back to the top of the page), then the hero nav's sections
const dockItems = [{ id: "top", label: "Home", icon: "home" as const }, ...navItems];

const scrollToTop = (e: MouseEvent<HTMLAnchorElement>) => {
  e.preventDefault();
  const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
  window.scrollTo({ top: 0, behavior: reduce ? "auto" : "smooth" });
  history.replaceState(null, "", location.pathname + location.search);
};

// The hero nav, docked to the bottom of the viewport once the hero has scrolled away.
export default function Dock({
  active,
  visible,
}: {
  active: SectionId;
  visible: boolean;
}) {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

  // Magnify follows a mouse only; touch taps go straight to the section.
  const hover = (index: number) => (e: PointerEvent) => {
    if (e.pointerType === "mouse") setHoveredIndex(index);
  };

  return (
    <>
      {/* darkens and blurs the content behind the dock so it stands out; fades in with the dock */}
      <div
        aria-hidden
        className={`dock-backdrop pointer-events-none fixed inset-x-0 bottom-0 z-40 h-40 lg:h-64 transition-opacity duration-500 ${
          visible ? "opacity-100" : "opacity-0"
        }`}
      />
      <nav
        id="dock"
        aria-label="Sections"
        aria-hidden={!visible}
        inert={!visible}
        className={`fixed bottom-4 left-1/2 z-50 -translate-x-1/2 transition-[translate,opacity] duration-500 ease-[cubic-bezier(0.2,0.8,0.2,1)] ${
          visible
            ? "translate-y-0 opacity-100"
            : "pointer-events-none translate-y-[calc(100%+24px)] opacity-0"
        }`}
      >
        <div
          className="dock-container"
          onMouseLeave={() => setHoveredIndex(null)}
        >
          {dockItems.map((item, index) => {
            const isActive = item.id === active;
            const isHovered = hoveredIndex === index;
            const { scale, translateY } = getTransform(
              hoveredIndex === null ? null : Math.abs(index - hoveredIndex),
            );

            return (
              <div
                key={item.id}
                className={`dock-item ${isHovered ? "dock-item-hovered" : ""}`}
                onPointerEnter={hover(index)}
              >
                <a
                  href={`#${item.id}`}
                  aria-current={isActive ? "true" : undefined}
                  onClick={item.id === "top" ? scrollToTop : undefined}
                  className="dock-link group"
                >
                  <span
                    className="dock-icon"
                    style={{
                      transform: `scale(${scale}) translateY(${translateY}px)`,
                    }}
                  >
                    <NavTile
                      icon={item.icon}
                      active={isActive}
                      className="dock-tile size-full"
                    />
                  </span>
                  <span className="dock-label">{item.label}</span>
                </a>
              </div>
            );
          })}
        </div>
      </nav>
    </>
  );
}
