import { introLines, specialLines } from "@/data/home-page.data";

const lineDelays = ["", "d200", "d400"];
const scrollDelays = ["", "0.15", "0.075"];

export function HomeIntro() {
  return (
    <section
      id="homeBlue"
      data-scroll=""
      data-scroll-id="homeBlue"
      data-scroll-class="dummy"
    >
      <div id="homeText" className="text bigger">
        <p>
          {introLines.map((line, index) => (
            <span
              key={line}
              className="block no_overflow"
              data-scroll=""
              data-scroll-repeat=""
              data-scroll-speed="1.8"
              data-scroll-delay={scrollDelays[index] || undefined}
            >
              <span
                className={`block top_hidden has_transition_1000 fast_rewind ${lineDelays[index]}`}
              >
                {line}
                {index === introLines.length - 1 ? <br /> : null}
              </span>
            </span>
          ))}
        </p>
      </div>
      <div id="homeRight">
        <div id="specialText" data-scroll="" data-scroll-id="specialText" className="text special">
          <p>
            {specialLines.map((line) => (
              <span key={line} className="textLine">
                {line}
                <span className="homeTextMask has_transition_1000" />
              </span>
            ))}
          </p>
        </div>
        <div id="smallText" className="text">
          <p>
            With a focus on quality, consistency and reliable performance, we
            provide fastening solutions made to meet the demands of every
            project, big or small.
          </p>
        </div>
      </div>
    </section>
  );
}
