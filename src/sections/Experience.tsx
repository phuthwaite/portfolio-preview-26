import SectionHeading from "../components/SectionHeading";
import { experience, type Job } from "../data/content";

// Set to false to show only each job's title, company, dates and type (hides descriptions and bullets).
const SHOW_JOB_DESCRIPTIONS = false;

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

  return (
    <section id="experience" className="pt-[15px] pb-32 lg:min-h-[862px] lg:pb-40">
      <div className="site-container [--container-max:1060px] lg:px-6">
        <SectionHeading>Experience</SectionHeading>

        <ol className="relative flex flex-col gap-4 pt-10">
          {recent.map((job) => (
            <li key={job.company} className="rounded bg-surface py-4 pr-6 pl-4 lg:py-5">
              <JobHeader job={job} as="h3" />
              {SHOW_JOB_DESCRIPTIONS && (
                <p className="mt-3 max-w-[760px] text-[15px] leading-6 font-medium text-light-gray/75">{job.summary}</p>
              )}
              {SHOW_JOB_DESCRIPTIONS && job.highlights && (
                <ul className="mt-2 flex max-w-[760px] list-disc flex-col gap-1 pl-5 text-[15px] leading-6 font-medium text-light-gray/75 marker:text-dark-gray">
                  {job.highlights.map((item) => (
                    <li key={item}>{item}</li>
                  ))}
                </ul>
              )}
            </li>
          ))}
        </ol>

        <h3 className="mt-12 mb-4 text-sm tracking-[0.06em] text-dark-gray uppercase">Earlier roles</h3>
        <ol className="relative grid gap-4 sm:grid-cols-2">
          {earlier.map((job) => (
            <li key={job.company} className="rounded bg-surface py-4 pr-6 pl-4">
              <JobHeader job={job} as="h4" />
              {SHOW_JOB_DESCRIPTIONS && (
                <p className="mt-2 text-[15px] leading-6 font-medium text-light-gray/75">{job.summary}</p>
              )}
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}
