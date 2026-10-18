import SectionHeading from "../components/SectionHeading";
import Widget from "../components/Widget";
import { profile } from "../data/content";

function Tags({ items }: { items: string[] }) {
  return (
    <ul className="mt-1 flex flex-wrap gap-2">
      {items.map((item) => (
        <li key={item} className="rounded bg-white/5 px-2 py-0.5 text-[15px] leading-6 text-light-gray">
          {item}
        </li>
      ))}
    </ul>
  );
}

// Figma: profile content — About on the left, Skillset/Toolkit on the right, filled from the CV
export default function Profile() {
  return (
    <section id="profile" className="pt-[15px] pb-16 lg:min-h-[739px]">
      <div className="site-container [--container-max:1060px] lg:px-6">
        <SectionHeading>Profile</SectionHeading>
        <div className="relative flex flex-col gap-10 py-10 lg:flex-row lg:gap-14">
          <div className="flex flex-col gap-10 lg:w-[460px] lg:shrink-0">
            <Widget label="About">
              {profile.about.map((para, i) => (
                <p key={i} className="mb-2 leading-7 last:mb-0">
                  {para}
                </p>
              ))}
            </Widget>
            <Widget label="Education">
              <ul className="flex flex-col gap-4">
                {profile.education.map((ed) => (
                  <li key={ed.qualification}>
                    <p>{ed.qualification}</p>
                    {ed.detail && <p className="text-[15px] leading-6 text-light-gray/75">{ed.detail}</p>}
                    <p className="text-[15px] leading-6 text-light-gray/100">
                      {ed.institution}
                      {/* , {ed.year} */}
                    </p>
                  </li>
                ))}
              </ul>
            </Widget>
            <Widget label="Interests">
              <Tags items={profile.interests} />
            </Widget>
          </div>
          <div className="flex flex-1 flex-col gap-10">
            <Widget label="Skillset">
              <Tags items={profile.skillset} />
            </Widget>
            <Widget label="Toolkit">
              <Tags items={profile.toolkit} />
            </Widget>
          </div>
        </div>
      </div>
    </section>
  );
}
