import { ScrollRevealText } from "@/components/shared/ScrollRevealText";
import { ScrewMark } from "@/components/shared/ScrewMark";
import { aboutPage } from "@/data/about-page.data";

const { bio } = aboutPage;

// Keep a figure on the same line as its unit, e.g. "50,000 sq. ft."
const keepUnits = (text: string) =>
  text.replace(/(\d) sq\. ft\./g, "$1\u00a0sq.\u00a0ft.");

export function BioSection() {
  return (
    <>
      <section
        aria-labelledby="bio-heading"
        className="bg-black px-5 py-16 text-white sm:px-10 sm:py-20 lg:px-16 lg:py-30"
      >
        <div className="mx-auto max-w-381.5">
          <div className="grid gap-10 xl:grid-cols-[minmax(0,5fr)_minmax(0,6fr)] xl:gap-24">
            <div>
              <ScrollRevealText className="font-sans text-[12px] leading-4 font-semibold tracking-[0.16em] text-[#C9A74F] uppercase">
                {bio.eyebrow}
              </ScrollRevealText>
              <ScrollRevealText
                as="h2"
                id="bio-heading"
                delay={0.08}
                className="mt-5 font-serif text-[36px] leading-11 tracking-[1px] text-white sm:text-[52px] sm:leading-15 xl:text-[56px] xl:leading-16"
              >
                {bio.title}
              </ScrollRevealText>
              <ScrollRevealText
                delay={0.16}
                className="mt-5 max-w-md font-serif text-[18px] leading-7 text-[#C9A74F] sm:text-[22px] sm:leading-8"
              >
                {bio.tagline}
              </ScrollRevealText>
            </div>

            <div className="flex max-w-3xl flex-col gap-6 font-sans text-[15px] leading-7 text-white/75 sm:text-[17px] sm:leading-8 xl:max-w-none">
              <ScrollRevealText>{keepUnits(bio.intro)}</ScrollRevealText>
              <ScrollRevealText
                as="h3"
                className="mt-4 font-serif text-[22px] leading-8 text-white sm:text-[28px] sm:leading-10"
              >
                {bio.legacyTitle}
              </ScrollRevealText>
              {bio.legacy.map((paragraph) => (
                <ScrollRevealText key={paragraph}>
                  {keepUnits(paragraph)}
                </ScrollRevealText>
              ))}
            </div>
          </div>

          <dl className="mt-14 grid border-t border-white/15 sm:grid-cols-3 lg:mt-24">
            {bio.stats.map((stat, index) => (
              <ScrollRevealText
                as="div"
                key={stat.value}
                delay={index * 0.1}
                className="flex flex-col-reverse justify-end gap-3 border-b border-white/15 py-8 last:border-b-0 sm:border-b-0 sm:border-l sm:py-10 sm:pr-4 sm:pl-6 sm:first:border-l-0 sm:first:pl-0 lg:pl-10"
              >
                <dt className="font-sans text-[13px] leading-5 tracking-[0.12em] text-white/60 uppercase">
                  {stat.label}
                </dt>
                <dd className="font-serif text-[48px] leading-none text-[#EBC533] sm:text-[40px] md:text-[48px] lg:text-[60px] xl:text-[72px]">
                  {stat.value}
                </dd>
              </ScrollRevealText>
            ))}
          </dl>
        </div>
      </section>

      <section
        aria-labelledby="group-heading"
        className="bg-white px-5 py-16 text-[#282828] sm:px-10 sm:py-20 lg:px-16 lg:py-30"
      >
        <div className="mx-auto max-w-381.5">
          <div className="text-center">
            <div className="flex items-center justify-center gap-4 sm:gap-7.5">
              <ScrewMark size={13} className="shrink-0 max-lg:hidden lg:mt-2" />
              <ScrollRevealText
                as="h2"
                id="group-heading"
                className="font-serif text-[28px] leading-9 tracking-[1px] text-balance sm:text-[36px] sm:leading-12 lg:text-[40px] xl:text-[44px] xl:leading-13"
              >
                {bio.groupTitle}
              </ScrollRevealText>
              <ScrewMark size={13} className="shrink-0 max-lg:hidden lg:mt-2" />
            </div>
            <ScrollRevealText
              delay={0.12}
              className="mx-auto mt-6 max-w-200 text-[15px] leading-7 text-[#282828]/80 sm:text-[17px] sm:leading-8"
            >
              {bio.groupIntro}
            </ScrollRevealText>
          </div>

          <ol className="relative mt-14 grid gap-12 pl-8 sm:mt-16 lg:mt-20 lg:grid-cols-3 lg:gap-10 lg:pt-12 lg:pl-0">
            <span
              aria-hidden
              className="absolute top-3 bottom-3 left-1.25 w-px bg-[#282828]/15 lg:top-1.25 lg:right-0 lg:bottom-auto lg:left-0 lg:h-px lg:w-auto"
            />
            {bio.milestones.map((milestone, index) => (
              <li key={milestone.year} className="relative">
                <span
                  aria-hidden
                  className="absolute top-3 -left-8 size-2.75 rotate-45 bg-[#a8906a] lg:-top-12 lg:left-0"
                />
                <ScrollRevealText
                  delay={index * 0.1}
                  className="font-serif text-[44px] leading-none text-[#a8906a] sm:text-[56px]"
                >
                  {milestone.year}
                </ScrollRevealText>
                <ScrollRevealText
                  as="h3"
                  delay={index * 0.1 + 0.06}
                  className="mt-4 font-serif text-[24px] leading-8 sm:text-[28px] sm:leading-9"
                >
                  {milestone.name}
                </ScrollRevealText>
                <ScrollRevealText
                  delay={index * 0.1 + 0.12}
                  className="mt-3 max-w-sm text-[15px] leading-7 text-[#282828]/75 sm:text-[16px]"
                >
                  {keepUnits(milestone.description)}
                </ScrollRevealText>
              </li>
            ))}
          </ol>

          <div className="mt-20 grid gap-10 border-t border-[#282828]/10 pt-16 sm:mt-24 lg:mt-30 lg:pt-24 xl:grid-cols-[minmax(0,4fr)_minmax(0,8fr)] xl:gap-20">
            <ScrollRevealText
              as="h2"
              className="font-serif text-[28px] leading-9 tracking-[1px] sm:text-[44px] sm:leading-13"
            >
              {bio.reasonsTitle}
            </ScrollRevealText>
            <ol className="grid gap-x-12 gap-y-10 sm:grid-cols-2">
              {bio.reasons.map((reason, index) => (
                <li key={reason.title} className="border-t border-[#282828]/15 pt-6">
                  <p className="font-sans text-[12px] leading-4 font-semibold tracking-[0.16em] text-[#a8906a]">
                    {String(index + 1).padStart(2, "0")}
                  </p>
                  <ScrollRevealText
                    as="h3"
                    delay={(index % 2) * 0.08}
                    className="mt-4 font-serif text-[22px] leading-8 sm:text-[26px] sm:leading-9"
                  >
                    {reason.title}
                  </ScrollRevealText>
                  <ScrollRevealText
                    delay={(index % 2) * 0.08 + 0.06}
                    className="mt-3 text-[15px] leading-7 text-[#282828]/75 sm:text-[16px]"
                  >
                    {reason.description}
                  </ScrollRevealText>
                </li>
              ))}
            </ol>
          </div>

          <figure className="mx-auto mt-20 max-w-245 text-center sm:mt-24 lg:mt-30">
            <span
              aria-hidden
              className="block h-12 font-serif text-[96px] leading-none text-[#EBC533] sm:h-16 sm:text-[128px]"
            >
              “
            </span>
            <blockquote>
              <ScrollRevealText className="font-serif text-[24px] leading-9 text-balance sm:text-[34px] sm:leading-12 lg:text-[40px] lg:leading-14">
                {keepUnits(bio.quote)}
              </ScrollRevealText>
            </blockquote>
          </figure>
        </div>
      </section>
    </>
  );
}
