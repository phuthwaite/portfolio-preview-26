// Figma: nav — previous / next chevrons. Each arrow is a tile-sized
// button with its chevron centred; on hover it gets a soft glass fill and the chevron brightens.
type Size = "md" | "sm";

function Arrow({
  direction,
  label,
  disabled,
  onClick,
  size,
}: {
  direction: "prev" | "next";
  size: Size;
  label: string;
  disabled: boolean;
  onClick: () => void;
}) {
  return (
    <button
      type="button"
      aria-label={label}
      disabled={disabled}
      onClick={onClick}
      className={`group flex cursor-pointer items-center justify-center text-light-gray ${size === "sm" ? "size-10 rounded-[10px]" : "h-[54px] w-[52px] rounded-[14px]"} transition-colors outline-none hover:bg-white/10 hover:text-white focus-visible:ring-1 focus-visible:ring-white/40 disabled:cursor-default disabled:bg-transparent disabled:text-light-gray/30`}
    >
      <svg
        aria-hidden
        width={size === "sm" ? 9 : 17}
        height={size === "sm" ? 18 : 34}
        viewBox="0 0 17 34"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        overflow="visible"
      >
        <path
          d={direction === "prev" ? "M17 0 0 17l17 17" : "M0 0l17 17L0 34"}
        />
      </svg>
    </button>
  );
}

// "01 / 05" — which item is showing, out of how many (the small size drops it on phones, where
// its row is tight)
function Counter({
  index,
  count,
  size,
}: {
  index: number;
  count: number;
  size: Size;
}) {
  return (
    <p
      aria-hidden
      className={`font-label ${size === "sm" ? "text-sm max-sm:hidden" : "text-base"} tracking-[0.04em] whitespace-nowrap text-dark-gray tabular-nums`}
    >
      <span className="text-white">{String(index + 1).padStart(2, "0")}</span>
      &nbsp;/&nbsp;{String(count).padStart(2, "0")}
    </p>
  );
}

// Section-level carousel controls for a heading row: counter, then the arrows
export function CarouselControls(props: {
  index: number;
  count: number;
  goTo: (i: number) => void;
  prevLabel?: string;
  nextLabel?: string;
  size?: Size;
  /** wraps from the last item to the first (and back), so neither arrow is ever disabled */
  loop?: boolean;
}) {
  const size = props.size ?? "md";
  return (
    <div
      className={`flex items-center ${size === "sm" ? "gap-3" : "gap-3 lg:gap-5"}`}
    >
      <Counter index={props.index} count={props.count} size={size} />
      <CarouselArrows {...props} />
    </div>
  );
}

export default function CarouselArrows({
  index,
  count,
  goTo,
  prevLabel = "Previous",
  nextLabel = "Next",
  size = "md",
  loop = false,
}: {
  index: number;
  count: number;
  goTo: (i: number) => void;
  prevLabel?: string;
  nextLabel?: string;
  size?: Size;
  /** wraps from the last item to the first (and back), so neither arrow is ever disabled */
  loop?: boolean;
}) {
  return (
    <div className="flex shrink-0 items-center gap-1">
      <Arrow
        direction="prev"
        size={size}
        label={prevLabel}
        disabled={!loop && index === 0}
        onClick={() => goTo(index - 1)}
      />
      <Arrow
        direction="next"
        size={size}
        label={nextLabel}
        disabled={!loop && index === count - 1}
        onClick={() => goTo(index + 1)}
      />
    </div>
  );
}
