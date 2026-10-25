// "Widget / Web" in Figma: an uppercase label above body copy.
export function Label({ children }: { children: React.ReactNode }) {
  return (
    <p className="text-xs font-medium tracking-[0.25em] text-medium-gray uppercase">{children}</p>
  );
}

export default function Widget({ label, children }: { label: string; children: React.ReactNode }) {
  return (
    <div className="flex flex-col gap-2">
      <Label>{label}</Label>
      <div className="text-lg leading-[27px] text-light-gray">{children}</div>
    </div>
  );
}
