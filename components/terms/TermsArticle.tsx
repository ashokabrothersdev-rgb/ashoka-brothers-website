import Image from "next/image";
import { TermsContents } from "@/components/terms/TermsContents";
import { ReadMoreButton } from "@/components/shared/ReadMoreButton";
import { ScrollRevealText } from "@/components/shared/ScrollRevealText";
import { ScrewMark } from "@/components/shared/ScrewMark";
import { contactDetails } from "@/data/shared.data";
import { termsPage, type TermsBlock } from "@/data/terms-page.data";

const CONTACT_ID = "terms-contact";

function Block({ block }: { block: TermsBlock }) {
  if (typeof block === "string") return <p>{block}</p>;

  return (
    <ul className="space-y-2.5">
      {block.map((item) => (
        <li key={item} className="relative pl-6">
          <span
            aria-hidden
            className="absolute top-3 left-0.5 size-1.75 rotate-45 bg-[#a8906a]"
          />
          {item}
        </li>
      ))}
    </ul>
  );
}

export function TermsArticle() {
  const contents = [
    ...termsPage.sections.map(({ id, title }) => ({ id, title })),
    { id: CONTACT_ID, title: "Contact us" },
  ];

  return (
    <article>
      <header className="bg-black px-5 pt-38 pb-16 text-center text-white sm:px-10 sm:pt-46 sm:pb-20 lg:pt-52 lg:pb-24">
        <ScrollRevealText className="font-sans text-[12px] leading-4 font-semibold tracking-[0.16em] text-[#C9A74F] uppercase">
          {termsPage.eyebrow}
        </ScrollRevealText>
        <div className="mt-5 flex items-center justify-center gap-4 sm:gap-7.5">
          <ScrewMark size={13} className="shrink-0 invert max-sm:hidden sm:mt-2" />
          <ScrollRevealText
            as="h1"
            delay={0.08}
            className="font-serif text-[32px] leading-11 tracking-[1px] max-[359px]:text-[28px] sm:text-[52px] sm:leading-15 lg:text-[60px] lg:leading-17"
          >
            {termsPage.title}
          </ScrollRevealText>
          <ScrewMark size={13} className="shrink-0 invert max-sm:hidden sm:mt-2" />
        </div>
        <ScrollRevealText
          delay={0.14}
          className="mt-4 font-sans text-[12px] leading-4 tracking-[0.14em] text-white/50 uppercase"
        >
          Last updated {termsPage.updated}
        </ScrollRevealText>
        <ScrollRevealText
          delay={0.2}
          className="mx-auto mt-7 max-w-2xl text-[15px] leading-7 text-balance text-white/75 sm:text-[17px] sm:leading-8"
        >
          {termsPage.intro}
        </ScrollRevealText>
      </header>

      <div className="bg-white px-5 py-14 sm:px-10 sm:py-20 lg:py-24">
        <div className="mx-auto max-w-200">
          <TermsContents items={contents} />

          <div className="mt-12 sm:mt-16">
            {termsPage.sections.map((section, index) => (
              <section
                key={section.id}
                id={section.id}
                aria-labelledby={`${section.id}-title`}
                className="border-t border-[#282828]/10 py-10 first:border-t-0 first:pt-0 sm:py-12"
              >
                <p className="font-sans text-[12px] leading-4 font-semibold tracking-[0.16em] text-[#a8906a] tabular-nums">
                  {String(index + 1).padStart(2, "0")}
                </p>
                <ScrollRevealText
                  as="h2"
                  id={`${section.id}-title`}
                  className="mt-3 font-serif text-[24px] leading-8 tracking-[0.5px] text-balance text-[#282828] sm:text-[30px] sm:leading-10"
                >
                  {section.title}
                </ScrollRevealText>
                <div className="mt-5 space-y-4 font-sans text-[15px] leading-7 text-[#282828]/80 sm:text-[16px] sm:leading-8">
                  {section.body.map((block, blockIndex) => (
                    <Block key={blockIndex} block={block} />
                  ))}
                </div>
              </section>
            ))}
          </div>

          <aside
            id={CONTACT_ID}
            aria-labelledby={`${CONTACT_ID}-title`}
            className="mt-4 border-5 border-[#EBC533]/50 bg-black px-6 py-10 text-white sm:mt-6 sm:px-10 sm:py-12"
          >
            <p className="font-sans text-[12px] leading-4 font-semibold tracking-[0.16em] text-[#C9A74F] tabular-nums">
              {String(contents.length).padStart(2, "0")}
            </p>
            <ScrollRevealText
              as="h2"
              id={`${CONTACT_ID}-title`}
              className="mt-3 font-serif text-[26px] leading-9 tracking-[0.5px] sm:text-[34px] sm:leading-11"
            >
              {termsPage.contactTitle}
            </ScrollRevealText>
            <p className="mt-3 text-[15px] leading-7 text-white/70 sm:text-[16px]">
              {termsPage.contactText}
            </p>

            <ul className="mt-7 space-y-4 text-[15px] leading-6 text-[#d0d0d0] sm:text-[16px]">
              <li className="flex items-start gap-4">
                <Image
                  src="/icons/location-2.svg"
                  alt="Address"
                  width={20}
                  height={20}
                  className="mt-0.5 size-5 shrink-0"
                />
                <span>{contactDetails.address}</span>
              </li>
              <li className="flex items-center gap-4">
                <Image
                  src="/icons/phone.svg"
                  alt="Phone"
                  width={20}
                  height={20}
                  className="size-5 shrink-0"
                />
                <span>
                  <a
                    href={`tel:${contactDetails.phone1}`}
                    className="transition-opacity hover:opacity-80"
                  >
                    {contactDetails.phone1}
                  </a>
                  <span className="mx-2 text-[#d0d0d0]/60">|</span>
                  <a
                    href={`tel:${contactDetails.phone2}`}
                    className="transition-opacity hover:opacity-80"
                  >
                    {contactDetails.phone2}
                  </a>
                </span>
              </li>
              <li className="flex items-center gap-4">
                <Image
                  src="/icons/email.svg"
                  alt="Email"
                  width={20}
                  height={20}
                  className="size-5 shrink-0"
                />
                <a
                  href={`mailto:${contactDetails.email}`}
                  className="transition-opacity hover:opacity-80"
                >
                  {contactDetails.email}
                </a>
              </li>
            </ul>

            <div className="mt-9">
              <ReadMoreButton href="/contact-us" text="Contact Us" />
            </div>
          </aside>
        </div>
      </div>
    </article>
  );
}
