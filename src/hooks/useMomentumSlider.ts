import { useCallback, useEffect, useRef, useState, type PointerEvent } from "react";

// Drag-with-momentum slider modelled on lmgonzalves' momentum-slider: dragging moves a
// continuous `position` (in slide units), releasing throws it with the drag velocity and
// a spring snaps it to the nearest slide. Everything synced to the slider (images,
// numbers, titles) is derived from that one `position`.

const STIFFNESS = 170;
const DAMPING = 26;
const THROW = 0.22; // seconds of velocity projected forward on release
const RUBBER_BAND = 0.35; // resistance when dragging past the first/last slide
const DRAG_THRESHOLD = 6; // px before a press counts as a drag (and swallows the click)

const prefersReducedMotion = () =>
  typeof window !== "undefined" && window.matchMedia("(prefers-reduced-motion: reduce)").matches;

export function useMomentumSlider(count: number, getStride: () => number) {
  const [position, setPosition] = useState(0);
  const pos = useRef(0);
  const vel = useRef(0);
  const target = useRef(0);
  const frame = useRef(0);
  const drag = useRef<{ x: number; start: number; samples: { x: number; t: number }[]; moved: boolean } | null>(null);
  const dragged = useRef(false);

  const max = count - 1;
  const clamp = (n: number) => Math.min(max, Math.max(0, n));

  const set = (n: number) => {
    pos.current = n;
    setPosition(n);
  };

  const stop = () => cancelAnimationFrame(frame.current);

  const animate = useCallback(() => {
    stop();
    if (prefersReducedMotion()) {
      vel.current = 0;
      set(target.current);
      return;
    }
    let last = performance.now();
    const step = (now: number) => {
      const dt = Math.min((now - last) / 1000, 1 / 30);
      last = now;
      const accel = STIFFNESS * (target.current - pos.current) - DAMPING * vel.current;
      vel.current += accel * dt;
      const next = pos.current + vel.current * dt;
      if (Math.abs(target.current - next) < 0.0005 && Math.abs(vel.current) < 0.001) {
        vel.current = 0;
        set(target.current);
        return;
      }
      set(next);
      frame.current = requestAnimationFrame(step);
    };
    frame.current = requestAnimationFrame(step);
  }, []);

  useEffect(() => stop, []);

  const goTo = useCallback(
    (i: number) => {
      target.current = Math.min(count - 1, Math.max(0, i));
      animate();
    },
    [animate, count],
  );

  const onPointerDown = (e: PointerEvent<HTMLElement>) => {
    if (e.pointerType === "mouse" && e.button !== 0) return;
    stop();
    vel.current = 0;
    dragged.current = false;
    drag.current = { x: e.clientX, start: pos.current, samples: [{ x: e.clientX, t: e.timeStamp }], moved: false };
  };

  const onPointerMove = (e: PointerEvent<HTMLElement>) => {
    const d = drag.current;
    if (!d) return;
    const dx = e.clientX - d.x;
    if (!d.moved) {
      if (Math.abs(dx) < DRAG_THRESHOLD) return;
      d.moved = true;
      dragged.current = true;
      e.currentTarget.setPointerCapture(e.pointerId);
    }
    let next = d.start - dx / getStride();
    if (next < 0) next *= RUBBER_BAND;
    if (next > max) next = max + (next - max) * RUBBER_BAND;
    set(next);
    d.samples.push({ x: e.clientX, t: e.timeStamp });
    if (d.samples.length > 5) d.samples.shift();
  };

  const onPointerUp = (e: PointerEvent<HTMLElement>) => {
    const d = drag.current;
    drag.current = null;
    if (!d) return;
    if (!d.moved) {
      // A tap: settle back if a previous throw was interrupted.
      target.current = Math.round(clamp(pos.current));
      animate();
      return;
    }
    const first = d.samples[0];
    const lastSample = { x: e.clientX, t: e.timeStamp };
    const dt = Math.max(lastSample.t - first.t, 1);
    const slidesPerSecond = (-(lastSample.x - first.x) / getStride() / dt) * 1000;
    vel.current = slidesPerSecond;
    target.current = Math.round(clamp(pos.current + slidesPerSecond * THROW));
    animate();
  };

  return {
    position,
    index: Math.round(clamp(position)),
    goTo,
    /** True if the last press turned into a drag, so the resulting click should be ignored. */
    wasDragged: () => dragged.current,
    bind: { onPointerDown, onPointerMove, onPointerUp, onPointerCancel: onPointerUp },
  };
}

/** 1 for the slide at the current position, falling to 0 one slide away. */
export const progressOf = (i: number, position: number) => Math.max(0, 1 - Math.abs(i - position));
