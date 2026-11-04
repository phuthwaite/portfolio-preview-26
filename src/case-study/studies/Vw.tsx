/* eslint-disable react-refresh/only-export-components -- a study file exports its deck definition, built from local components */
import type { ReactNode } from "react";
import type { DeckDef } from "../Deck";
import { At, Img, SideCopy, Sidebar, SlideHeader, type } from "../slide";
import bg from "../../assets/case-studies/vw/bg.svg";
import logo from "../../assets/case-studies/vw-logo.svg";
import emails from "../../assets/case-studies/vw/emails.webp";
import brands from "../../assets/case-studies/vw/brands.webp";
import discoveryData from "../../assets/case-studies/vw/discovery-data.webp";
import discoverySheet from "../../assets/case-studies/vw/discovery-sheet.webp";
import discoveryAnalysis from "../../assets/case-studies/vw/discovery-analysis.webp";
import planning from "../../assets/case-studies/vw/planning.webp";
import structure from "../../assets/case-studies/vw/structure.webp";
import progressComponents from "../../assets/case-studies/vw/progress-components.webp";
import progressStyles from "../../assets/case-studies/vw/progress-styles.webp";
import spec from "../../assets/case-studies/vw/spec.webp";
import mvpCore from "../../assets/case-studies/vw/mvp-core.webp";
import mvpBrands from "../../assets/case-studies/vw/mvp-brands.webp";
import mvpTemplates from "../../assets/case-studies/vw/mvp-templates.webp";
import mvpDocs from "../../assets/case-studies/vw/mvp-docs.webp";
import mvpAssets from "../../assets/case-studies/vw/mvp-assets.webp";
import workflowGuide from "../../assets/case-studies/vw/workflow-guide.webp";
import libAudi from "../../assets/case-studies/vw/lib-audi.webp";
import libCupra from "../../assets/case-studies/vw/lib-cupra.webp";
import docCoreComponents from "../../assets/case-studies/vw/doc-core-components.webp";
import docCoreStyles from "../../assets/case-studies/vw/doc-core-styles.webp";
import docLibVw from "../../assets/case-studies/vw/doc-lib-vw.webp";
import docLibSeat from "../../assets/case-studies/vw/doc-lib-seat.webp";
import avatar from "../../assets/case-studies/samsung/avatar.webp";

// The "Email Design System" deck, built from the case study at pixels.ph/volkswagen in the same style as the
// Samsung deck, on a dark teal background (#0B4250) with a turquoise glow (#4FC8DA): a brighter version of the study's accent on the home page (#B3D7DD). Positions are
// percentages of the 1920×1080 slide.

// Smaller type for captions and copy in narrow columns
const small = "text-[15px] leading-[1.45] lg:text-[1.15cqw]";
const caption = "mt-2 text-[13px] text-white/70 lg:mt-[0.6cqw] lg:text-[0.94cqw]";

// The emails for every brand, tilted back in perspective (cover and last slide)
function CoverArt() {
  return (
    <At x={45} y={24} w={52} h={52} className="max-lg:mt-4 lg:[perspective:2400px]">
      <img
        src={emails}
        alt="Emails built with the design system for VW Commercial Vehicles, VW, Audi, CUPRA, SEAT and Škoda"
        className="block w-full rounded-[4px] shadow-[0_2cqw_4cqw_rgb(0_0_0/0.5)] lg:h-full lg:object-cover lg:object-top lg:[transform:rotateY(-16deg)_rotateX(6deg)]"
      />
    </At>
  );
}

// A panel of text, like the deck's cards
function Card({ x, y, w, h, title, children }: { x: number; y: number; w: number; h: number; title: string; children: ReactNode }) {
  return (
    <At x={x} y={y} w={w} h={h} className="rounded-[6px] bg-linear-to-br from-white/20 to-white/12 px-6 py-7 lg:px-[2cqw] lg:py-[2.4cqw]">
      <h3 className="mb-3 text-[20px] font-medium lg:mb-[1cqw] lg:text-[1.77cqw]">{title}</h3>
      <p className="text-[16px] leading-[1.45] lg:text-[1.35cqw]">{children}</p>
    </At>
  );
}

export const vw: DeckDef = {
  id: "vw",
  title: "Email Design System",
  client: "Volkswagen Group",
  footer: "UX Case Study: Volkswagen Group UK",
  backgrounds: { cover: bg, dark: bg },
  slides: [
    {
      label: "Cover",
      bg: "cover",
      content: (
        <>
          <At x={3.65} y={36} w={42}>
            <img src={logo} alt="Volkswagen" width={35} height={35} className="mb-6 size-[56px] lg:mb-[2.6cqw] lg:size-[4.2cqw]" />
            <h1 className={type.h1}>Email Design System</h1>
            <p className="mt-4 text-[24px] leading-[1.2] font-medium tracking-[0.04em] lg:mt-[1.04cqw] lg:text-[2.5cqw]">
              Volkswagen Group UK
              <br />
              Havas CX / 2021–2022
            </p>
          </At>
          <CoverArt />
        </>
      ),
    },
    {
      label: "Summary",
      bg: "dark",
      content: (
        <>
          <SlideHeader section="Overview" number="1.1" />
          <At x={3.65} y={19.5} w={44}>
            <h2 className={`${type.h2} mb-5 lg:mb-[1.5cqw]`}>Summary</h2>
            <div className={type.body}>
              <p>
                Volkswagen Group is the leading automotive company in the UK, with six high-profile brands:{" "}
                <strong>Volkswagen Passenger Cars and Commercial Vehicles, Audi, Škoda, SEAT and CUPRA.</strong>
              </p>
              <p>Each brand has its own established visual identity, and CRM emails built with the design system had to reflect it.</p>
              <p>
                Components needed a common underlying structure, yet the flexibility for diverse styles and layouts – so brand styles could be
                swapped, and future updates made consistently and efficiently.
              </p>
            </div>
          </At>
          <At x={55} y={30} w={38} className="flex flex-col gap-8 lg:gap-[3cqw]">
            <img src={brands} alt="Volkswagen, Audi, Škoda, SEAT and CUPRA" className="w-full brightness-0 invert" />
            <ul className="flex flex-wrap gap-2 text-[13px] font-medium tracking-[0.12em] uppercase lg:gap-[0.8cqw] lg:text-[1.05cqw]">
              {["UX Lead", "11 months", "2021/22", "End to end", "Multi-brand", "Responsive"].map((tag) => (
                <li key={tag} className="rounded-full border border-white/30 px-4 py-2 lg:px-[1.2cqw] lg:py-[0.6cqw]">
                  {tag}
                </li>
              ))}
            </ul>
          </At>
        </>
      ),
    },
    {
      label: "Role and Responsibilities",
      bg: "dark",
      content: (
        <>
          <SlideHeader section="Overview" number="1.2" />
          <At x={3.65} y={19.5} w={50}>
            <h2 className={`${type.h2} mb-5 lg:mb-[1.5cqw]`}>Role & Responsibilities</h2>
            <div className={type.body}>
              <p>
                I was tasked with creating a modular email design system for Volkswagen Group UK, on behalf of leading digital media agency{" "}
                <strong>Havas CX</strong>.
              </p>
              <p>
                With support from Product Managers and Programme/Creative Directors, and working directly with developers, I was{" "}
                <strong>Experience Lead</strong> for the whole project – delivering a Figma-based, production-ready, responsive, multi-brand
                email design system.
              </p>
              <p>
                The end-to-end process spanned almost a year: discovery and research, design, build and QA, and handoff with full documentation
                and training.
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
          <SlideHeader section="Overview" number="1.3" />
          <At x={3.65} y={19.5} w={50}>
            <h2 className={`${type.h2} mb-5 lg:mb-[1.5cqw]`}>Scope & Constraints</h2>
            <div className={type.body}>
              <p>
                The MVP was a like-for-like recreation of a set of existing emails and modules for VWG brands and sub-brands. Created in silos
                over the years, they had drifted apart: full redesigns were out of scope, but visual conflicts had to be resolved to make them
                consistent.
              </p>
              <p>
                Figma had been chosen as the platform – an ideal choice – but few people on the project had used it. That meant ongoing
                education, and many adjustments to approach and scope along the way.
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
                  "Make producing customer emails far more efficient, replacing a cumbersome Photoshop workflow.",
                  "End the stream of PSD variants for every personalised version and text amend.",
                  "Save time and cost, freeing resources for higher-priority campaigns and innovation.",
                  "One cloud-based source of truth for brand styles, assets and archive, with version history built in.",
                ],
              ],
              [
                51.35,
                "Challenges",
                [
                  "HTML emails’ patchy CSS support ruled out a token-based system.",
                  "Components were hard-coded as HTML blocks, limiting creative freedom – perhaps not a bad thing!",
                  "Bespoke Photoshop designs made file handling, storage, access and maintenance inefficient.",
                  "Little Figma experience across the wider team meant ongoing education.",
                ],
              ],
            ] as const
          ).map(([x, title, items]) => (
            <At key={title} x={x} y={17.6} w={45} h={66} className="flex flex-col gap-4 lg:gap-[1.2cqw]">
              <h2 className={type.h2}>{title}</h2>
              <ul className="flex flex-1 flex-col justify-center gap-4 rounded-[12px] bg-white/20 px-6 py-6 text-[16px] leading-[1.4] lg:gap-[1.3cqw] lg:rounded-[0.625cqw] lg:px-[2.1cqw] lg:py-[1.6cqw] lg:text-[1.56cqw]">
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
      label: "Discovery",
      bg: "cover",
      content: (
        <>
          <Sidebar>
            <SlideHeader section="Process" number="2.1" sidebar />
            <SideCopy title="Discovery">
              <p>Over 5,000 emails from every brand and journey phase, seen side by side for the first time.</p>
              <p>This bird’s-eye view revealed similarities, inconsistencies and common patterns.</p>
            </SideCopy>
          </Sidebar>
          {(
            [
              [discoveryData, "1. Asset organisation", "Inconsistently named files went into an Airtable database with metadata, setting up the categories used for taxonomy, documentation and tracking.", "An Airtable database of the email assets"],
              [discoverySheet, "2. Template and journey mapping", "Each brand’s CRM journeys and touchpoints were compiled in a master spreadsheet, embedded in Miro alongside email screenshots for cross-referencing.", "Journey spreadsheet and email screenshots in Miro"],
              [discoveryAnalysis, "3. Analysis", "Key templates were rebuilt in Figma as basic wireframes, showing each one’s structure and hierarchy, and where content could be consolidated.", "Email templates as wireframes in Figma"],
            ] as const
          ).map(([src, title, text, alt], i) => (
            <At key={title} x={35.4 + i * 20.7} y={22} w={18.6}>
              <img src={src} alt={alt} className="aspect-[287/180] w-full rounded-[6px] object-cover shadow-[0_0.5cqw_1.5cqw_rgb(0_0_0/0.35)]" />
              <h3 className="mt-5 mb-2 text-[18px] font-medium lg:mt-[1.6cqw] lg:mb-[0.6cqw] lg:text-[1.46cqw]">{title}</h3>
              <p className={small}>{text}</p>
            </At>
          ))}
        </>
      ),
    },
    {
      label: "Planning the System Architecture",
      bg: "dark",
      content: (
        <>
          <SlideHeader section="Process" number="2.2" />
          <At x={3.65} y={14.8} w={39}>
            <h2 className={`${type.h2} mb-5 lg:mb-[1.5cqw]`}>Planning the System Architecture</h2>
            <div className={`${type.body} [&_p+p]:mt-[1em]`}>
              <p>
                Building an intuitive system from scratch in Figma meant hundreds of possible configurations. With no existing system to refer
                to, options were explored in detail, then reviewed and iterated as the project developed.
              </p>
              <p>
                Figma allows only three fixed levels of hierarchy: <strong>Team › Project › File</strong>. That added complexity, but the simple
                navigation made a more usable product.
              </p>
              <p>Post-it notes on a nearby wall mapped the libraries, and tracked brand nuances, bugs and deliverables.</p>
            </div>
          </At>
          <At x={47} y={9} w={49} h={82}>
            <Img src={planning} alt="Post-it notes mapping the design system’s libraries, teams and brand components" />
          </At>
        </>
      ),
    },
    {
      label: "System Structure",
      bg: "dark",
      content: (
        <>
          <SlideHeader section="Process" number="2.3" />
          <At x={3.65} y={14.8} w={70}>
            <h2 className={`${type.h2} mb-5 lg:mb-[1.5cqw]`}>System Structure</h2>
            <div className={type.body}>
              <p>
                Templates and system content were mapped as a sitemap, to group and organise them for each workflow: design, review, handoff and
                archive.
              </p>
            </div>
          </At>
          <At x={3.65} y={38} w={92.7} h={46} className="rounded-[6px] bg-white p-2 lg:p-[0.8cqw]">
            <Img src={structure} alt="Early planning of the Figma teams, projects and files (left), and the final library and template structure (right)" />
          </At>
          <At x={3.65} y={86} w={60}>
            <p className={caption}>Early planning (left); final structure (right)</p>
          </At>
        </>
      ),
    },
    {
      label: "Components and Styles",
      bg: "cover",
      content: (
        <>
          <Sidebar>
            <SlideHeader section="Process" number="2.4" sidebar />
            <SideCopy title="Components & Styles">
              <p>A start-small, test-and-learn approach began with the two VW brands, whose mix of similarities and differences made an ideal proof of concept.</p>
              <p>Rounds of testing at rising fidelity led to the Core Library, duplicated and restyled for each brand.</p>
            </SideCopy>
          </Sidebar>
          <At x={34.6} y={14} w={28.2} h={66}>
            <Img src={progressComponents} alt="Components progressing from wireframes to branded designs" />
            <p className={caption}>Progression of components</p>
          </At>
          <At x={64.3} y={14} w={33} h={66}>
            <Img src={progressStyles} alt="Styles progressing from base styles to each brand" />
            <p className={caption}>Progression of styles</p>
          </At>
        </>
      ),
    },
    {
      label: "Specification",
      bg: "dark",
      content: (
        <>
          <SlideHeader section="Process" number="2.5" />
          <At x={3.65} y={19.5} w={40}>
            <h2 className={`${type.h2} mb-5 lg:mb-[1.5cqw]`}>Specification</h2>
            <div className={type.body}>
              <p>Detailed specs for mobile and desktop components were created throughout the build.</p>
              <p>
                Alignment, padding and margins were baked into the library components to avoid development conflicts, and the specs were added
                to the documentation for reference.
              </p>
            </div>
          </At>
          <At x={52} y={8} w={40.4} h={84}>
            <Img src={spec} alt="Design specs for email components, with spacing and alignment measurements" />
          </At>
        </>
      ),
    },
    {
      label: "MVP",
      bg: "dark",
      content: (
        <>
          <SlideHeader section="Process" number="2.6" />
          <At x={3.65} y={14.8} w={70}>
            <h2 className={`${type.h2} mb-3 lg:mb-[1cqw]`}>MVP</h2>
            <p className={type.body}>The multi-faceted MVP was made up of five types of content.</p>
          </At>
          {(
            [
              [mvpCore, "Core Library", "The foundation: every component and style derives from it. Its unbranded elements double as a lo-fi design resource.", "Global styles and shared elements in the core library"],
              [mvpBrands, "Brand Libraries", "One library per brand, in its own Figma team. Core properties cascade down, so designs can switch brands with a library swap.", "Brand library components"],
              [mvpTemplates, "Production Templates", "Quick-start files with the right library links and page structure, for faster, more consistent email projects.", "Production template files"],
              [mvpDocs, "Documentation", "Every component and style documented, with brand variances and usage rules, plus a OneNote wiki for the wider business.", "Component documentation pages"],
              [mvpAssets, "Additional Assets", "Quick tips, tutorials, shortcuts, plugins and workflow guides for designers, plus a markup library for handoff specs.", "Workflow guides and markup library"],
            ] as const
          ).map(([src, title, text, alt], i) => (
            <At key={title} x={3.65 + i * 18.85} y={32} w={17.3}>
              <img src={src} alt={alt} className="aspect-[1024/436] w-full rounded-[6px] object-cover object-left-top shadow-[0_0.5cqw_1.5cqw_rgb(0_0_0/0.35)]" />
              <h3 className="mt-5 mb-2 text-[18px] font-medium lg:mt-[1.4cqw] lg:mb-[0.6cqw] lg:text-[1.46cqw]">{title}</h3>
              <p className={small}>{text}</p>
            </At>
          ))}
        </>
      ),
    },
    {
      label: "Delivery and Handoff",
      bg: "cover",
      content: (
        <>
          <Sidebar>
            <SlideHeader section="Outcome" number="3.1" sidebar />
            <SideCopy title="Delivery & Handoff">
              <p>Once the system was ready to launch, I spent several days training the agency’s design team hands-on.</p>
              <p>They adopted it quickly, moving from Photoshop to Figma with ease – a testament to their skills and enthusiasm.</p>
            </SideCopy>
          </Sidebar>
          <At x={35} y={19} w={61.5}>
            <img
              src={workflowGuide}
              alt="Pages from the Figma workflow guide: library publishing, swapping libraries and prototypes"
              className="block w-full rounded-[6px] shadow-[0_1cqw_3cqw_rgb(0_0_0/0.45)]"
            />
            <p className={caption}>Figma workflow guide</p>
          </At>
        </>
      ),
    },
    {
      label: "Reception",
      bg: "dark",
      content: (
        <>
          <SlideHeader section="Outcome" number="3.2" />
          <At x={3.65} y={14.8} w={60}>
            <h2 className={type.h2}>Reception</h2>
          </At>
          <Card x={3.65} y={26} w={29.3} h={56} title="Result">
            The design system met the objectives set at the start, with plenty of room to grow at minimal effort. Stakeholders and clients
            received the MVP well, and were keen to implement it.
          </Card>
          <Card x={35.35} y={26} w={29.3} h={56} title="Governance & Evolution">
            Legacy designs beyond the MVP will move to the new format in stages, as the business needs them. Its full value will show as the
            system grows and evolves.
          </Card>
          <Card x={67.05} y={26} w={29.3} h={56} title="Unexpected Wins">
            Discovery artefacts shared with clients on request gave them valuable, unexpected CX insights – building confidence in the project
            and team early on, and adding value to their investment.
          </Card>
        </>
      ),
    },
    {
      label: "Email Output",
      bg: "cover",
      content: (
        <>
          <SlideHeader section="Outcome" number="3.3" />
          <At x={6.65} y={14} w={86.7} h={76}>
            <Img src={emails} alt="Emails built with the design system for VW Commercial Vehicles, VW, Audi, CUPRA, SEAT and Škoda" />
          </At>
        </>
      ),
    },
    {
      label: "Learnings and Takeaways",
      bg: "dark",
      content: (
        <>
          <SlideHeader section="Outcome" number="3.4" />
          <At x={3.65} y={14.8} w={60}>
            <h2 className={type.h2}>Learnings & Takeaways</h2>
          </At>
          <Card x={3.65} y={26} w={29.3} h={56} title="Attitude">
            Every stage brought blockers and workarounds. A versatile, dynamic attitude turned them into creative problem solving – vital for
            keeping momentum and scope on track.
          </Card>
          <Card x={35.35} y={26} w={29.3} h={56} title="Collaboration">
            Open, frequent communication with developers – three stand-ups a week and a direct chat channel – kept queries moving, and made
            tight late-stage turnarounds possible.
          </Card>
          <Card x={67.05} y={26} w={29.3} h={56} title="Support">
            A superb internal team, especially the Product Manager, gave the right mix of support and autonomy, and the wider UX team brought
            energy, ideas and company to a mostly solo role.
          </Card>
        </>
      ),
    },
    {
      label: "Brand Libraries",
      bg: "dark",
      content: (
        <>
          <SlideHeader section="Visuals" number="4.1" />
          <At x={3.65} y={14.8} w={60}>
            <h2 className={type.h2}>Brand Libraries</h2>
          </At>
          <At x={3.65} y={30} w={45}>
            <img src={libAudi} alt="Audi library elements" className="block w-full rounded-[6px]" />
            <p className={caption}>Audi library elements</p>
          </At>
          <At x={51.35} y={30} w={45}>
            <img src={libCupra} alt="CUPRA library elements" className="block w-full rounded-[6px]" />
            <p className={caption}>CUPRA library elements</p>
          </At>
        </>
      ),
    },
    {
      label: "Documentation",
      bg: "dark",
      content: (
        <>
          <SlideHeader section="Visuals" number="4.2" />
          <At x={3.65} y={11} w={45} h={50}>
            <Img src={docCoreComponents} alt="Documentation of the core components" className="lg:object-left-top" />
          </At>
          <At x={51.35} y={11} w={45} h={50}>
            <Img src={docCoreStyles} alt="Documentation of the core styles and elements" className="lg:object-left-top" />
          </At>
          <At x={3.65} y={66} w={45} h={22}>
            <Img src={docLibVw} alt="VW library documentation" className="lg:object-left-top" />
          </At>
          <At x={51.35} y={66} w={45} h={22}>
            <Img src={docLibSeat} alt="SEAT library documentation" className="lg:object-left-top" />
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
          <At x={6} y={41.5} w={38}>
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
