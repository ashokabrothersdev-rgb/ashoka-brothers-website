import { KnowMore } from "./KnowMore";
import { munniImage } from "./data";

export function HomeBlogs() {
  return (
    <section id="homeVenues">
      <div className="ctaContainer full block relative">
        <div className="pic no_overflow relative">
          <img
            alt="Blogs from Ashoka Brothers"
            src={munniImage("blogs.jpg")}
            width={2000}
            height={1121}
            className="fit"
            data-scroll=""
            data-scroll-speed="-1"
          />
          <div className="veil" />
        </div>
        <div className="ctaOverlay">
          <div className="textContainer relative" data-scroll="" data-scroll-repeat="">
            <div className="highlight venueTitle cWhite no_overflow">
              <h2 className="block top_hidden has_transition_3000">Blogs</h2>
            </div>
            <div className="text venueText cWhite top_single has_transition_3000 d100">
              <p>
                Practical insights, product knowledge and industry updates
                from Ashoka Brothers, from choosing the right fastener to
                understanding applications and installation, to make every
                project more efficient and reliable.
              </p>
            </div>
            <KnowMore href="/blogs" className="full">
              know more
            </KnowMore>
          </div>
        </div>
      </div>
    </section>
  );
}
