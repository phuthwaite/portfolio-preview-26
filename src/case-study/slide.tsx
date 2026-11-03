/* eslint-disable react-refresh/only-export-components -- shares the slide type styles alongside the slide components */
import type { CSSProperties, ReactNode } from "react";
import footerMark from "../assets/case-studies/samsung/footer-mark.svg";

// Building blocks for case study slides. On desktop each slide is a 1920×1080 canvas scaled to fit the
// screen (see Deck), so positions are percentages of the slide and sizes are in cqw (1cqw = 19.2px at
// full size), matching the original Figma slides. On phones the same pieces stack in one column.

/** Type styles from the deck */
export const type = {
  h1: "font-medium leading-[1.2] tracking-[0.01em] text-[44px] lg:text-[5.21cqw]",
  h2: "font-medium leading-[1.2] tracking-[0.01em] text-[28px] lg:text-[2.5cqw]",
  body: "leading-[1.4] text-[16px] lg:text-[1.56cqw] [&_strong]:font-bold [&_p+p]:mt-[1.4em]",
};

/**
 * Something placed on the slide at x/y/w/h (percentages of the 1920×1080 slide). On phones it's an
 * ordinary block in the column instead.
 */
export function At({
  x,
  y,
  w,
  h,
  className = "",
  children,
}: {
  x: number;
  y: number;
  w?: number;
  h?: number;
  className?: string;
  children: ReactNode;
}) {
  const vars = { "--x": `${x}%`, "--y": `${y}%`, "--w": w === undefined ? "auto" : `${w}%`, "--h": h === undefined ? "auto" : `${h}%` } as CSSProperties;
  return (
    <div style={vars} className={`relative lg:absolute lg:top-(--y) lg:left-(--x) lg:h-(--h) lg:w-(--w) ${className}`}>
      {children}
    </div>
  );
}

/** An image filling its <At> box on desktop (cover or contain), at its natural size on phones. Not lazy-loaded:
    the deck only mounts the slides either side of the current one, and Safari can skip lazy images there. */
export function Img({
  src,
  alt = "",
  fit = "contain",
  className = "",
}: {
  src: string;
  alt?: string;
  fit?: "contain" | "cover" | "fill";
  className?: string;
}) {
  const fitClass = { contain: "lg:object-contain", cover: "lg:object-cover lg:object-top", fill: "lg:object-fill" }[fit];
  return <img src={src} alt={alt} className={`block h-auto w-full lg:h-full ${fitClass} ${className}`} />;
}

/** Slide number and section label, top left (the same spot on every slide, sidebar or not) */
export function SlideHeader({ section, number, sidebar = false }: { section: string; number: string; sidebar?: boolean }) {
  return (
    <header
      className={`flex items-baseline gap-[0.9em] text-[13px] leading-[1.4] font-medium tracking-[0.1875em] text-white uppercase lg:absolute lg:top-[3.7%] lg:text-[1.67cqw] ${
        // 11.7% of the sidebar's width is the same 3.65% of the slide
        sidebar ? "lg:left-[11.7%]" : "lg:left-[3.65%]"
      }`}
    >
      <span className="font-sans tracking-[0.03em] normal-case opacity-50">{number}</span>
      <span>{section}</span>
    </header>
  );
}

/** The deck's footer: mark | UX Case Study: … (desktop only) */
export function SlideFooter({ label }: { label: string }) {
  return (
    <p className="absolute bottom-[4.2%] left-[3.65%] z-10 hidden items-center gap-[0.4em] text-[0.84cqw] tracking-[0.02em] whitespace-nowrap text-white lg:flex">
      <img src={footerMark} alt="" className="h-[0.74em] w-[0.58em]" />
      <span aria-hidden className="h-[0.74em] w-px bg-white" />
      {label}
    </p>
  );
}

/** The dark panel down the left of "sidebar" slides (31.25% of the width), holding the slide's copy.
    On phones there's no panel: its contents just start the column. */
export function Sidebar({ dark = 0.8, children }: { dark?: number; children: ReactNode }) {
  return (
    <div
      style={{ "--panel": `rgb(0 0 0 / ${dark})` } as CSSProperties}
      className="relative flex flex-col gap-8 lg:absolute lg:inset-y-0 lg:left-0 lg:w-[31.25%] lg:gap-0 lg:bg-(--panel)"
    >
      {children}
    </div>
  );
}

/** Copy inside a sidebar: title and text, from 19.5% down (positions are relative to the sidebar) */
export function SideCopy({ title, children }: { title: ReactNode; children: ReactNode }) {
  return (
    <div className="flex flex-col gap-5 lg:absolute lg:top-[19.5%] lg:right-[6.7%] lg:left-[11.7%] lg:gap-[1.4cqw]">
      <h2 className={type.h2}>{title}</h2>
      <div className={type.body}>{children}</div>
    </div>
  );
}
