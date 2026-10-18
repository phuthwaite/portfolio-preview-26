import { useLayoutEffect, useRef } from "react";
import nameSvg from "../assets/name.svg?raw";

// The name lockup, inlined so its letters can animate on load: each letter's outline is drawn
// (stroke-dashoffset from its full length to 0), then its fill fades in as the outline fades out.
// All letters animate together. Timings live in index.css (.name-lockup).
export default function NameLockup({ className = "" }: { className?: string }) {
  const ref = useRef<HTMLSpanElement>(null);

  useLayoutEffect(() => {
    const root = ref.current!;
    root.querySelectorAll<SVGPathElement>("path").forEach((path) => {
      path.style.setProperty("--len", String(Math.ceil(path.getTotalLength())));
    });
    // set before first paint, so the finished name never flashes before the animation
    root.dataset.animate = "";
  }, []);

  return <span ref={ref} aria-hidden className={`name-lockup block ${className}`} dangerouslySetInnerHTML={{ __html: nameSvg }} />;
}
