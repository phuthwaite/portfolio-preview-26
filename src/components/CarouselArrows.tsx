// Figma: nav — previous / next chevrons. Each arrow is a tile-sized
// button with its chevron centred; on hover it gets a soft glass fill and the chevron brightens.
function Arrow({
  direction,
  label,
  disabled,
  onClick,
}: {
  direction: "prev" | "next";
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
      className="group flex h-[54px] w-[52px] cursor-pointer items-center justify-center rounded-[14px] text-light-gray transition-colors outline-none hover:bg-white/10 hover:text-white focus-visible:ring-1 focus-visible:ring-white/40 disabled:cursor-default disabled:bg-transparent disabled:text-light-gray/30"
    >
      <svg
        aria-hidden
        width="17"
        height="34"
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

// "01 / 05" — which item is showing, out of how many
function Counter({ index, count }: { index: number; count: number }) {
  return (
    <p
      aria-hidden
      className="font-label text-base tracking-[0.04em] whitespace-nowrap text-dark-gray tabular-nums"
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
}) {
  return (
    <div className="flex items-center gap-3 lg:gap-5">
      <Counter index={props.index} count={props.count} />
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
}: {
  index: number;
  count: number;
  goTo: (i: number) => void;
  prevLabel?: string;
  nextLabel?: string;
}) {
  return (
    <div className="flex shrink-0 items-center gap-1">
      <Arrow
        direction="prev"
        label={prevLabel}
        disabled={index === 0}
        onClick={() => goTo(index - 1)}
      />
      <Arrow
        direction="next"
        label={nextLabel}
        disabled={index === count - 1}
        onClick={() => goTo(index + 1)}
      />
    </div>
  );
}
