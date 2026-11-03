/* eslint-disable react-refresh/only-export-components -- a study file exports its deck definition, built from local components */
import type { DeckDef } from "../Deck";
import { At, Img, SideCopy, Sidebar, SlideHeader, type } from "../slide";
import bgCover from "../../assets/case-studies/samsung/bg-cover.svg";
import bgDark from "../../assets/case-studies/samsung/bg-dark.svg";
import logo from "../../assets/case-studies/samsung/samsung-logo.svg";
import coverPhone from "../../assets/case-studies/samsung/cover-phone.webp";
import coverScreen1 from "../../assets/case-studies/samsung/cover-screen-1.webp";
import coverScreen2 from "../../assets/case-studies/samsung/cover-screen-2.webp";
import coverScreen3 from "../../assets/case-studies/samsung/cover-screen-3.webp";
import s21 from "../../assets/case-studies/samsung/s21-phone.webp";
import logoLightroom from "../../assets/case-studies/samsung/logo-1.webp";
import logoFiit from "../../assets/case-studies/samsung/logo-2.webp";
import logoDeezer from "../../assets/case-studies/samsung/logo-3.webp";
import logoYouTube from "../../assets/case-studies/samsung/logo-4.webp";
import logoCalm from "../../assets/case-studies/samsung/logo-5.webp";
import logoGooglePlay from "../../assets/case-studies/samsung/logo-6.webp";
import research1 from "../../assets/case-studies/samsung/research-1.webp";
import research2 from "../../assets/case-studies/samsung/research-2.webp";
import research3 from "../../assets/case-studies/samsung/research-3.webp";
import research4 from "../../assets/case-studies/samsung/research-4.webp";
import redemptionFlows from "../../assets/case-studies/samsung/redemption-flows.webp";
import checklist from "../../assets/case-studies/samsung/checklist.webp";
import journeyMap from "../../assets/case-studies/samsung/journey-map.webp";
import journeyTop from "../../assets/case-studies/samsung/journey-top.webp";
import journeyLeft from "../../assets/case-studies/samsung/journey-left.webp";
import journeyRight from "../../assets/case-studies/samsung/journey-right.webp";
import flowsMain from "../../assets/case-studies/samsung/flows-main.webp";
import flowsOverview from "../../assets/case-studies/samsung/flows-overview.webp";
import flowsLogic from "../../assets/case-studies/samsung/flows-logic.webp";
import wireframesLofi from "../../assets/case-studies/samsung/wireframes-lofi.webp";
import wireframesPages from "../../assets/case-studies/samsung/wireframes-pages.webp";
import wireframesMobile from "../../assets/case-studies/samsung/wireframes-mobile.webp";
import prototypeFlow from "../../assets/case-studies/samsung/prototype-flow.webp";
import prototypeScreens from "../../assets/case-studies/samsung/prototype-screens.webp";
import resultDesktop from "../../assets/case-studies/samsung/result-desktop.webp";
import resultMobile from "../../assets/case-studies/samsung/result-mobile.webp";
import avatar from "../../assets/case-studies/samsung/avatar.webp";

// The "Customer Rewards" deck (PDF and Figma code layer in extras/cs/), slide for slide. Positions are
// percentages of the 1920×1080 slide, measured from the original slides.

// Figma: Cover > cover-art — the phone with three redemption screens floating over it (cover and last
// slide). The images are already drawn in perspective (the phone as a faint outline), so they're just
// placed: positions are percentages of the art's box, measured from the original cover. The middle,
// "opening our partner's page" screen is multiplied over the others, as in the original.
function CoverArt() {
  return (
    <At x={43.54} y={12.87} w={47.08} h={77.41} className="aspect-[904/836] w-full max-lg:mt-4">
      <div role="img" aria-label="The rewards journey on a Galaxy phone: Deezer offer, partner hand-off and code entry" className="absolute inset-0">
        <img src={coverPhone} alt="" className="absolute top-[12.92%] left-0 h-[87.08%] w-[94.14%]" />
        <img src={coverScreen1} alt="" className={`top-[18.18%] left-[22.68%] h-[57.3%] w-[62.39%] ${screen}`} />
        <img src={coverScreen2} alt="" className="absolute top-[9.09%] left-[30.09%] h-[57.66%] w-[62.61%] mix-blend-multiply" />
        <img src={coverScreen3} alt="" className={`top-0 left-[37.39%] h-[57.66%] w-[62.61%] ${screen}`} />
      </div>
    </At>
  );
}
const screen = "absolute drop-shadow-[0_0.6cqw_1cqw_rgb(0_0_0/0.25)]";

// The rounded white panels on the customer journey slide
const panel = "overflow-hidden rounded-[16px] bg-white shadow-[0_0_35px_8px_rgb(0_0_0/0.25)] lg:rounded-[1.25cqw]";

export const samsung: DeckDef = {
  id: "samsung",
  title: "Customer Rewards",
  client: "Samsung",
  footer: "UX Case Study: Samsung UK",
  backgrounds: { cover: bgCover, dark: bgDark },
  slides: [
    {
      label: "Cover",
      bg: "cover",
      content: (
        <>
          <At x={3.65} y={43.7} w={55}>
            <img src={logo} alt="Samsung" width={240} height={37} className="mb-6 h-auto w-[180px] lg:mb-[3.26cqw] lg:w-[12.5cqw]" />
            <h1 className={type.h1}>Customer Rewards</h1>
            <p className="mt-4 text-[24px] leading-[1.2] font-medium tracking-[0.04em] lg:mt-[1.04cqw] lg:text-[2.5cqw]">
              Samsung UK / Cheil
              <br />
              2021
            </p>
          </At>
          <CoverArt />
        </>
      ),
    },
    {
      label: "Context",
      bg: "dark",
      content: (
        <>
          <SlideHeader section="Overview" number="1.1" />
          <At x={3.4} y={19.5} w={43.7}>
            <h2 className={`${type.h2} mb-5 lg:mb-[1.5cqw]`}>Context</h2>
            <div className={type.body}>
              <p>
                Samsung UK launched a new, free bundle of premium services for flagship <strong>Galaxy S21</strong> customers, to complement
                existing services (including Samsung Health, Samsung Pay, SmartThings).
              </p>
              <p>
                Partner offers included products such as <strong>Adobe Photoshop Lightroom, Fiit, Deezer, YouTube Premium, Calm Premium and Google Play</strong>.
              </p>
              <p>
                I was the <strong>Lead UX</strong> resource on the project, and collaborated with Product, Development and Design teams to
                successfully deliver this exclusive customer rewards experience.
              </p>
            </div>
          </At>
          <At x={47.1} y={34.3} w={30.2} h={51.9} className="max-lg:w-3/5">
            <Img src={s21} alt="Samsung Galaxy S21" className="rotate-1" />
          </At>
          <At x={75.5} y={21.8} w={13.5} className="max-lg:w-2/5">
            <ul className="grid grid-cols-2 gap-3 lg:gap-[1.04cqw]">
              {(
                [
                  [logoLightroom, "Adobe Photoshop Lightroom"],
                  [logoFiit, "Fiit"],
                  [logoDeezer, "Deezer"],
                  [logoYouTube, "YouTube Premium"],
                  [logoCalm, "Calm Premium"],
                  [logoGooglePlay, "Google Play"],
                ] as const
              ).map(([src, alt]) => (
                <li key={src}>
                  <img src={src} alt={alt} className="aspect-square w-full rounded-[2px] object-cover shadow-[0_2px_4px_rgb(0_0_0/0.25)]" />
                </li>
              ))}
            </ul>
          </At>
        </>
      ),
    },
    {
      label: "Scope and Constraints",
      bg: "dark",
      content: (
        <>
          <SlideHeader section="Overview" number="1.2" />
          <At x={3.4} y={19.5} w={44}>
            <h2 className={`${type.h2} mb-5 lg:mb-[1.5cqw]`}>Scope and Constraints</h2>
            <div className={type.body}>
              <p>
                The loyalty programme was a first for Samsung UK. As it was exclusive to S21 device owners, most of the experience would be
                mobile-based – however, accommodation of a desktop entry point was essential for discovery and acquisition.
              </p>
              <p>
                Redemption methods differed between partners – ranging from promo code entry, to tokenised signup, to hard-coded download
                links. Claiming an offer from the Offer Detail Page would launch an iframe within the Samsung mobile platform, in which the
                third-party process would be contained. Following redemption, users are returned to the Boost flow to continue their
                experience.
              </p>
            </div>
          </At>
        </>
      ),
    },
    {
      label: "Goals and Challenges",
      bg: "dark",
      content: (
        <>
          <SlideHeader section="Overview" number="1.3" />
          {(
            [
              [
                3.65,
                "Goals",
                [
                  "Entice new customers to purchase the flagship Galaxy S21 device.",
                  "Drive engagement and deliver added-value to existing customers.",
                  "Promote upgrade and trade-in options to incentivise conversion.",
                  "Generate awareness of in-house Samsung services, as well as partner products and services.",
                ],
              ],
              [
                51.35,
                "Challenges",
                [
                  "Short turnaround time (~8 weeks).",
                  "Many technical specifications unknown until well after project kick-off.",
                  <>
                    Combinations of internal <em>and</em> external data and processes.
                  </>,
                  "Balancing informational and aspirational objectives of landing pages, to accommodate varying users and scenarios.",
                ],
              ],
            ] as const
          ).map(([x, title, items]) => (
            <At key={title} x={x} y={17.6} w={45} h={63.7} className="flex flex-col gap-4 lg:gap-[1.2cqw]">
              <h2 className={type.h2}>{title}</h2>
              <ul className="flex flex-1 flex-col justify-center gap-4 rounded-[12px] bg-white/20 px-6 py-6 text-[16px] leading-[1.4] lg:gap-[1.3cqw] lg:rounded-[0.625cqw] lg:px-[2.1cqw] lg:py-[1.6cqw] lg:text-[1.77cqw]">
                {items.map((item, i) => (
                  <li key={i} className="relative pl-[1.25em] before:absolute before:top-[0.5em] before:left-0 before:aspect-square before:w-[0.32em] before:rounded-full before:bg-[#dce1e9]">
                    {item}
                  </li>
                ))}
              </ul>
            </At>
          ))}
        </>
      ),
    },
    {
      label: "Research and Discovery",
      bg: "cover",
      content: (
        <>
          <Sidebar>
            <SlideHeader section="Process" number="2.1" sidebar />
            <SideCopy
              title={
                <>
                  Research
                  <br />& Discovery
                </>
              }
            >
              <p>Researching comparable online rewards schemes.</p>
              <p>Analysis of examples and best-practices for restricted-access content.</p>
            </SideCopy>
          </Sidebar>
          <div className="grid grid-cols-2 gap-3 lg:contents">
            <At x={34.22} y={9.44} w={25.73} h={38.06}>
              <Img src={research1} alt="UNiDAYS student discounts, logged in and logged out" fit="fill" />
            </At>
            <At x={62.6} y={9.44} w={32.55} h={38.06}>
              <Img src={research2} alt="O2 Priority offers and offer detail" fit="fill" />
            </At>
            <At x={42.24} y={51.85} w={30.42} h={40.93}>
              <Img src={research3} alt="Sky VIP rewards" fit="fill" />
            </At>
            <At x={75.57} y={51.85} w={14.38} h={40.93}>
              <Img src={research4} alt="Membership Rewards points and offers" fit="fill" />
            </At>
          </div>
        </>
      ),
    },
    {
      label: "Redemption flows",
      bg: "cover",
      content: (
        <>
          <Sidebar>
            <SlideHeader section="Process" number="2.2" sidebar />
            <SideCopy
              title={
                <>
                  Research
                  <br />& Discovery
                </>
              }
            >
              <p>Capturing and composing each partner’s own redemption flow.</p>
              <p>Defining data requirements for each stage of the journey.</p>
            </SideCopy>
          </Sidebar>
          <At x={32.8} y={7.9} w={41.1} h={78.2}>
            <Img src={redemptionFlows} alt="Screens from each partner’s redemption flow: YouTube Premium, Lightroom, Deezer and Calm" fit="fill" />
          </At>
          <At x={64.1} y={52} w={32.1} h={38} className="overflow-hidden rounded-[5px] shadow-[0_0_30px_10px_rgb(0_0_0/0.25)]">
            <Img
              src={checklist}
              alt="UX slides checklist: deliverables and elements for desktop, logged-out mobile, Samsung mobile and S21 mobile journeys, and redemption"
              fit="cover"
            />
          </At>
        </>
      ),
    },
    {
      label: "Insight",
      bg: "dark",
      content: (
        <>
          <SlideHeader section="Process" number="2.3" />
          <At x={17.5} y={23} w={65} className="text-center">
            <h2 className={`${type.h2} mb-6 lg:mb-[1.9cqw]`}>Insight</h2>
            <div className="flex flex-col gap-5 text-[20px] leading-[1.4] lg:gap-[1.4cqw] lg:text-[2.1cqw] [&_strong]:font-semibold">
              <p>
                Regardless of the partner-specific offer or redemption process, the journey should be <strong>intuitive</strong>, as{" "}
                <strong>seamless</strong> as possible, and contextually <strong>familiar</strong>.
              </p>
              <p>
                Any user, in any scenario, should feel <strong>enticed</strong>, <strong>empowered</strong>, and <strong>enabled</strong>;{" "}
                <em>not</em> confused, dejected, or blocked.
              </p>
              <p>
                They should be <strong>informed</strong> of all available options and <strong>incentivised</strong> to convert.
              </p>
            </div>
          </At>
        </>
      ),
    },
    {
      label: "Defining the Customer Journey",
      bg: "cover",
      content: (
        <>
          <Sidebar dark={0.84}>
            <SlideHeader section="Process" number="2.4" sidebar />
            <SideCopy title="Defining the Customer Journey">
              <p>Mapping out the customer journey using an empathy map of sorts, to create the optimal solution for the best user experience.</p>
            </SideCopy>
          </Sidebar>
          <At x={33.5} y={31.1} w={63.1} h={37.8} className={panel}>
            <Img
              src={journeyMap}
              alt="Customer journey map, from the ‘Project Edge’ entry link through device detection, the offers landing page, offer cards, the offer detail page, the partner’s iframe and redemption, back to an updated offers page"
              fit="cover"
            />
          </At>
          <At x={55.5} y={9.26} w={32.9} h={23.8} className={`${panel} max-lg:hidden`}>
            <Img src={journeyTop} alt="Detail: entry link, device detection and the offers landing page" fit="cover" />
          </At>
          <At x={36} y={67} w={25.8} h={20.9} className={`${panel} max-lg:hidden`}>
            <Img src={journeyLeft} alt="Detail: upgrade, trade-in and S21 promo paths" fit="cover" />
          </At>
          <At x={70.7} y={64.4} w={21} h={26.1} className={`${panel} max-lg:hidden`}>
            <Img src={journeyRight} alt="Detail: the partner journey completes and returns to the offers page" fit="cover" />
          </At>
        </>
      ),
    },
    {
      label: "Flow Diagramming",
      bg: "cover",
      content: (
        <>
          <Sidebar>
            <SlideHeader section="Process" number="2.5" sidebar />
            <SideCopy title="Flow Diagramming">
              <p>As technical unknowns were resolved, adjustments were made to bring the usability, overall experience and tech affordances into alignment.</p>
            </SideCopy>
          </Sidebar>
          <At x={46.6} y={5.93} w={46.7} h={88.4}>
            <Img
              src={flowsMain}
              alt="Flow diagram: journey entry points and device detection, then a happy flow for S21 owners and alternative flows for desktop and other devices, through offer details, redemption and post-redemption"
              fit="fill"
            />
          </At>
          <At x={13.96} y={52.2} w={28} h={16.6} className="max-lg:hidden">
            <Img src={flowsOverview} alt="Early linear flow of the offer journey" fit="fill" />
          </At>
          <At x={13.96} y={71.1} w={37.6} h={15.6} className="max-lg:hidden">
            <Img src={flowsLogic} alt="Decision logic for redemption" fit="fill" />
          </At>
        </>
      ),
    },
    {
      label: "Wireframes",
      bg: "dark",
      content: (
        <>
          <SlideHeader section="Process" number="2.6" />
          <At x={3.65} y={14.8} w={30}>
            <h2 className={`${type.h2} mb-5 lg:mb-[1.5cqw]`}>Wireframes</h2>
            <div className={type.body}>
              <p>Iteration of wireframes.</p>
            </div>
          </At>
          <At x={37.8} y={8.4} w={37.4} h={24.8} className="max-lg:hidden">
            <Img src={wireframesLofi} alt="Early wireframes: components, desktop landing page and offer detail page" fit="fill" />
          </At>
          <At x={3.5} y={46.8} w={14.1} h={34.4} className="max-lg:hidden">
            <Img src={wireframesMobile} alt="‘No S21? No problem!’ prompts to upgrade or trade in" fit="fill" />
          </At>
          <At x={19.2} y={36.7} w={74.9} h={63.3}>
            <Img
              src={wireframesPages}
              alt="Wireframes on desktop and mobile: Partner Offers landing page, a partner’s offer detail page, and offers marked redeemed or expired"
              fit="fill"
            />
          </At>
        </>
      ),
    },
    {
      label: "Prototypes",
      bg: "cover",
      content: (
        <>
          <Sidebar>
            <SlideHeader section="Process" number="2.7" sidebar />
            <SideCopy title="Prototypes">
              <p>Lo-fi prototypes of the basic linear flow progressed to higher-fidelity prototypes of interactive journeys.</p>
            </SideCopy>
          </Sidebar>
          <At x={34.1} y={12.8} w={49.5} h={34.5}>
            <Img src={prototypeFlow} alt="Lo-fi prototype of the linear flow between pages" fit="fill" />
          </At>
          <At x={38.6} y={51.1} w={57} h={35.6}>
            <Img src={prototypeScreens} alt="Hi-fi prototype screens of an S21 offer journey, including sign-in and the Deezer offer" fit="fill" />
          </At>
        </>
      ),
    },
    {
      label: "Delivery and Handoff",
      bg: "dark",
      content: (
        <>
          <SlideHeader section="Outcome" number="3.1" />
          <At x={3.65} y={17.6} w={60}>
            <h2 className={type.h2}>Delivery & Handoff</h2>
          </At>
          {[
            "Developers used the UX deliverables to build the product framework, integrating it with their backend structure.",
            "Base components were added to the internal platform library so that they could be reused.",
            "Wireframes and mocks were converted to Adobe XD for the in-house Visual Designer, along with Figma links for reference.",
          ].map((text, i) => (
            <At
              key={i}
              x={[3.65, 35.35, 67.05][i]}
              y={28.3}
              w={29.3}
              h={42.8}
              className="rounded-[6px] bg-linear-to-br from-white/20 to-white/12 px-6 py-8 text-[17px] leading-[1.4] lg:px-[2.4cqw] lg:pt-[4.3cqw] lg:text-[1.82cqw]"
            >
              <p>{text}</p>
            </At>
          ))}
        </>
      ),
    },
    {
      label: "Result",
      bg: "cover",
      content: (
        <>
          <Sidebar>
            <SlideHeader section="Outcome" number="3.2" sidebar />
            <SideCopy title="Result">
              <p>The project successfully launched and offer uptake was high, resulting in exceptional demand for offer codes.</p>
              <p>The initiative continued to grow, covering a much wider range of Samsung’s flagship devices and more diverse product offers.</p>
            </SideCopy>
          </Sidebar>
          <At x={41.1} y={6.5} w={31.8} h={93.5}>
            <Img src={resultDesktop} alt="The live ‘Boost your Galaxy S21’ page on desktop: how it works, partner offers and more Samsung services" fit="cover" />
          </At>
          <At x={74.8} y={6.5} w={14.5} h={93.5} className="max-lg:hidden">
            <Img src={resultMobile} alt="The live ‘Boost your Galaxy S21’ page on mobile" fit="cover" />
          </At>
        </>
      ),
    },
    {
      label: "Thank you",
      bg: "cover",
      noFooter: true,
      content: (
        <>
          <At x={10.4} y={41.5} w={45}>
            <p className="text-[56px] leading-[1.2] tracking-[0.01em] lg:text-[6.1cqw]">Thank you.</p>
            <p className="mt-6 flex items-center gap-4 text-[22px] font-medium tracking-[0.02em] lg:mt-[2.6cqw] lg:gap-[1.6cqw] lg:text-[2.08cqw]">
              <img src={avatar} alt="" className="size-14 rounded-full object-cover lg:size-[3.33cqw]" />
              Pauline Huthwaite
            </p>
          </At>
          <CoverArt />
        </>
      ),
    },
  ],
};
