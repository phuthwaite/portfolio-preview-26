import { useLayoutEffect, useRef, type CSSProperties, type ReactNode } from "react";

export type Crop = { x: number; y: number; w: number; h: number };

const FRAME_W = 1098;
const FRAME_H = 681;

// Case-study artwork is drawn on a canvas in Figma frame coordinates (1098×681, origin at the
// panel's top-left; the content column starts at x 95, y 131). On desktop the canvas sits behind
// the article at that offset and may overflow the frame (the panel clips it). On small screens it
// shows just the `crop` region, scaled to the available width.
export default function ArtCanvas({
  crop,
  label,
  style,
  children,
}: {
  crop: Crop;
  label: string;
  /** extra styles for the wrapper, e.g. carousel transitions */
  style?: CSSProperties;
  children: ReactNode;
}) {
  const wrapper = useRef<HTMLDivElement>(null);
  const canvas = useRef<HTMLDivElement>(null);

  useLayoutEffect(() => {
    const w = wrapper.current!;
    const c = canvas.current!;
    const desktop = window.matchMedia("(min-width: 1024px)");
    const fit = () => {
      c.style.transform = desktop.matches ? "" : `scale(${w.clientWidth / crop.w}) translate(${-crop.x}px, ${-crop.y}px)`;
    };
    const observer = new ResizeObserver(fit);
    observer.observe(w);
    desktop.addEventListener("change", fit);
    fit();
    return () => {
      observer.disconnect();
      desktop.removeEventListener("change", fit);
    };
  }, [crop]);

  return (
    <div
      ref={wrapper}
      role="img"
      aria-label={label}
      className="pointer-events-none relative order-last mx-auto mt-10 w-full max-w-[520px] overflow-hidden select-none lg:absolute lg:top-[-131px] lg:left-[-95px] lg:mt-0 lg:h-[681px] lg:w-[1098px] lg:max-w-none lg:overflow-visible"
      style={{ aspectRatio: `${crop.w} / ${crop.h}`, ...style }}
    >
      <div ref={canvas} className="absolute top-0 left-0 origin-top-left" style={{ width: FRAME_W, height: FRAME_H }}>
        {children}
      </div>
    </div>
  );
}
