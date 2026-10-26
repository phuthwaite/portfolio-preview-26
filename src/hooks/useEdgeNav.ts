import { useState, type MouseEvent, type PointerEvent } from "react";

// Mouse-only "click either side" navigation for a carousel section: the left and right `share` of the
// viewport step back and forward, shown by a chevron cursor (cursor-prev / cursor-next in index.css).
// Links and anything marked data-edge-nav-ignore (e.g. the arrow buttons) keep their own behaviour, a
// zone with nowhere to go does nothing, and touch screens are left to swiping.
const IGNORE = "a, input, textarea, select, [data-edge-nav-ignore]";

type Side = "prev" | "next" | null;

export function useEdgeNav({
  index,
  count,
  goTo,
  wasDragged = () => false,
  share = 0.4,
}: {
  index: number;
  count: number;
  goTo: (i: number) => void;
  wasDragged?: () => boolean;
  share?: number;
}) {
  const [side, setSide] = useState<Side>(null);

  const sideAt = (
    x: number,
    target: EventTarget | null,
    pointerType: string,
    at = index,
  ): Side => {
    if (pointerType !== "mouse") return null;
    if (target instanceof Element && target.closest(IGNORE)) return null;
    if (x < window.innerWidth * share) return at > 0 ? "prev" : null;
    if (x > window.innerWidth * (1 - share))
      return at < count - 1 ? "next" : null;
    return null;
  };

  const onPointerMove = (e: PointerEvent) =>
    setSide(sideAt(e.clientX, e.target, e.pointerType));
  const onPointerLeave = () => setSide(null);

  // capture phase, so a click in a zone steps the carousel instead of reaching (say) a card underneath
  const onClickCapture = (e: MouseEvent) => {
    const pointerType =
      (e.nativeEvent as globalThis.PointerEvent).pointerType || "mouse";
    const to = sideAt(e.clientX, e.target, pointerType);
    if (!to || wasDragged()) return;
    e.preventDefault();
    e.stopPropagation();
    const next = to === "prev" ? index - 1 : index + 1;
    goTo(next);
    // the carousel may now be at an end, so update the cursor straight away
    setSide(sideAt(e.clientX, e.target, pointerType, next));
  };

  const cursorClass =
    side === "prev" ? "cursor-prev" : side === "next" ? "cursor-next" : "";
  return {
    cursorClass,
    edgeNav: { onPointerMove, onPointerLeave, onClickCapture },
  };
}
