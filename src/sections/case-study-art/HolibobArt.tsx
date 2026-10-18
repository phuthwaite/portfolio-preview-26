import glow from "../../assets/case-studies/holibob-glow.svg";
import welcome from "../../assets/case-studies/holibob-screen-welcome.png";
import recommended from "../../assets/case-studies/holibob-screen-recommended.png";
import tour from "../../assets/case-studies/holibob-screen-tour.png";

// Figma: HB 2 > image — three tilted app screens over a teal glow. Positions are percentages of a
// 450×600 box placed at (702, 171) in frame coordinates; each screen keeps Figma's rotate/skew.
const screens = [
  { src: welcome, left: "2.71%", top: "37.8%", shadow: "-9.04px 11.17px 17.66px rgb(0 0 0 / 0.41)" },
  { src: recommended, left: "16.33%", top: "18.02%", shadow: "-1.08px 11.17px 18.79px rgb(0 0 0 / 0.37)" },
  { src: tour, left: "34.4%", top: "1.32%", shadow: "-7.56px 11.17px 22.35px rgb(0 0 0 / 0.31)" },
];

export default function HolibobArt() {
  return (
    <div className="absolute top-[171px] left-[702px] h-[600px] w-[450px]">
      <div className="absolute top-[2.77%] left-[0.19%] flex h-[115.4%] w-[111.9%] items-center justify-center">
        <div className="relative h-[98.7%] w-[97.6%] rotate-[-1.02deg]">
          <img src={glow} alt="" className="absolute inset-[-21%_-29.21%] block size-auto h-[142%] w-[158.42%] max-w-none" />
        </div>
      </div>
      {screens.map((s) => (
        <div
          key={s.src}
          className="absolute flex aspect-[295.11/346.96] w-[65.58%] items-center justify-center"
          style={{ left: s.left, top: s.top, containerType: "size" }}
        >
          <div className="h-[hypot(40.9354cqw,96.6006cqh)] w-[hypot(59.0646cqw,-3.39941cqh)] flex-none rotate-[-3.87deg] skew-x-[15.95deg]">
            <img src={s.src} alt="" loading="lazy" className="size-full object-contain" style={{ filter: `drop-shadow(${s.shadow})` }} />
          </div>
        </div>
      ))}
    </div>
  );
}
