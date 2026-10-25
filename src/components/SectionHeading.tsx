import type { ReactNode } from "react";

// Large faded "ghost" title that sits behind each section's content.
// The negative bottom margin makes the content start 116px below the title's top (at 144px), as in Figma.
// `aside` (e.g. carousel controls) sits at the right of the title's line, over the faded title.
const SIZE = "clamp(56px,9.5vw,144px)";

// The faded title's look, shared with other ghost numerals (e.g. the Design slide number): a white
// fade over a 1.3 line-height box, shown at 12% opacity
export const GHOST_GRADIENT =
  "linear-gradient(to bottom, #fff 16.5%, rgb(255 255 255 / 0.14) 74.33%)";
export const GHOST_OPACITY = 0.12;
// The same fade for numerals: Suez One only has old-style figures (3, 4, 5, 7 and 9 drop below the
// baseline), so the fade runs on to the bottom of those descenders instead of ending at the baseline
export const GHOST_NUMERAL_GRADIENT =
  "linear-gradient(to bottom, #fff 16.5%, rgb(255 255 255 / 0.3) 88%)";

export default function SectionHeading({
  children,
  aside,
}: {
  children: string;
  aside?: ReactNode;
}) {
  const title = (
    <h2
      className="pointer-events-none mb-[round(-0.494em,1px)] font-display text-(length:--heading-size) leading-[round(1.3em,1px)] whitespace-nowrap opacity-12 select-none"
      style={{
        ["--heading-size" as string]: SIZE,
        backgroundImage: GHOST_GRADIENT,
        backgroundClip: "text",
        WebkitBackgroundClip: "text",
        color: "transparent",
      }}
    >
      {children}
    </h2>
  );
  if (!aside) return title;
  return (
    <div className="relative">
      {title}
      <div
        className="pointer-events-auto absolute top-0 right-0 z-10 flex items-center"
        style={{ height: `round(calc(${SIZE} * 1.3), 2px)` }}
      >
        {aside}
      </div>
    </div>
  );
}
