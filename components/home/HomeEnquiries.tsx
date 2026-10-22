import { KnowMore } from "./KnowMore";
import { AutoplayVideo } from "@/components/shared/AutoplayVideo";
import { munniVideo } from "@/data/home-page.data";

export function HomeEnquiries() {
  return (
    <section id="homeDining">
      <div className="mainContainer">
        <div className="top no_overflow" data-scroll="" data-scroll-repeat="">
          <div className="left">
            <div className="highlight cBlue has_transition_3000 fast_rewind top_translated">
              <h2>Bulk and Dealer Enquiries</h2>
            </div>
            <div className="text special has_transition_3000 fast_rewind top_translated d100 doubleMargin">
              <p>
                Bulk quantities, custom sizes and finishes, and a dealer
                network built on consistent supply.
              </p>
            </div>
          </div>
        </div>
        <div className="mid doubleMargin relative">
          <div id="diningVideoTarget" data-scroll="" data-scroll-id="diningVideoTarget" />
          <div
            id="diningVideoSticky"
            data-scroll=""
            data-scroll-class="sticky"
            data-scroll-id="diningVideoSticky"
            data-scroll-sticky=""
            data-scroll-target="#diningVideoTarget"
          >
            <div
              id="diningVideo"
              className="relative no_overflow has_transition_800"
              data-scroll=""
              data-scroll-id="diningVideo"
            >
              <AutoplayVideo
                sources={munniVideo("bulk-enquiries")}
                className="fit has_transition_800"
                aria-hidden="true"
              />
            </div>
          </div>
        </div>
        <div className="right">
          <div className="text doubleMargin">
            <p>
              Need a specific thread, length, finish or packing size? We
              supply in volume, to specification, with clear lead times.
            </p>
          </div>
          <div className="text margin">
            <p>
              Dealers and distributors are welcome too. Share your
              requirement, whether a one-off order or ongoing supply, and our
              team will come back with a quote, stock availability and
              dispatch timelines.
            </p>
          </div>
          <KnowMore href="/contact-us" className="full">
            request a quote
          </KnowMore>
        </div>
      </div>
    </section>
  );
}
