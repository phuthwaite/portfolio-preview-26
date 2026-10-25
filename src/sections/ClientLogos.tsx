import axs from "../assets/axs.svg";
import vw from "../assets/vw.svg";
import samsung from "../assets/samsung.svg";
import twc from "../assets/twc.svg";
import skyscanner from "../assets/skyscanner.png";
import pokerstars from "../assets/pokerstars.svg";
import tripadvisor from "../assets/tripadvisor.svg";
import bbc from "../assets/bbc.png";
import youview from "../assets/youview.png";
import ms from "../assets/ms.svg";
import umg from "../assets/umg.svg";
import hmv from "../assets/hmv.svg";
import sega from "../assets/sega.svg";
import bt from "../assets/bt-logo.svg";
import virginMedia from "../assets/virgin-media.svg";
import karenMillen from "../assets/karen-millen.svg";

type Logo = { src: string; name: string; w: number; h: number };

// Figma: other sections > client logos (sizes in px). Shown as one slowly scrolling, endless strip;
// the order alternates wide wordmarks with compact marks.
const rows: Logo[][] = [
  [
    { src: axs, name: "AXS", w: 70.5, h: 31 },
    { src: samsung, name: "Samsung", w: 148, h: 22.7 },
    { src: vw, name: "Volkswagen", w: 45, h: 45 },
    { src: twc, name: "The White Company", w: 190, h: 39.5 },
    { src: virginMedia, name: "Virgin Media", w: 78.7, h: 46 },
    { src: karenMillen, name: "Karen Millen", w: 150, h: 17.5 },
  ],
  [
    { src: ms, name: "M&S", w: 72, h: 27 },
    { src: skyscanner, name: "Skyscanner", w: 158, h: 28 },
    { src: bt, name: "BT", w: 40, h: 40 },
    { src: pokerstars, name: "PokerStars", w: 167, h: 31.2 },
    { src: hmv, name: "HMV", w: 62.8, h: 26.7 },
  ],
  [
    { src: tripadvisor, name: "Tripadvisor", w: 144, h: 30 },
    { src: sega, name: "SEGA", w: 78.5, h: 26.5 },
    { src: umg, name: "Universal Music Group", w: 124, h: 46.7 },
    { src: bbc, name: "BBC", w: 89, h: 25 },
    { src: youview, name: "YouView", w: 111, h: 32 },
  ],
];

const logos = rows.flat();
// two rows of eight, scrolling in opposite directions
const half = Math.ceil(logos.length / 2);
const marqueeRows = [logos.slice(0, half), logos.slice(half)];

function LogoList({ items, hidden = false }: { items: Logo[]; hidden?: boolean }) {
  return (
    // padding-right matches the gap, so the two copies join seamlessly
    <ul aria-hidden={hidden || undefined} className="logo-marquee-list flex shrink-0 items-center gap-x-10 pr-10 lg:gap-x-16 lg:pr-16">
      {items.map((logo) => (
        <li key={logo.name} className="flex h-[38px] shrink-0 items-center lg:h-[47px]">
          <img
            src={logo.src}
            alt={hidden ? "" : logo.name}
            width={logo.w}
            height={logo.h}
            // 80% of the desktop size on small screens (--logo-scale)
            className="h-auto max-w-none"
            style={{ width: `calc(${logo.w}px * var(--logo-scale, 1))` }}
          />
        </li>
      ))}
    </ul>
  );
}

// Two copies side by side scroll by exactly one copy's width, then repeat: an endless strip.
// `seconds` is one loop; it's scaled to the strip's length so every strip moves at the same speed.
function Marquee({ items, seconds, reverse = false, className = "" }: { items: Logo[]; seconds: number; reverse?: boolean; className?: string }) {
  return (
    <div
      className={`logo-marquee-track flex w-max ${className}`}
      style={{ animationDuration: `${seconds}s`, animationDirection: reverse ? "reverse" : "normal" }}
    >
      <LogoList items={items} />
      <LogoList items={items} hidden />
    </div>
  );
}

// Two rows of logos scrolling in opposite directions; smaller on small screens.
// The edges fade out; hovering pauses it; reduced motion shows a still, wrapped list instead.
export default function ClientLogos({ className = "" }: { className?: string }) {
  return (
    <section aria-labelledby="clients-label" className={className}>
      {/* says what the logos are; styled like the site's other small labels */}
      <p
        id="clients-label"
        className="site-container relative mb-5 text-center text-balance text-xs font-medium tracking-[0.25em] text-medium-gray uppercase lg:mb-6"
      >
        20+ years designing for brands including
      </p>
      <div className="logo-marquee flex flex-col gap-4 overflow-hidden opacity-57 [--logo-scale:0.8] lg:gap-5 lg:[--logo-scale:1]">
        <Marquee items={marqueeRows[0]} seconds={50} />
        <Marquee items={marqueeRows[1]} seconds={50} reverse />
      </div>
    </section>
  );
}
