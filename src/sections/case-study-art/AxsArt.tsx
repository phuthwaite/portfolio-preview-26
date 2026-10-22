import glow from "../../assets/case-studies/axs-glow.svg";
import ticketFull from "../../assets/case-studies/axs-ticket-full.png";
import ticketFolded from "../../assets/case-studies/axs-ticket-folded.png";

// Figma: AXS 2 > Ellipse 2345 + image (positions in frame coordinates, rotations from Figma)
export default function AxsArt() {
  return (
    <>
      <div className="absolute top-[188.33px] left-[600.57px] flex h-[724.54px] w-[683.97px] items-center justify-center">
        <div className="relative h-[601.17px] w-[542.87px] flex-none rotate-[15.52deg]">
          <img src={glow} alt="" className="absolute inset-[-23.87%_-26.43%] block size-auto h-[147.74%] w-[152.86%] max-w-none" />
        </div>
      </div>
      <div className="absolute inset-[22.73%_-7.09%_-9.94%_63.53%] flex items-center justify-center" style={{ containerType: "size" }}>
        <div className="relative h-[hypot(-22.9155cqw,86.7955cqh)] w-[hypot(77.0845cqw,13.2045cqh)] flex-none rotate-[12.01deg]">
          <div className="absolute inset-0 overflow-hidden">
            <img src={ticketFull} alt="" loading="lazy" className="absolute top-0 left-[-6.51%] h-[104.75%] w-[113.91%] max-w-none" />
          </div>
        </div>
      </div>
      <div className="absolute top-[46.99%] right-[14.4%] bottom-[-4.48%] left-1/2 flex items-center justify-center" style={{ containerType: "size" }}>
        <div className="relative h-[hypot(30.5991cqw,69.56cqh)] w-[hypot(69.4009cqw,-30.44cqh)] flex-none rotate-[-23.71deg]">
          <div className="absolute inset-0 overflow-hidden">
            <img src={ticketFolded} alt="" loading="lazy" className="absolute top-0 left-[-4.23%] h-[105.26%] w-[109.86%] max-w-none" />
          </div>
        </div>
      </div>
    </>
  );
}
