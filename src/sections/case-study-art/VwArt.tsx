// 2x export (2000×1072) as WebP; the source is vw-emails.png
import emails from "../../assets/case-studies/vw-emails.webp";

// Figma: VW 2 > image — a fanned-out set of brand emails (CUPRA, Škoda, VW, Audi, VW Commercial
// Vehicles) with a transparent background, drawn where the original collage sat, over a soft glow
export default function VwArt() {
  return (
    <>
      {/* a very soft glow in the study's brand colour (--accent, set on the article), behind the emails */}
      <div
        aria-hidden
        className="absolute top-[120px] left-[380px] h-[660px] w-[1130px]"
        style={{
          background:
            "radial-gradient(closest-side, color-mix(in srgb, var(--accent) 16%, transparent), transparent)",
        }}
      />
      <img
        src={emails}
        alt=""
        loading="lazy"
        width={1049}
        height={562}
        className="absolute top-[170px] left-[419px] h-[562px] w-[1049px] max-w-none"
      />
    </>
  );
}
