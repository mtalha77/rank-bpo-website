import { ImagesSliderShower } from "@/components/shared/ImagesSliderShower";
import MediaPlayer from "@/components/shared/MediaPlayer";
import React from "react";

function PpcManagement({ showHeroSection = true }) {
  return (
    <>
      {/* hero section  */}
      {showHeroSection && <ImagesSliderShower title={"ppc management"} />}

      <div className="min-h-[70vh] p-10 grid grid-cols-1 md:grid-cols-[1fr_1fr]">
        {/* left side  */}
        <div
          className="w-full h-full flex items-center mt-4 p-10"
          data-aos="fade-right"
        >
          <MediaPlayer src={"/videos/PPC Analysis.json"} />
        </div>

        {/* right side  */}
        <div className="text-white/80 p-10" data-aos="fade-left">
          <span className="inline-block mt-5 text-2xl uppercase border-b-4 border-blue-600">
            PPC (Pay Per Click) Management
          </span>

          <h1
            data-aos="fade-down"
            className="mt-10 text-xl md:text-3xl font-extrabold"
          >
            Turn Clicks into Customers with Expert PPC Management
          </h1>

          <p
            data-aos="fade-up"
            className="mt-2 text-lg text-opacity-85 font_barlow text-justify custom_font"
          >
            Our PPC Management services aim to optimize your advertising budget
            and provide meaningful effects. Through our strategic method for
            managing pay-per-click (PPC) campaigns, we guarantee that your
            advertisements are displayed to the appropriate audience at the
            optimal time. We enhance your ads for increased click-through rates
            and improved conversion results on several platforms like Facebook
            Ads, Google Ads, Bing Ads, Tiktok Ads, and more.
          </p>
          <p
            data-aos="fade-up"
            className="mt-2 text-lg text-opacity-85 font_barlow text-justify custom_font"
          >
            From extensively researching keywords to creating engaging ad
            content and consistently monitoring performance, we guarantee that
            each campaign delivers tangible ROI. Our objective is to convert
            clicks into clients, aiding in the efficient expansion of your
            business. With our in-depth analytics and clear reporting, youll
            constantly know how your campaigns are doing.
          </p>
          <p
            data-aos="fade-up"
            className="mt-2 text-lg text-opacity-85 font_barlow text-justify custom_font"
          >
            We will assist you in boosting visibility and expanding with
            professionally handled PPC campaigns. Trust us and get ready to see
            results like you never have seen before.
          </p>
        </div>
      </div>
    </>
  );
}

export default PpcManagement;
