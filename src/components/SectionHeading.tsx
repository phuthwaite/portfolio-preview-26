// Large faded "ghost" title that sits behind each section's content.
// The negative bottom margin makes the content start 116px below the title's top (at 144px), as in Figma.
export default function SectionHeading({ children }: { children: string }) {
  return (
    <h2
      className="pointer-events-none mb-[-0.494em] font-display text-[clamp(56px,9.5vw,144px)] leading-[1.3] whitespace-nowrap opacity-12 select-none"
      style={{
        backgroundImage: "linear-gradient(to bottom, #fff 16.5%, rgb(255 255 255 / 0.14) 74.33%)",
        backgroundClip: "text",
        WebkitBackgroundClip: "text",
        color: "transparent",
      }}
    >
      {children}
    </h2>
  );
}
