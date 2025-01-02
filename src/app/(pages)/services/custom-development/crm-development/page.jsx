import { ImagesSliderShower } from "@/components/shared/ImagesSliderShower";
import MediaPlayer from "@/components/shared/MediaPlayer";
import React from "react";

function CrmDevelopment({ showHeroSection = true }) {
  return (
    <>
      {/* hero section  */}
      {showHeroSection && <ImagesSliderShower title={"crm development"} />}

      <div className="min-h-[70vh] p-10 grid grid-cols-1 md:grid-cols-[1fr_1fr]">
        {/* left side  */}
        <div
          className="w-full h-full flex items-center mt-4 p-10"
          data-aos="fade-right"
        >
          <MediaPlayer src={"/videos/Crm Server.json"} />
        </div>

        {/* right side  */}
        <div className="text-white/80 p-10" data-aos="fade-left">
          <span className="inline-block mt-5 text-2xl uppercase border-b-4 border-blue-600">
            CRM Development
          </span>

          <h1
            data-aos="fade-down"
            className="mt-10 text-xl md:text-3xl font-extrabold"
          >
            Building Stronger Relationships Through Tailored CRM Development
          </h1>

          <p
            data-aos="fade-up"
            className="mt-2 text-lg text-opacity-85 font_barlow text-justify custom_font"
          >
            We know that successful management of customer relationships is
            crucial for the success of any business. Our services for developing
            CRM aim to make your processes more efficient, improve
            communication, and build better connections with your customers. We
            develop personalized CRM solutions tailored to your specific
            workflow, enabling you to efficiently handle customer interactions.
          </p>
          <p
            data-aos="fade-up"
            className="mt-2 text-lg text-opacity-85 font_barlow text-justify custom_font"
          >
            Our strategy integrates strong capabilities with intuitive designs,
            enabling your team to concentrate on the most important task of
            creating enduring relationships with customers. Our customized
            solutions will enhance your business operations by several degrees.
          </p>
          <p
            data-aos="fade-up"
            className="mt-2 text-lg text-opacity-85 font_barlow text-justify custom_font"
          >
            We put a strong focus on scalability and security, guaranteeing that
            your CRM system will expand with your business as it grows.
            Collaborate with us to create a strong CRM platform that caters to
            your present requirements and is also flexible enough to handle
            upcoming obstacles. Let&apos;s enhance your customer connections and
            propel your business ahead!
          </p>
        </div>
      </div>
    </>
  );
}

export default CrmDevelopment;
