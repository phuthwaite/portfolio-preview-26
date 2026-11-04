/* eslint-disable react-refresh/only-export-components -- a study file exports its deck definition, built from local components */
import type { ReactNode } from "react";
import type { DeckDef } from "../Deck";
import { At, Img, SideCopy, Sidebar, SlideHeader, type } from "../slide";
import bg from "../../assets/case-studies/twc/bg.svg";
import logo from "../../assets/case-studies/twc-logo.svg";
import mocks from "../../assets/case-studies/twc-mocks.webp";
import flow1 from "../../assets/case-studies/twc/flow-1.webp";
import flow2 from "../../assets/case-studies/twc/flow-2.webp";
import flow3 from "../../assets/case-studies/twc/flow-3.webp";
import process from "../../assets/gallery/twc-process.png";
import flowsAndPage from "../../assets/gallery/twc1.png";
import clothing from "../../assets/gallery/twc-clothing.png";
import fragrance from "../../assets/gallery/twc-fragrance.png";
import avatar from "../../assets/case-studies/samsung/avatar.webp";

// The "Ecommerce UX Optimisation" deck, from the case study in Figma (px.ph.26, nodes 239:5286 and 239:5276), in
// the same style as the Samsung deck: a charcoal background with a soft glow in the study's accent colour from the
// home page (#DDDDDD). Positions are percentages of the 1920×1080 slide.

const caption = "mt-2 text-[13px] text-white/70 italic lg:mt-[0.6cqw] lg:text-[0.94cqw]";

// The product page on desktop and mobile (cover and last slide)
function CoverArt() {
  return (
    <At x={50} y={16} w={46} h={68} className="max-lg:mt-4">
      <Img src={mocks} alt="The White Company product page on desktop and mobile" className="drop-shadow-[0_2cqw_3cqw_rgb(0_0_0/0.45)]" />
    </At>
  );
}

// A panel of text, like the deck's cards
function Card({ x, y, w, h, title, children }: { x: number; y: number; w: number; h: number; title: string; children: ReactNode }) {
  return (
    <At x={x} y={y} w={w} h={h} className="rounded-[6px] bg-linear-to-br from-white/20 to-white/12 px-6 py-7 lg:px-[2cqw] lg:py-[2.4cqw]">
      <h3 className="mb-3 text-[20px] font-medium lg:mb-[1cqw] lg:text-[1.77cqw]">{title}</h3>
      <div className="text-[16px] leading-[1.45] lg:text-[1.35cqw] [&_p+p]:mt-[0.8em]">{children}</div>
    </At>
  );
}

// A screen design on a white card, shown before and after
function Screens({ src, alt }: { src: string; alt: string }) {
  return (
    <At x={6.65} y={14} w={86.7} h={78} className="overflow-hidden rounded-[8px] bg-white shadow-[0_1.5cqw_4cqw_rgb(0_0_0/0.45)]">
      <Img src={src} alt={alt} fit="contain" />
    </At>
  );
}

export const twc: DeckDef = {
  id: "twc",
  title: "Ecommerce UX Optimisation",
  client: "The White Company",
  footer: "UX Case Study: The White Company",
  backgrounds: { cover: bg, dark: bg },
  slides: [
    {
      label: "Cover",
      bg: "cover",
      content: (
        <>
          <At x={3.65} y={38} w={46}>
            <img src={logo} alt="The White Company" width={163} height={34} className="mb-6 h-auto w-[200px] lg:mb-[2.6cqw] lg:w-[14cqw]" />
            <h1 className={type.h1}>Ecommerce UX Optimisation</h1>
            <p className="mt-4 text-[24px] leading-[1.2] font-medium tracking-[0.04em] lg:mt-[1.04cqw] lg:text-[2.5cqw]">
              The White Company
              <br />
              2017
            </p>
          </At>
          <CoverArt />
        </>
      ),
    },
    {
      label: "Role",
      bg: "dark",
      content: (
        <>
          <SlideHeader section="Overview" number="1.1" />
          <At x={3.65} y={19.5} w={50}>
            <h2 className={`${type.h2} mb-5 lg:mb-[1.5cqw]`}>Role</h2>
            <div className={type.body}>
              <p>
                I was the <strong>Lead UX consultant</strong> for this optimisation project, working alongside the Product Manager and
                reporting to the Head of Digital.
              </p>
              <p>
                I was responsible for conducting research, redesigning detail and listing pages for various product purchase journeys, and
                improving the checkout experience.
              </p>
              <p>On top of a set list of business requirements, the brief was an improved user experience overall.</p>
            </div>
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
          <At x={3.65} y={19.5} w={50}>
            <h2 className={`${type.h2} mb-5 lg:mb-[1.5cqw]`}>Scope & Constraints</h2>
            <div className={type.body}>
              <p>At the time, the company had no UX resources – only a visual design team, who maintained the BAU work.</p>
              <p>
                The website was being replatformed, moving from separate desktop and mobile sites to a{" "}
                <strong>single responsive experience</strong>. That was a key consideration in every idea, proposal and outcome.
              </p>
            </div>
          </At>
        </>
      ),
    },
    {
      label: "Hypothesis",
      bg: "dark",
      content: (
        <>
          <SlideHeader section="Overview" number="1.3" />
          <At x={17.5} y={22} w={65} className="text-center">
            <h2 className={`${type.h2} mb-6 lg:mb-[2cqw]`}>Hypothesis</h2>
            <div className="text-[19px] leading-[1.45] lg:text-[2.1cqw] [&_p+p]:mt-[0.8em]">
              <p>
                <strong>Less is more.</strong> Let the high-end products speak for themselves, without overwhelming people with marketing.
              </p>
              <p>
                Gently guide them through the product journey, and be smart about cross-sell (smarter, not louder). Many are repeat customers:
                have the detail to hand without forcing it on them, let them add to bag in simple steps, and make checkout seamless.
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
          <SlideHeader section="Overview" number="1.4" />
          {(
            [
              [
                3.65,
                "Goals",
                [
                  "Enhance the aesthetic.",
                  "Improve usability.",
                  "Add the features the business asked for.",
                  "Deliver an optimal mobile (responsive) experience.",
                ],
              ],
              [
                51.35,
                "Challenges",
                [
                  "A single UX resource (me), and senior stakeholders to bring along.",
                  "No reliable analytics data, and no opportunity for user testing.",
                  "A strong visual identity to maintain, and a loyal customer base to keep happy.",
                  "A wide range of product types, with varying specifications and properties.",
                  "A responsive design mindset, and a staggered rollout.",
                ],
              ],
            ] as const
          ).map(([x, title, items]) => (
            <At key={title} x={x} y={17.6} w={45} h={66} className="flex flex-col gap-4 lg:gap-[1.2cqw]">
              <h2 className={type.h2}>{title}</h2>
              <ul className="flex flex-1 flex-col justify-center gap-4 rounded-[12px] bg-white/20 px-6 py-6 text-[16px] leading-[1.4] lg:gap-[1.2cqw] lg:rounded-[0.625cqw] lg:px-[2.1cqw] lg:py-[1.6cqw] lg:text-[1.56cqw]">
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
              <p>Benchmark reports, competitor analysis and direct customer feedback showed the pain points with the existing pages.</p>
              <p>Tackling those while shaping new features made for a more fluid, organic result.</p>
            </SideCopy>
          </Sidebar>
          {(
            [
              [flow1, "Initial thoughts, notes and ideas for each user journey"],
              [flow2, "Structuring the information hierarchy, and user flows for each journey"],
              [flow3, "Sitemap creation and heatmap analysis"],
            ] as const
          ).map(([src, text], i) => (
            <At key={text} x={35.4 + i * 20.7} y={26} w={18.6}>
              <img src={src} alt={text} className="aspect-square w-full rounded-[6px] object-cover shadow-[0_0.5cqw_1.5cqw_rgb(0_0_0/0.35)]" />
              <p className={caption}>{text}</p>
            </At>
          ))}
        </>
      ),
    },
    {
      label: "Flows and Templates",
      bg: "dark",
      content: (
        <>
          <SlideHeader section="Process" number="2.2" />
          <At x={3.65} y={19.5} w={32}>
            <h2 className={`${type.h2} mb-5 lg:mb-[1.5cqw]`}>Flows & Templates</h2>
            <div className={type.body}>
              <p>User journeys were mapped, then structured into sitemaps and user flows for each purchase journey.</p>
              <p>The checkout flow was developed further to account for different scenarios and edge cases, alongside responsive grid templates.</p>
            </div>
          </At>
          <At x={38} y={12} w={58} h={78}>
            <Img src={process} alt="UX artefacts: flow diagrams, responsive grid templates, research notes and documentation" />
          </At>
        </>
      ),
    },
    {
      label: "Design and Prototyping",
      bg: "dark",
      content: (
        <>
          <SlideHeader section="Process" number="2.3" />
          <At x={3.65} y={19.5} w={36}>
            <h2 className={`${type.h2} mb-5 lg:mb-[1.5cqw]`}>Design & Prototyping</h2>
            <div className={`${type.body} [&_p+p]:mt-[1em]`}>
              <p>
                After analysing the existing page structures, product specifications and merchandising needs, mid-fidelity mockups were created
                and iterated with stakeholder feedback.
              </p>
              <p>Once the compositions were agreed, high-fidelity mockups tested real content and fit with the rest of the site.</p>
              <p>
                Click-through InVision prototypes outlined the user flows, and hard-coded UI prototypes showed real interactions – helping
                stakeholders understand and approve them.
              </p>
            </div>
          </At>
          <At x={44} y={10} w={52} h={80}>
            <Img src={flowsAndPage} alt="Checkout flows for new and returning customers, responsive templates and the redesigned product page" />
          </At>
        </>
      ),
    },
    {
      label: "Clothing, Before and After",
      bg: "cover",
      content: (
        <>
          <SlideHeader section="Outcome" number="3.1" />
          <Screens src={clothing} alt="A clothing product page before (left) and after the redesign, on desktop and mobile" />
        </>
      ),
    },
    {
      label: "Fragrance, Before and After",
      bg: "cover",
      content: (
        <>
          <SlideHeader section="Outcome" number="3.2" />
          <Screens src={fragrance} alt="A fragrance product page before (left) and after the redesign, on desktop and mobile" />
        </>
      ),
    },
    {
      label: "Result",
      bg: "dark",
      content: (
        <>
          <SlideHeader section="Outcome" number="3.3" />
          <At x={3.65} y={14.8} w={60}>
            <h2 className={type.h2}>Result</h2>
          </At>
          <Card x={3.65} y={26} w={29.3} h={60} title="Built and lasting">
            <p>The designs were implemented 18 months after I left – and years later, the site is still mostly my designs.</p>
          </Card>
          <Card x={35.35} y={26} w={29.3} h={60} title="Requirements met">
            <p>
              Ratings and reviews, ‘get the look’, recommended products, quick view, portrait photos for clothing and responsive design – and
              new checkout options: Collect+, international delivery, gift boxing and gift vouchers.
            </p>
          </Card>
          <Card x={67.05} y={26} w={29.3} h={60} title="Growth">
            <p>After launch, the site rose to the top 50 of the UK Retail Index Top 500, up from the top 150.</p>
            <p>Profits kept rising – even through the pandemic, when the stores had to close.</p>
          </Card>
        </>
      ),
    },
    {
      label: "Thank you",
      bg: "cover",
      noFooter: true,
      content: (
        <>
          <At x={6} y={41.5} w={40}>
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
