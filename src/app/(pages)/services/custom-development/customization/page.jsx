import { ImagesSliderShower } from "@/components/shared/ImagesSliderShower";
import MediaPlayer from "@/components/shared/MediaPlayer";
import React from "react";

function Customization({ showHeroSection = true }) {
  return (
    <>
      {/* hero section  */}
      {showHeroSection && <ImagesSliderShower title={"customization"} />}

      <div className="min-h-[70vh] p-10 grid grid-cols-1 md:grid-cols-[1fr_1fr]">
        {/* left side  */}
        <div
          className="w-full h-full flex items-center mt-4 p-10"
          data-aos="fade-right"
        >
          <MediaPlayer src={"/videos/Configuration.json"} />
        </div>

        {/* right side  */}
        <div className="text-white/80 p-10" data-aos="fade-left">
          <span className="inline-block mt-5 text-2xl uppercase border-b-4 border-blue-600">
            Customization
          </span>

          <h1
            data-aos="fade-down"
            className="mt-10 text-xl md:text-3xl font-extrabold"
          >
            Unlocking True Potentials with Our Advanced Customization Services
          </h1>

          <p
            data-aos="fade-up"
            className="mt-2 text-lg text-opacity-85 font_barlow text-justify custom_font"
          >
            We understand that a single size is not suitable for everyone. Our
            tailor-made customization services are specifically created to match
            your business&apos;s distinct requirements and goals. If you need
            customized software, tailored functionalities, or particular
            connections, our team is committed to creating solutions that
            improve your operational effectiveness.
          </p>
          <p
            data-aos="fade-up"
            className="mt-2 text-lg text-opacity-85 font_barlow text-justify custom_font"
          >
            We offer to customize your websites or apps according to the latest
            trends and make adjustments to them. Like, when you need your
            website optimized for SEO or some changes made. You can always count
            on us to fulfill all of your needs.
          </p>
          <p
            data-aos="fade-up"
            className="mt-2 text-lg text-opacity-85 font_barlow text-justify custom_font"
          >
            From the front-end interfaces to the back-end features, each part of
            our customization procedure is accurately carried out. Collaborate
            with us to maximize the capabilities of your website. Through our
            customized options, you have the ability to enhance efficiency,
            promote creativity, and provide excellent benefits for your clients.
          </p>
        </div>
      </div>
    </>
  );
}

export default Customization;
