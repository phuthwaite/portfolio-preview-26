import glow from "../../assets/case-studies/samsung-glow.svg";
import browserDots from "../../assets/case-studies/samsung-browser-dots.svg";
import desktopCapture from "../../assets/case-studies/samsung-desktop-capture.webp";
import mobileCapture from "../../assets/case-studies/samsung-mobile-capture.webp";
import outline from "../../assets/case-studies/samsung-phone-outline.png";
import screenOutside from "../../assets/case-studies/samsung-phone-screen-outside.png";
import screenBlack from "../../assets/case-studies/samsung-phone-screen-black.svg";
import cameraStroke from "../../assets/case-studies/samsung-phone-camera-stroke.svg";
import lens from "../../assets/case-studies/samsung-phone-lens.png";
import cameraLight from "../../assets/case-studies/samsung-phone-camera-light.svg";
import buttons from "../../assets/case-studies/samsung-phone-buttons.svg";

// Figma: SS 2 > img — a browser window and a Galaxy S21 showing the Boost pages. The "img" frame
// clipped to the Figma frame's edges; here it doesn't, so the mockups continue into the taller panel.
// The page captures are cropped to the part the mockups show.
export default function SamsungArt() {
  return (
    <div className="absolute top-0 left-[191px] h-[681px] w-[953px]">
      {/* glow */}
      <div className="absolute top-[147.63px] left-[289px] flex h-[770.92px] w-[705.66px] items-center justify-center">
        <div className="relative h-[758.67px] w-[692.21px] flex-none rotate-[-1.02deg]">
          <img src={glow} alt="" className="absolute inset-[-18.91%_-20.73%] block size-auto h-[137.82%] w-[141.46%] max-w-none" />
        </div>
      </div>

      {/* browser window */}
      <div className="absolute top-[288px] left-[345px] h-[416px] w-[436.22px] overflow-clip drop-shadow-[0_10.386px_22.503px_rgb(0_0_0/0.13)]">
        <div className="absolute top-0 left-0 h-[268.03px] w-full overflow-clip rounded-t-[3.877px] bg-[#f3f3f3]">
          <img src={browserDots} alt="" className="absolute top-[2.91px] left-[3.39px] h-[5.33px] w-[19.99px]" />
        </div>
        <div className="absolute top-[11.15px] left-0 h-[422.8px] w-full overflow-hidden">
          <img src={desktopCapture} alt="" loading="lazy" className="absolute top-0 left-[-11.63%] h-full w-[123.32%] max-w-none" />
        </div>
      </div>

      {/* phone */}
      <div className="absolute top-[223.63px] left-[656px] h-[505.37px] w-[239px] overflow-clip rounded-[26.32px] drop-shadow-[-13.687px_0_11.16px_rgb(0_0_0/0.35)]">
        <div className="absolute top-0 left-0 h-[505.79px] w-[238.51px]">
          <img src={outline} alt="" className="absolute inset-[0_0.93%_0_0] block size-full" />
          <img src={screenOutside} alt="" className="absolute inset-[0.48%_1.96%_0.56%_1.19%] block size-auto h-[98.96%] w-[96.85%]" />
          <div className="absolute inset-[1.16%_3.48%_1.16%_2.8%]">
            <img src={screenBlack} alt="" className="absolute inset-[-0.1%_-0.23%] block size-auto h-[100.2%] w-[100.46%] max-w-none" />
          </div>
          <div className="absolute inset-[0.48%_31.43%_99.16%_30.84%] rounded-[2.02px] bg-[#1a1a1a]" />
          <div className="absolute inset-[2.6%_48.09%_95.27%_47.41%]">
            <img src={cameraStroke} alt="" className="absolute inset-[-4.05%] block size-auto h-[108.1%] w-[108.1%] max-w-none" />
          </div>
          <img src={lens} alt="" className="absolute inset-[3.03%_48.99%_95.7%_48.31%] block h-[1.27%] w-[2.7%]" />
          <img src={cameraLight} alt="" className="absolute inset-[3.24%_49.55%_96.33%_49.55%] block h-[0.43%] w-[0.9%]" />
          <img src={buttons} alt="" className="absolute inset-[15.46%_0_58.29%_99.06%] block h-[26.25%] w-[0.94%]" />
          <div className="absolute inset-[99.2%_14.53%_0_83.6%] bg-[#191919]" />
          <div className="absolute inset-[99.2%_85.05%_0_13.08%] bg-[#191919]" />
          <div className="absolute inset-[8.65%_0.93%_90.26%_97.54%] bg-[#191919]" />
          <div className="absolute inset-[8.65%_98.3%_90.26%_0] bg-[#191919]" />
        </div>
        <div className="absolute top-[9.39px] left-[10.33px] h-[485.46px] w-[215.97px] overflow-hidden rounded-[18.78px]">
          <img src={mobileCapture} alt="" loading="lazy" className="absolute top-[-0.04%] left-[0.01%] h-[100.78%] w-[99.91%] max-w-none" />
        </div>
      </div>
    </div>
  );
}
