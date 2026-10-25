import holibobLogo from "../assets/case-studies/holibob-logo.svg";
import vwLogo from "../assets/case-studies/vw-logo.svg";
import samsungLogo from "../assets/case-studies/samsung-logo.svg";
import axsLogo from "../assets/case-studies/axs-logo.svg";
import twcLogo from "../assets/case-studies/twc-logo.svg";

export const navItems = [
  { id: "case-studies", label: "Case studies", icon: "book" },
  { id: "profile", label: "Profile", icon: "user" },
  { id: "design", label: "Design", icon: "photo" },
  { id: "experience", label: "Experience", icon: "more" },
  { id: "contact", label: "Contact", icon: "message" },
] as const;

export type SectionId = (typeof navItems)[number]["id"];

// From CV_PaulineH_2026
export const profile = {
  // TODO: the CV has no written bio, so this is its headline; replace with an intro in your own words.
  about: ["Product and experience Designer with 20+ years' experience leading the design of digital products for global brands across travel, media, entertainment, gaming, technology and ecommerce.","Experienced in shaping product strategy, leading end-to-end design across the full product lifecycle, and collaborating with cross-functional teams to deliver user-centred, commercially effective solutions.",
    "Combining strong UX research, interaction design and visual design expertise with practical application of AI to enhance research, ideation, prototyping and design workflows, improving both team efficiency and product outcomes.",
    "Hands-on front-end skills (HTML, CSS, JavaScript, React) for prototyping in code and working closely with engineering to see designs through to production."],
  // Grouped by the part of the job they apply to
  skillset: [
    {
      group: "Product Design",
      items: [
        "End-to-end Product Design",
        "UX Strategy",
        "Interaction Design",
        "Information Architecture",
        "Design Systems",
        "Responsive & Native Mobile",
        "Accessibility (WCAG)",
        "Visual & Creative Direction",
        "Animation / Motion Design",
        "3D Graphics",
      ],
    },
    {
      group: "Research & Optimisation",
      items: [
        "User Research & Discovery",
        "Usability Testing",
        "Customer Journey Mapping",
        "A/B Testing & CRO",
        "Product Analytics & Insights",
        "Service Design",
      ],
    },
    {
      group: "AI",
      items: [
        "AI-assisted Research & Synthesis",
        "AI-powered Design Workflows",
        "Rapid Prototyping with AI",
        "Human-centred AI Design",
        "Workflow Automation",
      ],
    },
    {
      // designs built by hand, not just handed over (or left to AI)
      group: "Front-end Development",
      items: ["HTML, CSS & JavaScript", "React", "Node.js", "Coded Prototypes", "Working in Dev Frameworks"],
    },
    {
      group: "Delivery & Leadership",
      items: [
        "Cross-functional Leadership",
        "Stakeholder Management",
        "Agile Product Development",
        "Developer Handoff & Design QA",
        "Wireframing & Prototyping",
      ],
    },
  ],
  toolkit: [
    { group: "Design & Prototyping", items: ["Figma", "Framer", "ProtoPie", "Axure RP", "Adobe Creative Cloud"] },
    { group: "Research & Analytics", items: ["Google Analytics", "Hotjar", "Datadog"] },
    { group: "Development", items: ["VS Code", "GitHub", "npm"] },
    { group: "Collaboration", items: ["Miro", "Jira", "Confluence"] },
    { group: "AI", items: ["ChatGPT", "Claude", "Cursor", "Figma AI"] },
  ],
  education: [
    {
      qualification: "BSc Media Technology with Distinction",
      detail: "(Specialism in Digital Art & Design)",
      year: "2003",
      institution: "University of the West of Scotland",
    },
    { qualification: "HND Digital Art & Design with Merit", year: "2002", institution: "City of Glasgow College" },
  ],
  interests: ["Travel", "Photography", "Gigs & Festivals", "Snowboarding", "Rollercoasters", "VR / AR / XR"],
};

// From CV_PaulineH_2026
export const contact = [
  { label: "Email", text: "hello@pixels.ph", href: "mailto:hello@pixels.ph" },
  { label: "Website", text: "pixels.ph", href: "https://pixels.ph" },
  { label: "LinkedIn", text: "phuthwaite", href: "https://www.linkedin.com/in/phuthwaite" },
];

// LinkedIn recommendations, trimmed to their strongest lines (their own words; "…" marks a cut).
// The full versions are on LinkedIn (recommendationsUrl).
export const recommendationsUrl = "https://www.linkedin.com/in/phuthwaite/details/recommendations/";

export type Testimonial = {
  quote: string;
  name: string;
  role: string;
  /** how they worked with Pauline, as LinkedIn describes it */
  relationship: string;
};

export const testimonials: Testimonial[] = [
  {
    quote:
      "Poggs has been transformative in her role, working with everyone from executives to engineers, with a strong focus on detail and metrics. She has transformed our consumer- and agent-facing products from functional to effective, resulting in higher conversion rates. This is not magic; it is attention to the small stuff.",
    name: "Graeme Bryce",
    role: "CTO, Holibob",
    relationship: "Managed Pauline directly",
  },
  {
    quote:
      "It's hard to overstate how great she is at her job; lots of people can make pretty designs, but Pauline can do something most other people can't: think through the deep systems and patterns throughout a complex product and create a usable, great-looking design that is easy to use and deceptively simple.",
    name: "Sarah Householder",
    role: "Director of Product, reacHIRE",
    relationship: "Managed Pauline directly",
  },
  {
    quote:
      "Pauline shaped the UI/UX at Holibob over several years, bringing fresh thinking and a rigour around testing that genuinely moved the needle. … I'd recommend Pauline without hesitation to any team looking for someone who combines design instinct with a data-driven mindset.",
    name: "Craig Everett",
    role: "Co-Founder & CEO, Holibob",
    relationship: "Worked with Pauline (senior)",
  },
  {
    quote:
      "Pauline is an excellent designer and has had a significant impact on our site during the time she worked with us. Even now, years later, I hear comments from users complimenting the features and designs that Pauline created.",
    name: "Addie Swartz",
    role: "CEO, reacHIRE",
    relationship: "Worked with Pauline (senior)",
  },
  {
    quote:
      "Her attention to detail and care for the end user are second to none. Holibob's technology platform was an environment where there were many constraints that she had to work around with her designs, but even with these heavy constraints she produced designs and a user journey that not only looked visually great, but also always improved conversion.",
    name: "Isaac Scarrott",
    role: "Product Focused Engineer, Holibob",
    relationship: "Implemented Pauline's designs",
  },
  {
    quote:
      "As well as being incredibly creative she also has a meticulous eye for detail. Pauline always delivers finished designs that are more elegant and usable than my briefs can ever express; I cannot recommend her work highly enough.",
    name: "Will Trattles",
    role: "Ticketing and Product Specialist",
    relationship: "Worked with Pauline on the same team @ AXS",
  },
  {
    quote:
      "Pauline is a great designer. She listens to the brief, takes into account the commercial necessities and then creates designs that work. She [is] good at both keeping the day-to-day design quality high as well [as] innovating. On top of this she's also a genuinely pleasant person to work with.",
    name: "Justin Moodie",
    role: "VP Marketing, UFORCE",
    relationship: "Senior to Pauline but didn’t manage directly @ hmv",
  },
];

export type Job = {
  company: string;
  role: string;
  period: string;
  type: "Permanent" | "Contract";
  summary: string;
  /** Bulleted key projects, shown under the summary */
  highlights?: string[];
  /** Earlier roles are shown in a compact grid */
  earlier?: boolean;
};

// From CV_PaulineH_2026 (most recent first, in the CV's order)
export const experience: Job[] = [
  {
    company: "Holibob",
    role: "Director, UX Design",
    period: "2023–2026",
    type: "Permanent",
    summary:
      "Leading UX on a travel experience platform connecting millions of travellers with curated activities worldwide. Ownership of the full E2E discovery, recommendation, booking and checkout journey for global B2B2C partners – including On The Beach, Secret Escapes, Amadeus, and NEOM – shaping the consumer-facing experience layer that balances partner flexibility with emotionally engaging UX.",
  },
  {
    company: "Volkswagen Group / Havas",
    role: "Experience Lead",
    period: "2021–2022",
    type: "Contract",
    summary:
      "Created a Figma-based multi-brand email design system spanning six marques – Volkswagen, Volkswagen Commercial Vehicles, Audi, Škoda, SEAT, and Cupra – with interchangeable brand and component libraries, production-ready responsive templates, and comprehensive documentation covering complex, diverse customer journeys.",
  },
  {
    company: "reacHIRE",
    role: "UX Lead",
    period: "2020–2022",
    type: "Contract",
    summary:
      "Designed web and native app UX/UI for ‘Aurora’, a career development and coaching platform supporting professionals returning to the workforce.",
  },
  {
    company: "Samsung / Cheil UK",
    role: "Senior UX Consultant",
    period: "2021",
    type: "Contract",
    summary:
      "Optimised UX across Samsung’s UK digital platforms – including live AR shopping, loyalty rewards, ratings and reviews and E2E purchase journeys.",
  },
  {
    company: "AXS Europe",
    role: "Senior UX Designer",
    period: "2017–2021",
    type: "Permanent",
    summary:
      "Sole UK-based UXD resource, working with cross-functional teams to deliver business-focused, user-friendly digital ticketing solutions for global live music and sports events. Key projects:",
    highlights: [
      "UX & UI design of ticket purchasing and management flows, specifically for The O2 VIP and Swedish Elite Football partner projects.",
      "Design and prototype creation of multi-brand, multi-lingual email templates, compatible with proprietary systems, optimising UX in a clear and understandable customisable format.",
      "UX & UI design of progressive checkout payment integrations (pay-with-points, Klarna, PayPal and Amazon Pay), upsells and add-on options (ticket insurance, upgrades, merch).",
    ],
  },
  {
    company: "The White Company",
    role: "Lead UX Designer",
    period: "2016–2017",
    type: "Contract",
    summary:
      "Led a redesign of product and checkout journeys across the international ecommerce site – from data analysis and competitor benchmarking through iterative prototyping to C-level stakeholder presentations and developer handoff.",
  },
  {
    company: "TripAdvisor",
    role: "Senior Visual Designer",
    period: "2015",
    type: "Contract",
    summary: "Visual design for the world’s largest travel review and discovery platform.",
    earlier: true,
  },
  {
    company: "SkyScanner",
    role: "Senior Visual Designer",
    period: "2015",
    type: "Contract",
    summary: "Design for a B2B travel product incorporating booking and itinerary management for corporate travellers.",
    earlier: true,
  },
  {
    company: "Karen Millen",
    role: "Front-End Developer",
    period: "2014",
    type: "Contract",
    summary: "Front-end development for the luxury fashion retailer’s ecommerce platform.",
    earlier: true,
  },
  {
    company: "PokerStars",
    role: "Senior Digital Designer",
    period: "2012–2014",
    type: "Contract",
    summary: "Digital design for the world’s largest online poker platform.",
    earlier: true,
  },
  {
    company: "Marks and Spencer",
    role: "Senior Digital Designer",
    period: "2011–2012",
    type: "Contract",
    summary: "Digital design across M&S’s ecommerce and brand platforms.",
    earlier: true,
  },
  {
    company: "YouView / BBC",
    role: "Senior Visual Designer",
    period: "2011",
    type: "Contract",
    summary: "Visual design for the BBC-backed on-demand TV platform.",
    earlier: true,
  },
  {
    company: "HMV UK",
    role: "Digital Design Lead",
    period: "2007–2010",
    type: "Permanent",
    summary: "Led the digital design team for the UK’s iconic music and entertainment retailer.",
    earlier: true,
  },
  {
    company: "SEGA",
    role: "Senior Web Designer / Developer",
    period: "2007",
    type: "Permanent",
    summary: "Web design and development for one of gaming’s most recognised brands.",
    earlier: true,
  },
];

export type DesignWorkItem = {
  client: string;
  /** Omitted where the old site gave no date */
  year?: string;
  description: string;
  image: string;
  alt: string;
  /** "contain" for artwork whose shape is far from the card's, so it isn't cropped */
  fit?: "cover" | "contain";
};

// Images live in src/assets/gallery (copied from the old site). Every file in that folder is
// bundled, so keep it to the images listed here.
const gallery = import.meta.glob<string>("../assets/gallery/*", { eager: true, import: "default" });
const img = (file: string) => gallery[`../assets/gallery/${file}`];

// Slides and captions from the old site's "Design Work" galleries; captions for images it never
// showed (sam-journeymap, axs1, axs-pdf, ps-hippo2, twc1, twc-fragrance, mns-feature, sega1) describe
// what's pictured.
export const designWork: DesignWorkItem[] = [
  { client: "Samsung", year: "2021", image: img("sam-report.png"), alt: "Samsung UX report", description: "UX report of research and recommendations for improvements to the ‘Ratings & Reviews’ feature used across samsung.co.uk." },
  { client: "Samsung", year: "2021", image: img("sam-recs.png"), alt: "Samsung UX recommendations", description: "UX recommendations for ‘Ratings & Reviews’, detailing LOE estimations and ‘quick wins’." },
  { client: "Samsung", year: "2021", image: img("sam-proto.png"), alt: "Samsung Neo QLED prototype", fit: "contain", description: "ProtoPie prototype demonstrating UX optimisation & interactions for the Neo QLED TV feature page." },
  { client: "Samsung", year: "2021", image: img("sam-noted.png"), alt: "Annotated Samsung wireframes", fit: "contain", description: "UX wireframes, annotated with the reasoning behind design decisions." },
  { client: "Samsung", year: "2021", image: img("sam-journeymap.png"), alt: "Samsung QLED journey map", description: "Journey flow mapping how users move from the QLED feature page through to product detail pages." },
  { client: "AXS Europe", year: "2017–2021", image: img("axs-flash.png"), alt: "AXS Flash tickets microsite", description: "UX/UI design and animations for a responsive microsite introducing the “Flash” digital ticket format." },
  { client: "AXS Europe", year: "2017–2021", image: img("axs-sef.png"), alt: "AXS ticketing for Swedish elite football", description: "Responsive redesign of ticket purchasing & management for top-tier Swedish football and hockey teams." },
  { client: "AXS Europe", year: "2017–2021", image: img("axs1.png"), alt: "AXS wireframes and user flows", description: "Wireframes and user flows for season, match and pot ticket purchasing, and delivery selection in checkout." },
  { client: "AXS Europe", year: "2017–2021", image: img("axs-emails.png"), alt: "AXS ticket emails", description: "UX/UI design and build of multi-brand transactional email templates." },
  { client: "AXS Europe", year: "2017–2021", image: img("axs-pdf.png"), alt: "AXS mobile and print-at-home tickets", description: "Mobile and print-at-home ticket designs." },
  { client: "PokerStars", year: "2013", image: img("ps-nacho.png"), alt: "Team PokerStars microsite", description: "Visual design and branding for the ‘Team PokerStars’ player microsite." },
  { client: "PokerStars", year: "2013", image: img("ps-hippo.png"), alt: "PokerStars Live website", description: "UX/UI and visual design of microsite templates for ‘PokerStars Live’ casino rooms across Europe." },
  { client: "PokerStars", year: "2013", image: img("ps-hippo2.png"), alt: "PokerStars Live microsite on laptop and tablet", description: "‘PokerStars Live’ microsite templates across desktop and tablet." },
  { client: "PokerStars", year: "2013", image: img("ps-2d.png"), alt: "PokerStars 2D graphics", description: "2D graphics created for various PokerStars campaigns and promotions." },
  { client: "PokerStars", year: "2013", image: img("ps-3d.png"), alt: "PokerStars 3D graphics", description: "3D assets created in Cinema 4D for various PokerStars campaigns and promotions." },
  { client: "TripAdvisor", year: "2015", image: img("ta_emails-photo.png"), alt: "TripAdvisor emails", description: "Visual design of multi-branded marketing, onboarding and transactional emails for vacation rental markets." },
  { client: "TripAdvisor", year: "2015", image: img("ta_emails-resp.png"), alt: "TripAdvisor responsive emails", description: "Visual design of C2C and B2C responsive emails." },
  { client: "TripAdvisor", year: "2015", image: img("ta_weather-trig.png"), alt: "Holiday Lettings weather-triggered emails", description: "Concept designs for weather-triggered B2C emails for TA sub-brand Holiday Lettings." },
  { client: "The White Company", year: "2017", image: img("twc-process.png"), alt: "The White Company UX artefacts", description: "UX artefacts: flow diagrams, responsive grid templates, research and documentation." },
  { client: "The White Company", year: "2017", image: img("twc-clothing.png"), alt: "The White Company product pages", description: "Clothing product detail pages; before and after." },
  { client: "The White Company", year: "2017", image: img("twc-fragrance.png"), alt: "The White Company fragrance pages", description: "Fragrance category and product pages across desktop and mobile." },
  { client: "The White Company", year: "2017", image: img("twc1.png"), alt: "The White Company flows and templates", description: "Site flows, wireframes and responsive templates for product pages." },
  { client: "Universal Music Group", year: "2011", image: img("umg-web.png"), alt: "Artist microsites", fit: "contain", description: "Design & development of artist microsites for Semi Precious Weapons and Mary J. Blige." },
  { client: "Skyscanner", year: "2015", image: img("ss-responsive.png"), alt: "Skyscanner business travel app", description: "Responsive UI design for a business travel management & booking app." },
  { client: "Skyscanner", year: "2015", image: img("ss-phones.png"), alt: "Skyscanner app on phones", fit: "contain", description: "Responsive UI design for a business travel management & booking app." },
  { client: "T.M. Lewin", year: "2014", image: img("tml_emails.png"), alt: "T.M. Lewin emails", description: "Visual design of responsive marketing emails." },
  { client: "Christie’s", year: "2014", image: img("chr_emails.png"), alt: "Christie’s emails", description: "Design & build of responsive marketing emails." },
  { client: "Karen Millen", year: "2013", image: img("km-web.png"), alt: "Karen Millen microsite", description: "Front-end development of a responsive parallax microsite for a global ATL fashion campaign." },
  { client: "BBC / YouView", year: "2011", image: img("yv-screens.png"), alt: "YouView screens", description: "UX/UI design of setup & settings screens for a new digital television service." },
  { client: "Marks & Spencer", year: "2012", image: img("mns-web.png"), alt: "Marks & Spencer feature pages", fit: "contain", description: "Visual design of feature pages across marksandspencer.com." },
  { client: "Marks & Spencer", year: "2012", image: img("mns-feature.png"), alt: "Marks & Spencer feature pages", description: "Feature pages and style guides, from gift cards to seasonal edits." },
  { client: "SEGA", image: img("sega1.png"), alt: "SEGA game promotions", description: "Promotional banners and game microsites, including Sega Rally, Iron Man and Beijing 2008." },
];

export type CaseStudy = {
  id: string;
  title: string;
  logo: string;
  logoAlt: string;
  logoWidth: number;
  logoHeight: number;
  company: string;
  summary: string[];
  stats: { value: string; label: string }[];
  /** Describes the artwork (drawn by sections/case-study-art, keyed by id) */
  artAlt: string;
  /** Brand colour for the title, stats and link */
  accent: string;
  href: string;
};

// TODO: every summary is placeholder copy carried over from the Figma file; replace with each story.
const placeholderSummary = [
  "With two years of invaluable experience in my role at Harmony Technology –– a tech company based here in Rabat, I have honed my skills in React.js, Next.js, TailwindCSS, and TypeScript, allowing me to craft seamless and interactive user experiences. During my time at Harmony Technology,",
  " had the privilege of collaborating on projects for esteemed clients such as the Ministry of Health, Ministry of Education, and Ministry of Justice. It was an incredibly rewarding experience to develop applications that directly impact the lives of Moroccan citizens.",
];

// Figma: HB 2, VW 2, SS 2, AXS 2, TWC 2 — ordered most recent first, as in Experience.
// TODO: point each `href` at its case study page once it exists.
export const caseStudies: CaseStudy[] = [
  {
    id: "holibob",
    title: "Personalised Travel Experiences",
    logo: holibobLogo,
    logoAlt: "Holibob",
    logoWidth: 105.75,
    logoHeight: 24,
    company: "Holibob Ltd - Travel Experiences",
    summary: placeholderSummary,
    stats: [
      { value: "3074%", label: "revenue increase" },
      { value: "90%", label: "conversion rate increase" },
      { value: "50%", label: "engagement rate" },
    ],
    artAlt: "Holibob travel app screens: welcome, recommended tour and tour details",
    accent: "#6fcdc4",
    href: "#case-studies",
  },
  {
    id: "vw",
    title: "Multi-Brand CRM Design System",
    logo: vwLogo,
    logoAlt: "Volkswagen",
    logoWidth: 35,
    logoHeight: 35,
    company: "Volkswagen Group UK",
    summary: [
      "I was brought in by Ekino/Havas as Experience Lead to deliver Volkswagen Group's production-ready, multi-brand email design system in Figma. Working with product, programme and creative leads, and directly with developers, I led it end to end over almost a year: discovery, design, build, testing, and handoff with full documentation and training. One modular system covers Audi, VW Passenger Cars, VW Commercial Vehicles, Škoda, CUPRA and SEAT, while keeping each brand distinct.",
    ],
    stats: [{ value: "60%", label: "reduction in production time" }],
    artAlt: "Collage of marketing emails for Volkswagen Group brands including Cupra, Škoda and Volkswagen Financial Services",
    accent: "#b3d7dd",
    href: "#case-studies",
  },
  {
    id: "samsung",
    title: "S21 Customer Rewards",
    logo: samsungLogo,
    logoAlt: "Samsung",
    logoWidth: 154.44,
    logoHeight: 24,
    company: "Samsung Electronics UK",
    summary: [
      "Designed the end-to-end campaign architecture to smoothly onboard new flagships while simultaneously capturing legacy upgrades and conquering non-Samsung trade-ins. The design successfully streamlined complex token distribution and clipboard handoffs, resulting in a friction-free software redemption path that maximized post-purchase user gratification across the UK launch window.",
    ],
    stats: [{ value: "3", label: "Targeted User Flows" }, { value: "8+", label: "Global Partner Integrations" }, { value: "E2E", label: "Conversion & Redemption Logic" }],
    artAlt: "The Galaxy S21 Boost rewards page on desktop and mobile",
    accent: "#7178f5",
    href: "#case-studies",
  },
  {
    id: "axs",
    title: "Multi-Brand CRM & Ticket Design",
    logo: axsLogo,
    logoAlt: "AXS",
    logoWidth: 64,
    logoHeight: 27.71,
    company: "AXS Europe - Live Event Ticketing",
    summary: placeholderSummary,
    stats: [
      { value: "97%", label: "open rate" },
      { value: "12%", label: "reduction in ticket-related customer support queries" },
    ],
    artAlt: "Printed and folded AXS e-tickets for a Wasps v Harlequins rugby match",
    accent: "#3397ff",
    href: "#case-studies",
  },
  {
    id: "twc",
    title: "Ecommerce Discovery & Checkout",
    logo: twcLogo,
    logoAlt: "The White Company",
    logoWidth: 163.46,
    logoHeight: 34,
    company: "The White Company",
    summary: ["I was brought in as UX Lead to redesign product detail and listing pages, and various checkout flows. I conducted competitive analysis, user research and data synthesis, as well as creating wireframes, prototypes and high-fidelity designs for desktop and mobile, which I presented to C-level stakeholders. I worked closely with the development team to ensure the designs were implemented correctly and met the business goals."],
    stats: [
      { value: "17%", label: "conversion rate increase" },
      // TODO: this stat is identical to one on the AXS slide in Figma; check it's right for TWC.
      { value: "12%", label: "reduction in ticket-related customer support queries" },
    ],
    artAlt: "The White Company product page on desktop and mobile",
    accent: "#dddddd",
    href: "#case-studies",
  },
];
