import glow from "../../assets/case-studies/twc-glow.svg";
import box from "../../assets/case-studies/twc-box.png";

// Figma: TWC 2 > Vector 2 (glow) + image (gift box). The box is drawn at 90% of its Figma size and
// moved 40px left and 20px up from its Figma centre (846, 571); the glow moves with it.
export default function TwcArt() {
  return (
    <>
      <div className="absolute top-[171px] left-[140px] h-[720px] w-[1369px]">
        <img src={glow} alt="" className="absolute inset-[-18.33%_-9.64%] block size-auto h-[136.66%] w-[119.28%] max-w-none" />
      </div>
      <img src={box} alt="" loading="lazy" className="absolute top-[326.6px] left-[532.4px] h-[368.77px] w-[547.2px] max-w-none" />
    </>
  );
}
