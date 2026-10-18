import collage from "../../assets/case-studies/vw-collage.webp";
import mask from "../../assets/case-studies/vw-collage-mask.svg";

// Figma: VW 2 > image 977 — a collage of brand emails, cut to shape by an alpha mask
export default function VwArt() {
  return (
    <div
      className="absolute top-[169.56px] left-[418.88px] h-[562.09px] w-[1049.36px]"
      style={{
        maskImage: `url("${mask}")`,
        maskMode: "alpha",
        maskComposite: "intersect",
        maskClip: "no-clip",
        maskRepeat: "no-repeat",
        maskPosition: "-304.34px -191.02px",
        maskSize: "1510.91px 983.17px",
      }}
    >
      <img src={collage} alt="" loading="lazy" className="absolute inset-0 size-full object-cover opacity-78" />
    </div>
  );
}
