import { CountAnimation } from "@/components/shared/CountAnimation";
import { stats } from "@/lib/home-page.data";

export function StatsSection() {
  return (
    <section className="py-12 lg:py-25">
      <div className="mx-auto flex max-w-350 flex-col items-center justify-center gap-10 px-5 sm:flex-row sm:gap-12 lg:gap-26">
        {stats.map((stat) => (
          <CountAnimation key={stat.label} {...stat} />
        ))}
      </div>
    </section>
  );
}
