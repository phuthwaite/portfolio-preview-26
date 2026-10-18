import { useEffect, useRef } from "react";
import { trackOnce } from "./lib/analytics";
import bgTop from "./assets/bg-top.png";
import Hero from "./sections/Hero";
import Dock from "./components/Dock";
import { Slide } from "./components/SlideStack";
import { useSlideStack } from "./hooks/useSlideStack";
import ClientLogos from "./sections/ClientLogos";
import CaseStudies from "./sections/CaseStudies";
import Profile from "./sections/Profile";
import DesignWork from "./sections/DesignWork";
import Experience from "./sections/Experience";
import Contact from "./sections/Contact";

// Figma: Background Gradient TOP — flattened export that already includes the layer's 64% opacity
// over the page background, so it is shown at full opacity
function BackgroundGradientTop() {
  return (
    <img
      src={bgTop}
      alt=""
      aria-hidden
      className="pointer-events-none absolute inset-x-0 top-0 h-[633px] w-full object-cover"
    />
  );
}

// Figma: home / dark / web — each section is a full-screen slide (see SlideStack)
export default function App() {
  const stack = useRef<HTMLElement>(null);
  const { active, heroHidden } = useSlideStack(stack);
  // how far visitors get: each section the first time it's reached
  useEffect(() => {
    if (heroHidden) trackOnce("section-reached", { section: active });
  }, [active, heroHidden]);
  return (
    <div className="relative min-h-screen bg-page">
      <main ref={stack} className="relative">
        <Slide
          section="case-studies"
          background={<BackgroundGradientTop />}
          className="lg:min-h-screen"
        >
          <Hero />
          {/* below the glowing line, so the first screen shows there's more to scroll to */}
          <ClientLogos className="mt-10 pb-12" />
          {/* on tall screens nothing peeks in below the hero, so hint that there's more */}
          <a
            href="#case-studies"
            aria-label="Scroll to case studies"
            data-umami-event="scroll-cue-click"
            className="absolute bottom-5 left-1/2 hidden -translate-x-1/2 rounded-full p-2 text-white/70 transition-colors hover:text-white tall:block"
          >
            <svg
              aria-hidden
              width="28"
              height="28"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="1.5"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="animate-scroll-cue"
            >
              <path d="m6 9 6 6 6-6" />
            </svg>
          </a>
        </Slide>
        <Slide section="case-studies" className="lg:min-h-screen">
          <CaseStudies />
        </Slide>
        <Slide section="profile" className="lg:min-h-screen">
          <Profile />
        </Slide>
        <Slide section="design" className="lg:min-h-screen">
          <DesignWork />
        </Slide>
        <Slide section="experience" className="lg:min-h-screen">
          <Experience />
        </Slide>
        <Slide section="contact" className="lg:min-h-screen">
          <Contact />
        </Slide>
      </main>
      <Dock active={active} visible={heroHidden} />
    </div>
  );
}
