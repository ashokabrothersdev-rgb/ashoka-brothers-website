import { KnowMore } from "./KnowMore";
import { munniImage } from "./data";

export function HomeWhy() {
  return (
    <section id="homePool">
      <div className="mainContainer insight">
        <div className="top no_overflow" data-scroll="" data-scroll-repeat="">
          <div className="left">
            <div className="highlight cBlue no_overflow has_transition_3000 fast_rewind top_translated">
              <h2>Why Choose Us</h2>
            </div>
            <div className="sectionSubtitle text halfMargin has_transition_3000 fast_rewind top_translated d100">
              <p>
                A TRUSTED NAME IN HARDWARE, DELIVERING RELIABLE FASTENING
                SOLUTIONS WITH CONSISTENT QUALITY AND LASTING PERFORMANCE.
              </p>
            </div>
            <div className="text doubleMargin has_transition_3000 fast_rewind top_translated d200">
              <p />
            </div>
          </div>
          <div className="right">
            <div className="pic relative no_overflow" data-scroll="" data-scroll-repeat="">
              <div className="mask_bottom no_overflow has_transition_1500_inout full full_height fast_rewind">
                <div className="t_container no_overflow has_transition_1500_inout full_height fast_rewind">
                  <img
                    alt="Why choose Ashoka Brothers"
                    src={munniImage("why-choose-us.jpg")}
                    width={2000}
                    height={1199}
                    className="fit has_transition_1500_inout scaledUp fast_rewind"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
        <KnowMore href="/about-us">know more</KnowMore>
        <div className="pic full relative no_overflow halfMargin">
          <video
            className="fit"
            src="/munni/video/why-choose-us.mp4"
            muted
            autoPlay
            loop
            playsInline
            preload="auto"
            data-scroll=""
            data-scroll-speed="-1"
          />
        </div>
      </div>
    </section>
  );
}
