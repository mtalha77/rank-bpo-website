import { ImagesSliderShower } from "@/components/shared/ImagesSliderShower";
import MediaPlayer from "@/components/shared/MediaPlayer";
import React from "react";

function QualityAssurance({ showHeroSection = true }) {
  return (
    <>
      {/* hero section  */}
      {showHeroSection && <ImagesSliderShower title={"quality assurance"} />}

      <div className="min-h-[70vh] p-10 grid grid-cols-1 md:grid-cols-[1fr_1fr]">
        {/* left side  */}
        <div
          className="w-full h-full flex items-center mt-4 p-10"
          data-aos="fade-right"
        >
          <MediaPlayer src={"/videos/Quality Assurance.json"} />
        </div>

        {/* right side  */}
        <div className="text-white/80 p-10" data-aos="fade-left">
          <span className="inline-block mt-5 text-2xl uppercase border-b-4 border-blue-600">
            Quality Assurance
          </span>

          <h1
            data-aos="fade-down"
            className="mt-10 text-xl md:text-3xl font-extrabold"
          >
            Elevate Standards with Our Careful Quality Assurance Expertise
          </h1>

          <p
            data-aos="fade-up"
            className="mt-2 text-lg text-opacity-85 font_barlow text-justify custom_font"
          >
            Rank BPO PVT LTD believes that success is built on quality. Our
            quality assurance services guarantee that your products and
            solutions conform to the highest standards prior to market release.
            We apply a thorough QA plan customized to meet your exact
            requirements, starting from the initial testing stages up to the
            final rollout.
          </p>
          <p
            data-aos="fade-up"
            className="mt-2 text-lg text-opacity-85 font_barlow text-justify custom_font"
          >
            Our team uses the latest methods and tools for thorough testing,
            detecting, and solving possible problems at the beginning of the
            development phase. Regarding software, applications, or web
            solutions, our main priorities are functionality, performance,
            security, and user experience.
          </p>
          <p
            data-aos="fade-up"
            className="mt-2 text-lg text-opacity-85 font_barlow text-justify custom_font"
          >
            Committed to excellence, we guarantee that the final product will
            meet and exceed all expectations. Our quality assurance procedures
            lower expenses, decrease risks and improve overall satisfaction.
            Collaborate with us to incorporate quality assurance into your
            operations and set your business apart in a competitive market.
          </p>
        </div>
      </div>
    </>
  );
}

export default QualityAssurance;
