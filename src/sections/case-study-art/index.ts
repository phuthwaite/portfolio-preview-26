import type { ComponentType } from "react";
import type { Crop } from "../../components/ArtCanvas";
import HolibobArt from "./HolibobArt";
import AxsArt from "./AxsArt";
import SamsungArt from "./SamsungArt";
import TwcArt from "./TwcArt";
import VwArt from "./VwArt";

// Artwork for each case study (by id), drawn in Figma frame coordinates. `crop` is the region shown
// on small screens, where the artwork sits below the text.
export const caseStudyArt: Record<string, { Art: ComponentType; crop: Crop }> = {
  holibob: { Art: HolibobArt, crop: { x: 700, y: 170, w: 450, h: 560 } },
  vw: { Art: VwArt, crop: { x: 410, y: 160, w: 1070, h: 580 } },
  samsung: { Art: SamsungArt, crop: { x: 500, y: 200, w: 600, h: 520 } },
  axs: { Art: AxsArt, crop: { x: 520, y: 140, w: 660, h: 600 } },
  twc: { Art: TwcArt, crop: { x: 530, y: 340, w: 630, h: 440 } },
};
