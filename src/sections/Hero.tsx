import audioPng from "../assets/audio.png";
import portraitPng from "../assets/portrait-ph.png";
import heroGlowSvg from "../assets/hero-glow.svg";
import heroLineSvg from "../assets/hero-line-stroke.svg";
import NavTile from "../components/NavTile";
import NameLockup from "../components/NameLockup";
import { navItems } from "../data/content";

// Figma: Hero > Content-Intro > Name (desktop sizes are 90% of Figma's)
function Name() {
  return (
    <div className="relative w-[min(84%,520px)] lg:w-full lg:max-w-[574px]">
      <h1>
        <span className="sr-only">Pauline Huthwaite</span>
        <NameLockup className="-mt-[1.72%] -mb-[0%] w-full" />
      </h1>
      <button
        type="button"
        aria-label="Hear how to pronounce my name"
        className="absolute top-[58%] left-[98.8%] flex size-[28px] items-center justify-center rounded-2xl lg:size-[25px] bg-[rgb(13_13_13/0.5)] transition-colors hover:bg-white/10"
      >
        <img
          src={audioPng}
          alt=""
          className="h-[14px] w-[16.39px] object-cover opacity-50 lg:h-[12.6px] lg:w-[14.75px]"
        />
      </button>
    </div>
  );
}

// Figma: Hero > Content-Intro > title
function Title() {
  return (
    <p className="flex flex-wrap items-center justify-center gap-x-[0.2em] text-[clamp(18px,4.8vw,26px)] leading-[normal] tracking-[-0.02em] text-white lg:justify-start lg:text-[clamp(28px,2.43vw,38px)]">
      <span>Digital</span>
      <span className="gradient-text [--gradient-angle:146.11deg]">
        Product
      </span>
      <span>&amp;</span>
      <span className="gradient-text [--gradient-angle:153.95deg]">
        Experience
      </span>
      <span>Designer</span>
    </p>
  );
}

// Figma: Hero > nav
// The hero is the starting point rather than a section, so none of its items is shown as active.
// Every item gets the same width so the tiles are evenly spaced whatever their label: on phones a
// tile-wide slot with the label overhanging evenly either side, on desktop equal columns as wide as
// the longest label.
function Nav() {
  return (
    <nav
      aria-label="Sections"
      className="grid auto-cols-[48px] grid-flow-col justify-center gap-6 lg:auto-cols-fr lg:justify-start lg:gap-0"
    >
      {navItems.map((item) => (
        <a
          key={item.id}
          href={`#${item.id}`}
          data-umami-event="hero-nav-click"
          data-umami-event-section={item.id}
          className="group flex flex-col items-center gap-[10px] lg:gap-[9px]"
        >
          {/* row keeps the height of the (larger) active tile so the layout doesn't shift */}
          <span className="flex h-[60px] items-center lg:h-[70.2px]">
            <NavTile
              icon={item.icon}
              active={false}
              bright
              className="size-[48px] group-hover:[--glass-border:rgb(235_200_245/0.6)] lg:size-[54.79px]"
            />
          </span>
          <span className="text-[10px] font-medium whitespace-nowrap text-white/40 uppercase transition-colors group-hover:text-white group-focus-visible:text-white lg:text-[10.8px]">
            {item.label}
          </span>
        </a>
      ))}
    </nav>
  );
}

// Set to false to hide the portrait.
const SHOW_PORTRAIT = true;

export default function Hero() {
  return (
    <header
      id="hero"
      className="relative mt-[33px] overflow-hidden lg:h-[613px]"
    >
      {/* Figma: the line's glow — behind the portrait */}
      <img
        src={heroGlowSvg}
        alt=""
        aria-hidden
        className="pointer-events-none absolute bottom-[-1px] left-[1%] h-[148px] w-[98.5%]"
      />
      {/* small screens: bottom padding leaves room for the portrait, which stands behind the text */}
      <div
        className={`site-container relative flex flex-col pt-16 lg:block lg:min-h-0 lg:pt-0 lg:pb-0 ${
          SHOW_PORTRAIT
            ? "min-h-[calc(min(92vw,480px)*1.26+40px)] justify-end pb-6"
            : ""
        }`}
      >
        {/* Figma: portrait */}
        {SHOW_PORTRAIT && (
          <img
            src={portraitPng}
            alt="Portrait of Pauline Huthwaite"
            width={447}
            height={563}
            // transparent cut-out; it stands on the glowing line (y 593), which is drawn in front of it.
            // On small screens it's centred behind the name, title and nav, faded towards the bottom so they stay legible.
            className="absolute bottom-0 left-1/2 w-[min(92vw,480px)] -translate-x-1/2 max-lg:[mask-image:linear-gradient(to_bottom,#000_45%,rgb(0_0_0/0.55)_80%)] lg:top-[30px] lg:bottom-auto lg:left-[562px] lg:w-[447px] lg:translate-x-0"
          />
        )}
        {/* Figma: Content-Intro */}
        <div className="relative z-10 flex flex-col items-center gap-4 text-center lg:items-start lg:gap-[14.4px] lg:pt-[167px] lg:text-left">
          <Name />
          <Title />
          <div className="mt-6 lg:mt-[30.6px]">
            <Nav />
          </div>
        </div>
      </div>
      {/* Figma: the glowing line itself — in front of the portrait so it stays unbroken */}
      <img
        src={heroLineSvg}
        alt=""
        aria-hidden
        className="pointer-events-none absolute bottom-[-1px] left-[1%] z-10 h-[148px] w-[98.5%]"
      />
      {/* small screens: stands the portrait on the glowing line, or keeps the nav clear of it */}
      <div className={`lg:hidden ${SHOW_PORTRAIT ? "h-5" : "h-[110px]"}`} />
    </header>
  );
}
