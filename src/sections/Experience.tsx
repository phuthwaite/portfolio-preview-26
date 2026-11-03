import { useState } from "react";
import SectionHeading from "../components/SectionHeading";
import { experience, type Job } from "../data/content";

// "Details" on/off switch beside the section title: reveals the full CV blurb (and key projects) for
// every recent role at once
function DetailsSwitch({
  on,
  onChange,
}: {
  on: boolean;
  onChange: (on: boolean) => void;
}) {
  return (
    <button
      type="button"
      role="switch"
      aria-checked={on}
      aria-controls="experience-recent"
      onClick={() => onChange(!on)}
      data-umami-event="experience-details-toggle"
      data-umami-event-state={on ? "off" : "on"}
      className="group flex cursor-pointer items-center gap-3 rounded-full py-1 pr-1 pl-3 text-xs font-medium tracking-[0.2em] text-light-gray uppercase outline-none focus-visible:ring-1 focus-visible:ring-white/40"
    >
      Details
      <span
        aria-hidden
        className={`relative h-6 w-11 rounded-full transition-colors duration-200 ${on ? "bg-[#7c4dff]" : "bg-white/15 group-hover:bg-white/25"}`}
      >
        <span
          className={`absolute top-1 left-1 size-4 rounded-full bg-white shadow transition-transform duration-200 motion-reduce:transition-none ${on ? "translate-x-5" : ""}`}
        />
      </span>
    </button>
  );
}

// (Detail text is capped at 680px, about 85 characters a line, for comfortable reading, and wraps
// "pretty" so no paragraph ends on a single orphaned word.)
// Joins the last two words with a non-breaking space, so a paragraph can never end on one word
// (a fallback for browsers without text-wrap: pretty)
const noOrphan = (text: string) => text.replace(/ (\S+)$/, "\u00a0$1");

// Content that opens and closes smoothly (animating the grid row from 0 to its natural height)
function Collapsible({
  open,
  children,
}: {
  open: boolean;
  children: React.ReactNode;
}) {
  return (
    <div
      aria-hidden={!open}
      inert={!open}
      className={`grid transition-[grid-template-rows,opacity] duration-300 ease-out motion-reduce:transition-none ${open ? "grid-rows-[1fr] opacity-100" : "grid-rows-[0fr] opacity-0"}`}
    >
      <div className="overflow-hidden">{children}</div>
    </div>
  );
}

// As on the CV: "Job title | Company", then the dates and contract type on the next line
function JobHeader({ job, as: Heading }: { job: Job; as: "h3" | "h4" }) {
  return (
    <div className="flex flex-col gap-1">
      <Heading className="text-lg leading-[27px] text-light-gray">
        <span className="font-semibold">{job.role}</span>
        <span aria-hidden className="mx-2 text-dark-gray">
          |
        </span>
        <span className="sr-only">, </span>
        {job.company}
      </Heading>
      <p className="text-xs tracking-[0.06em] text-dark-gray uppercase">
        <time>{job.period}</time>
        <span aria-hidden> · </span>
        <span className="sr-only">, </span>
        {job.type}
      </p>
    </div>
  );
}

// Figma: experience content > item-list (cards extended with dates and descriptions from the CV)
export default function Experience() {
  const recent = experience.filter((job) => !job.earlier);
  const earlier = experience.filter((job) => job.earlier);
  const [details, setDetails] = useState(false);

  return (
    <section
      id="experience"
      className="pt-[15px] pb-32 lg:min-h-[862px] lg:pb-40"
    >
      <div className="site-container [--container-max:1060px] lg:px-6">
        <SectionHeading
          aside={<DetailsSwitch on={details} onChange={setDetails} />}
        >
          Experience
        </SectionHeading>

        <ol
          id="experience-recent"
          className="relative flex flex-col gap-4 pt-10"
        >
          {recent.map((job) => (
            <li key={job.company} className="rounded bg-surface px-4 py-3">
              <JobHeader job={job} as="h3" />
              {job.brief && (
                <p className="mt-1 text-[15px] leading-[22px] text-white">
                  {job.brief}
                </p>
              )}
              <Collapsible open={details}>
                <p className="mt-2 max-w-[680px] text-[15px] leading-6 text-pretty text-white">
                  {noOrphan(job.summary)}
                </p>
                {job.highlights && (
                  <ul className="mt-2 flex max-w-[680px] list-disc flex-col gap-1 pl-5 text-[15px] leading-6 text-pretty text-white marker:text-dark-gray">
                    {job.highlights.map((item) => (
                      <li key={item}>{noOrphan(item)}</li>
                    ))}
                  </ul>
                )}
              </Collapsible>
            </li>
          ))}
        </ol>

        <h3 className="mt-12 mb-4 text-sm tracking-[0.06em] text-dark-gray uppercase">
          Earlier roles
        </h3>
        <ol className="relative grid gap-4 sm:grid-cols-2">
          {earlier.map((job) => (
            <li key={job.company} className="rounded bg-surface px-4 py-3">
              <JobHeader job={job} as="h4" />
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}
