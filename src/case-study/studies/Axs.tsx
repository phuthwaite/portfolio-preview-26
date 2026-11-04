/* eslint-disable react-refresh/only-export-components -- a study file exports its deck definition, built from local components */
import type { ReactNode } from "react";
import type { DeckDef } from "../Deck";
import { At, Img, SideCopy, Sidebar, SlideHeader, type } from "../slide";
import bg from "../../assets/case-studies/axs/bg.svg";
import logo from "../../assets/case-studies/axs-logo.svg";
import before from "../../assets/case-studies/axs/before.webp";
import skins from "../../assets/case-studies/axs/skins.webp";
import early from "../../assets/case-studies/axs/early.webp";
import wireFinal from "../../assets/case-studies/axs/wire-final.webp";
import tech from "../../assets/case-studies/axs/tech.webp";
import mobile from "../../assets/case-studies/axs/mobile.webp";
import desktop from "../../assets/case-studies/axs/desktop.webp";
import full from "../../assets/case-studies/axs/full.webp";
import etickets from "../../assets/case-studies/axs/etickets.webp";
import avatar from "../../assets/case-studies/samsung/avatar.webp";

// The AXS order email deck, from the case study notes and image board in Figma (px.ph, nodes 667:6904 and
// 414:2623), in the same style as the Samsung deck: a navy background (the emails' own #1A2456) with a glow in
// AXS blue (#007DFF), also the study's accent on the home page. Positions are percentages of the 1920×1080 slide.

const caption = "mt-2 text-[13px] text-white/70 italic lg:mt-[0.6cqw] lg:text-[0.94cqw]";

// The new order confirmation email, open in an inbox (cover and last slide)
function CoverArt() {
  return (
    <At x={52} y={12} w={42} h={76} className="max-lg:mt-4">
      <Img src={desktop} alt="The redesigned AXS order confirmation email, open in an inbox" className="drop-shadow-[0_2cqw_3cqw_rgb(0_0_0/0.45)]" />
    </At>
  );
}

// A panel of text, like the deck's cards
function Card({ x, y, w, h, title, children }: { x: number; y: number; w: number; h: number; title: string; children: ReactNode }) {
  return (
    <At x={x} y={y} w={w} h={h} className="rounded-[6px] bg-linear-to-br from-white/20 to-white/12 px-6 py-7 lg:px-[2cqw] lg:py-[2.4cqw]">
      <h3 className="mb-3 text-[20px] font-medium lg:mb-[1cqw] lg:text-[1.77cqw]">{title}</h3>
      <div className="text-[16px] leading-[1.45] lg:text-[1.3cqw] [&_p+p]:mt-[0.8em]">{children}</div>
    </At>
  );
}

// A bulleted list in a translucent panel (goals, challenges, enhancements)
function Bullets({ items, className = "" }: { items: readonly ReactNode[]; className?: string }) {
  return (
    <ul
      className={`flex flex-col justify-center gap-3 rounded-[12px] bg-white/20 px-6 py-6 text-[15px] leading-[1.4] lg:gap-[0.9cqw] lg:rounded-[0.625cqw] lg:px-[2.1cqw] lg:py-[1.6cqw] lg:text-[1.35cqw] ${className}`}
    >
      {items.map((item, i) => (
        <li key={i} className="relative pl-[1.25em] before:absolute before:top-[0.5em] before:left-0 before:aspect-square before:w-[0.32em] before:rounded-full before:bg-[#dce1e9]">
          {item}
        </li>
      ))}
    </ul>
  );
}

export const axs: DeckDef = {
  id: "axs",
  title: "Multi-Brand CRM & Ticket Design",
  client: "AXS",
  footer: "UX Case Study: AXS Europe",
  backgrounds: { cover: bg, dark: bg },
  slides: [
    {
      label: "Cover",
      bg: "cover",
      content: (
        <>
          <At x={3.65} y={28} w={46}>
            <img src={logo} alt="AXS" width={64} height={28} className="mb-6 h-auto w-[110px] lg:mb-[2.6cqw] lg:w-[7.5cqw]" />
            <h1 className={type.h1}>Multi-Brand CRM & Ticket Design</h1>
            <p className="mt-4 text-[24px] leading-[1.2] font-medium tracking-[0.04em] lg:mt-[1.04cqw] lg:text-[2.5cqw]">
              AXS Europe
              <br />
              Live Event Ticketing
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
                The project began early in my four years at AXS, and continued right up to my last days there.
              </p>
              <p>
                As the <strong>sole UX/UI designer in the UK</strong>, I was asked by a Product Manager to improve the design of the order
                confirmation emails sent to customers after buying tickets.
              </p>
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
          <At x={3.65} y={19.5} w={44}>
            <h2 className={`${type.h2} mb-5 lg:mb-[1.5cqw]`}>Scope & Constraints</h2>
            <div className={type.body}>
              <p>
                The original emails were text-heavy, with little branding: only a small header banner set apart AXS’s main clients – The O2,
                Wembley Arena, AXS itself and key promoters.
              </p>
              <p>Branding aside, the text had little formatting, so customers struggled to find the event or order details they needed.</p>
            </div>
          </At>
          <At x={56} y={8} w={30} h={84} className="overflow-hidden rounded-[6px] shadow-[0_1cqw_3cqw_rgb(0_0_0/0.45)]">
            <Img src={before} alt="The original order confirmation email for The O2: long, unformatted text under a small header banner" fit="cover" />
          </At>
          <At x={87.5} y={86} w={10}>
            <p className={caption}>Before</p>
          </At>
        </>
      ),
    },
    {
      label: "Project Summary",
      bg: "dark",
      content: (
        <>
          <SlideHeader section="Overview" number="1.3" />
          <At x={3.65} y={19.5} w={38}>
            <h2 className={`${type.h2} mb-5 lg:mb-[1.5cqw]`}>Project Summary</h2>
            <div className={type.body}>
              <p>
                The new design was modular from the start, splitting event, ticket, order and payment, and venue details into sections, with
                text styled to show hierarchy – much clearer and easier to read.
              </p>
              <p>
                The template could be reskinned for each brand with minimal code changes. Brand colours were hard-coded through the
                components, so emails kept their identity even with images turned off.
              </p>
            </div>
          </At>
          <At x={45} y={12} w={51} h={76}>
            <Img src={skins} alt="The template reskinned for AXS, Indigo at The O2 LIVE, The SSE Arena Wembley and Wasps" />
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
          <At x={3.65} y={14.8} w={45} h={76} className="flex flex-col gap-4 lg:gap-[1.2cqw]">
            <h2 className={type.h2}>Goals</h2>
            <Bullets
              className="flex-1"
              items={[
                "Improve the customer experience.",
                "Strengthen clients’ brand identity.",
                "Flex for template variations, event and venue needs, languages, currencies and tax profiles, delivery and payment methods, upsells and ticket types.",
                "Reusable, adaptable modules.",
                "Consistent design and structure, whatever the data source.",
                "A suite of templates for new priority clients, brands and events.",
              ]}
            />
          </At>
          <At x={51.35} y={14.8} w={45} h={76} className="flex flex-col gap-4 lg:gap-[1.2cqw]">
            <h2 className={type.h2}>Challenges</h2>
            <Bullets
              className="flex-1"
              items={[
                "No developer resource to build the templates.",
                "Little understanding of the template files around the business, and early doubts the designs could work.",
                "Fitting existing back-end data and infrastructure – then a second back-end system, with entirely different data points.",
                "Testing across email clients without the right tools.",
                "Learning XSLT and conditional XML on the job, to keep up with constant updates and requests.",
                "Little governance of templates and branding, leading to hundreds of variations.",
              ]}
            />
          </At>
        </>
      ),
    },
    {
      label: "Design Process",
      bg: "cover",
      content: (
        <>
          <Sidebar>
            <SlideHeader section="Process" number="2.1" sidebar />
            <SideCopy title="Design Process">
              <p>Competitor analysis, analysis of the order data, and wireframing the content.</p>
              <p>Each brand’s identity was simplified into universal HTML elements.</p>
            </SideCopy>
          </Sidebar>
          <At x={35} y={14} w={61.5} h={72}>
            <Img src={early} alt="The original email, early wireframes and the first branded designs" />
          </At>
        </>
      ),
    },
    {
      label: "Modules and Hierarchy",
      bg: "dark",
      content: (
        <>
          <SlideHeader section="Process" number="2.2" />
          <At x={3.65} y={19.5} w={42}>
            <h2 className={`${type.h2} mb-5 lg:mb-[1.5cqw]`}>Modules & Hierarchy</h2>
            <div className={type.body}>
              <p>The available and required data points shaped the structure of each section.</p>
              <p>
                Familiar elements – the event image, location and date icons – made details quick to find, and the data was ordered from the
                customer’s point of view.
              </p>
              <p>Being modular, each section could be iterated for specific requirements without touching the rest.</p>
            </div>
          </At>
          <At x={50} y={7} w={44} h={86}>
            <Img src={wireFinal} alt="The email wireframe beside the finished design" />
          </At>
        </>
      ),
    },
    {
      label: "Under the Hood",
      bg: "dark",
      content: (
        <>
          <SlideHeader section="Process" number="2.3" />
          <At x={3.65} y={19.5} w={60}>
            <h2 className={`${type.h2} mb-5 lg:mb-[1.5cqw]`}>Under the Hood</h2>
            <div className={type.body}>
              <p>
                The templates ran on XSLT and conditional XML, pulling in data from two back-end systems. I learnt both on the job to keep the
                templates up to date.
              </p>
            </div>
          </At>
          <At x={3.65} y={42} w={92.7} h={46}>
            <Img src={tech} alt="Conditional XSLT template code for different data sources" />
          </At>
        </>
      ),
    },
    {
      label: "Responsive Prototype",
      bg: "cover",
      content: (
        <>
          <Sidebar>
            <SlideHeader section="Process" number="2.4" sidebar />
            <SideCopy title="Responsive Prototype">
              <p>An initial responsive email was prototyped as a proof of concept, before further development with real system data.</p>
            </SideCopy>
          </Sidebar>
          <At x={36} y={10} w={36} h={80}>
            <Img src={desktop} alt="The order confirmation email on desktop" />
          </At>
          <At x={74} y={10} w={22} h={80}>
            <Img src={mobile} alt="The order confirmation email on mobile" />
          </At>
        </>
      ),
    },
    {
      label: "Results",
      bg: "cover",
      content: (
        <>
          <Sidebar>
            <SlideHeader section="Outcome" number="3.1" sidebar />
            <SideCopy title="Results">
              <p>The templates were rolled out successfully.</p>
              <p>Testing was a challenge, but even where the styling wasn’t perfect, order and event details always came across clearly.</p>
            </SideCopy>
          </Sidebar>
          <At x={40} y={6} w={22} h={88} className="overflow-hidden rounded-[6px] shadow-[0_1cqw_3cqw_rgb(0_0_0/0.45)]">
            <Img src={full} alt="The full order confirmation email, from ticket and order details to important and venue information" fit="cover" />
          </At>
          <At x={66} y={20} w={30} h={60}>
            <Img src={mobile} alt="" />
          </At>
        </>
      ),
    },
    {
      label: "Enhancements and Variations",
      bg: "dark",
      content: (
        <>
          <SlideHeader section="Outcome" number="3.2" />
          <At x={3.65} y={14.8} w={44}>
            <h2 className={`${type.h2} mb-3 lg:mb-[1cqw]`}>Enhancements & Variations</h2>
            <p className={type.body}>Many were added to the original suite of templates, including:</p>
          </At>
          <At x={3.65} y={33} w={44} h={58}>
            <Bullets
              className="h-full lg:columns-2 lg:block lg:[&>li]:mb-[0.9cqw]"
              items={[
                "Multi-event orders",
                "Multi-session orders",
                "Multiple ticket types and categories",
                "Season tickets",
                "Named ticket holders",
                "Upgrade, comp and VIP tickets",
                "Ticket insurance",
                "English and Swedish",
                "Swedish tax breakdown",
                "Pay with points",
                "Reservation payment prompts",
                "Custom event artwork",
              ]}
            />
          </At>
          <At x={51} y={20} w={45} h={60}>
            <Img src={etickets} alt="E-ticket emails for All Points East, BST Hyde Park and British Summer Time" />
          </At>
        </>
      ),
    },
    {
      label: "Learnings",
      bg: "dark",
      content: (
        <>
          <SlideHeader section="Outcome" number="3.3" />
          <At x={3.65} y={14.8} w={60}>
            <h2 className={type.h2}>Learnings</h2>
          </At>
          <Card x={3.65} y={26} w={29.3} h={62} title="Documentation">
            <p>Template wireframes, structures and restrictions were documented in Confluence, but rarely read.</p>
            <p>In hindsight, hands-on demos and Q&A sessions would have given non-technical colleagues more context.</p>
          </Card>
          <Card x={35.35} y={26} w={29.3} h={62} title="Resourcing">
            <p>With dedicated development resource, the project could likely have been delivered in half the time.</p>
            <p>My developer colleague’s support was invaluable, but a designer learning markup and deployment on the job is not an efficient way to work.</p>
          </Card>
          <Card x={67.05} y={26} w={29.3} h={62} title="Advocacy">
            <p>
              Research and feedback sessions with colleagues led me to propose back-end improvements for setting up event emails and
              e-tickets.
            </p>
            <p>The detailed RFC was approved, but never taken forward.</p>
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
