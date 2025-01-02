import { ImagesSliderShower } from "@/components/shared/ImagesSliderShower";
import MediaPlayer from "@/components/shared/MediaPlayer";
import React from "react";

function ConversionRateOptimization({ showHeroSection = true }) {
  return (
    <>
      {/* hero section  */}
      {showHeroSection && (
        <ImagesSliderShower title={"conversion rate optimization"} />
      )}

      <div className="min-h-[70vh] p-10 grid grid-cols-1 md:grid-cols-[1fr_1fr]">
        {/* left side  */}
        <div
          className="w-full h-full flex items-center mt-4 p-10"
          data-aos="fade-right"
        >
          <MediaPlayer src={"/videos/Conversion Rate.json"} />
        </div>

        {/* right side  */}
        <div className="text-white/80 p-10" data-aos="fade-left">
          <span className="inline-block mt-5 text-2xl uppercase border-b-4 border-blue-600">
            Conversion Rate Optimization
          </span>

          <h1
            data-aos="fade-down"
            className="mt-10 text-xl md:text-3xl font-extrabold"
          >
            Convert More Visitors into Customers with Strategic CRO
          </h1>

          <p
            data-aos="fade-up"
            className="mt-2 text-lg text-opacity-85 font_barlow text-justify custom_font"
          >
            At Rank BPO PVT LTD, we provide specialized services in Conversion
            Rate Optimization (CRO) to assist in transforming website visitors
            into paying customers. Our main focus is to analyze how users
            behave, find obstacles to conversion, and use data to enhance your
            conversion rates. Suppose you are managing an e-commerce platform, a
            lead generation website, or a service-focused site. In that case,
            our customized approaches guarantee that your website is not only
            drawing in visitors but also turning those visitors into valuable
            customers.
          </p>
          <p
            data-aos="fade-up"
            className="mt-2 text-lg text-opacity-85 font_barlow text-justify custom_font"
          >
            Our CRO process includes optimizing landing pages, testing different
            design elements, and refining calls to action to ensure maximum
            engagement. We enhance user experience by streamlining navigation,
            accelerating load times, and ensuring website compatibility on all
            devices.
          </p>
          <p
            data-aos="fade-up"
            className="mt-2 text-lg text-opacity-85 font_barlow text-justify custom_font"
          >
            We assist in achieving sustainable growth and enhancing ROI by
            continuously monitoring performance and adapting strategies. Allow
            us to increase conversions by turning additional clicks into value
            for your business.
          </p>
        </div>
      </div>
    </>
  );
}

export default ConversionRateOptimization;
