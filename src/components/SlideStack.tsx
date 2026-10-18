import type { ReactNode } from "react";
import bgTexture from "../assets/bg-texture.png";
import type { SectionId } from "../data/content";

// "Slide-over" sections: on desktop each slide pins to the viewport and the next one slides up over
// it, while the covered slide shrinks and darkens slightly. It's built on native scrolling (CSS
// sticky), so trackpads, keyboard, find-in-page and anchor links keep working. A slide taller than
// the viewport scrolls normally until its bottom is reached, then pins. Phones and people who prefer
// reduced motion get the normal page.

// The scroll-driven behaviour lives in hooks/useSlideStack.

// Figma: BG Noise & Texture. The layer spans the top 2603px of the page; each slide carries its own
// copy, offset by the slide's position on the page, so the light continues seamlessly across slides.
function SlideTexture() {
  return (
    <div
      aria-hidden
      className="pointer-events-none absolute right-[-4px] left-[-40px] h-[2603px] opacity-80 mix-blend-plus-lighter"
      style={{ top: "calc(-1 * var(--slide-top, 0px) - 16px)" }}
    >
      <img src={bgTexture} alt="" className="size-full object-cover opacity-23" />
    </div>
  );
}

export function Slide({
  section,
  background,
  className = "",
  children,
}: {
  /** Nav item highlighted while this slide is in view */
  section: SectionId;
  /** Extra background layers drawn beneath the content */
  background?: ReactNode;
  className?: string;
  children: ReactNode;
}) {
  return (
    <div data-slide data-section={section} className={`relative isolate flow-root overflow-hidden bg-page lg:sticky ${className}`}>
      <div data-slide-inner className="relative flow-root min-h-[inherit]">
        {background}
        <SlideTexture />
        {children}
      </div>
      <div data-slide-shade aria-hidden className="pointer-events-none absolute inset-0 bg-black opacity-0" />
    </div>
  );
}
