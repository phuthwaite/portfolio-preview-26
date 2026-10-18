import SectionHeading from "../components/SectionHeading";
import { Label } from "../components/Widget";
import { FillUnderline, LinkArrow } from "../components/LinkDecor";
import { contact } from "../data/content";

// The Contact frame only contains its title in Figma; the details come from the CV.
export default function Contact() {
  return (
    <section
      id="contact"
      className="min-h-[480px] pt-[15px] pb-28 lg:min-h-[862px]"
    >
      <div className="site-container">
        <SectionHeading>Contact</SectionHeading>
        <ul className="relative flex flex-col gap-10 pt-10">
          {contact.map((item) => {
            const external = item.href.startsWith("http");
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
                  className="group inline-flex w-fit items-center gap-3 text-[clamp(24px,4vw,40px)] leading-tight tracking-[-0.01em] text-white"
                >
                  <span className="flex flex-col gap-[0.12em]">
                    {item.text}
                    <FillUnderline className="h-[2px]" />
                  </span>
                  <LinkArrow className="size-[0.6em]" />
                  {external && (
                    <span className="sr-only">(opens in a new tab)</span>
                  )}
                </a>
              </li>
            );
          })}
        </ul>
      </div>
    </section>
  );
}
