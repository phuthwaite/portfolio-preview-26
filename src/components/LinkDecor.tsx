// Shared CTA decorations. Both take the link's text colour and react to the link's `group` hover/focus.

// A faded underline in the text colour that fills left to right at full brightness on hover
export function FillUnderline({ className = "h-[3px]" }: { className?: string }) {
  return (
    <span aria-hidden className={`relative block w-full overflow-hidden ${className}`}>
      <span className="absolute inset-0 bg-current opacity-30" />
      <span className="absolute inset-0 origin-left scale-x-0 bg-current transition-transform duration-300 ease-out group-hover:scale-x-100 group-focus-visible:scale-x-100 motion-reduce:transition-none" />
    </span>
  );
}

// An up-right arrow, faded until hover, when it brightens and nudges towards its corner. Sized in em.
export function LinkArrow({ className = "" }: { className?: string }) {
  return (
    <svg
      aria-hidden
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
      className={`shrink-0 opacity-40 transition-[opacity,translate] group-hover:translate-x-0.5 group-hover:-translate-y-0.5 group-hover:opacity-100 group-focus-visible:opacity-100 ${className}`}
    >
      <path d="M7 17 17 7M8 7h9v9" />
    </svg>
  );
}
