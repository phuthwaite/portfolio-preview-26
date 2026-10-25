import glow from "../../assets/case-studies/twc-glow.svg";
// 2x export (978×770) as WebP; the source is twc-mocks@2x.png
import mocks from "../../assets/case-studies/twc-mocks.webp";

// Figma: TWC 2 > Vector 2 (glow) + image. The desktop and mobile mock-ups are drawn at 562×442,
// 40px left of the original gift box's Figma centre (846, 571), with the top level with the company
// name line under the logo (y 252). The glow sits behind them. The image is a 2x export, so it
// stays sharp on high-resolution screens.
export default function TwcArt() {
  return (
    <>
      <div className="absolute top-[93px] left-[140px] h-[720px] w-[1369px]">
        <img src={glow} alt="" className="absolute inset-[-18.33%_-9.64%] block size-auto h-[136.66%] w-[119.28%] max-w-none" />
      </div>
      <img src={mocks} alt="" loading="lazy" width={562} height={442} className="absolute top-[252px] left-[525px] h-[442px] w-[562px] max-w-none" />
    </>
  );
}
