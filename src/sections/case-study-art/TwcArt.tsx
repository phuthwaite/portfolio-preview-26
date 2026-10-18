import glow from "../../assets/case-studies/twc-glow.svg";
import box from "../../assets/case-studies/twc-box.png";

// Figma: TWC 2 > Vector 2 (glow) + image (gift box)
export default function TwcArt() {
  return (
    <>
      <div className="absolute top-[191px] left-[180px] h-[720px] w-[1369px]">
        <img src={glow} alt="" className="absolute inset-[-18.33%_-9.64%] block size-auto h-[136.66%] w-[119.28%] max-w-none" />
      </div>
      <img src={box} alt="" loading="lazy" className="absolute top-[366px] left-[542px] h-[409.74px] w-[608px] max-w-none" />
    </>
  );
}
