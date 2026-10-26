import SectionHeading from "../components/SectionHeading";
import { Label } from "../components/Widget";
import { FillUnderline, LinkArrow } from "../components/LinkDecor";
import { contact } from "../data/content";
import Testimonials from "./Testimonials";

// The Contact frame only contains its title in Figma; the details come from the CV, with LinkedIn
// recommendations beside them on desktop (below them on phones).
export default function Contact() {
  return (
    <section
      id="contact"
      className="min-h-[480px] pt-[15px] pb-28 lg:min-h-[862px]"
    >
      <div className="site-container">
        <SectionHeading>Contact</SectionHeading>
        <div className="relative flex flex-col gap-14 pt-10 lg:flex-row lg:items-start lg:gap-16">
          <ul className="flex flex-col gap-10 lg:w-[360px] lg:shrink-0">
            {contact.map((item) => {
              // web links and the CV PDF open in a new tab
              const external = item.href.startsWith("http") || item.href.endsWith(".pdf");
              return (
                <li key={item.label} className="flex flex-col gap-2">
                  <Label>{item.label}</Label>
                  <a
                    href={item.href}
                    data-umami-event="contact-click"
                    data-umami-event-link={item.label}
                    {...(external && {
                      target: "_blank",
                      rel: "noopener noreferrer",
                    })}
                    // the case studies' "Read more" style, in white and a little larger
                    className={`group inline-flex w-fit flex-col pt-1 text-white ${external ? "cursor-new-window" : ""}`}
                  >
                    <span className="inline-flex items-center gap-1.5 text-lg leading-[1.4] font-semibold tracking-[0.08em] uppercase">
                      {item.text}
                      <LinkArrow className="size-[0.8em]" />
                    </span>
                    <FillUnderline />
                    {external && (
                      <span className="sr-only">(opens in a new tab)</span>
                    )}
                  </a>
                </li>
              );
            })}
          </ul>
          <Testimonials className="lg:flex-1" />
        </div>
      </div>
    </section>
  );
}
