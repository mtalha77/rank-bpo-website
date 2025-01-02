import { ImagesSliderShower } from "@/components/shared/ImagesSliderShower";
import MediaPlayer from "@/components/shared/MediaPlayer";
import React from "react";

function SearchEngineMarketing({ showHeroSection = true }) {
  return (
    <>
      {/* hero section  */}
      {showHeroSection && (
        <ImagesSliderShower title={"search engine marketing"} />
      )}

      <div className="min-h-[70vh] p-10 grid grid-cols-1 md:grid-cols-[1fr_1fr]">
        {/* left side  */}
        <div
          className="w-full h-full flex items-center mt-4 p-10"
          data-aos="fade-right"
        >
          <MediaPlayer src={"/videos/Custom Coding.json"} />
        </div>

        {/* right side  */}
        <div className="text-white/80 p-10" data-aos="fade-left">
          <span className="inline-block mt-5 text-2xl uppercase border-b-4 border-blue-600">
            Search Engine Marketing
          </span>

          <h1
            data-aos="fade-down"
            className="mt-10 text-xl md:text-3xl font-extrabold"
          >
            Turn Clicks into Customers with Effective Search Engine Marketing
          </h1>

          <p
            data-aos="fade-up"
            className="mt-2 text-lg text-opacity-85 font_barlow text-justify custom_font"
          >
            Promote your business in search engine results, bringing in more
            traffic and boosting conversions. We offer search engine marketing
            strategies that are better than the best. By combining strategic
            campaigns with precise search engine marketing tactics, we assist
            you. Reaching your target audience when they are looking for your
            products or services is achievable now
          </p>
          <p
            data-aos="fade-up"
            className="mt-2 text-lg text-opacity-85 font_barlow text-justify custom_font"
          >
            Our main goal is to optimize your ad investment for the best return
            on investment (ROI) while providing concrete results. Our SEM
            strategies are customized for your business goals, covering keyword
            research, campaign management, and performance analysis. Whether
            your goal is to drive more traffic to your website, generate
            potential customer leads, or enhance sales, we develop effective
            advertising campaigns that make a significant difference.
          </p>
          <p
            data-aos="fade-up"
            className="mt-2 text-lg text-opacity-85 font_barlow text-justify custom_font"
          >
            We have a proven track record of exceeding the expectations of our
            customers and going beyond. Allow us to improve your online
            visibility and achieve significant results that are better than the
            best through our skilled SEM services.
          </p>
        </div>
      </div>
    </>
  );
}

export default SearchEngineMarketing;
