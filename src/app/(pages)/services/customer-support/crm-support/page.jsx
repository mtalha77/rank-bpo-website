import { ImagesSliderShower } from "@/components/shared/ImagesSliderShower";
import MediaPlayer from "@/components/shared/MediaPlayer";
import React from "react";

function CrmSupport({ showHeroSection = true }) {
  return (
    <>
      {/* hero section  */}
      {showHeroSection && <ImagesSliderShower title={"crm support"} />}

      <div className="min-h-[70vh] p-10 grid grid-cols-1 md:grid-cols-[1fr_1fr]">
        {/* left side  */}
        <div
          className="w-full h-full flex items-center mt-4 p-10"
          data-aos="fade-right"
        >
          <MediaPlayer src={"/videos/project-management.json"} />
        </div>

        {/* right side  */}
        <div className="text-white/80 p-10" data-aos="fade-left">
          <span className="inline-block mt-5 text-2xl uppercase border-b-4 border-blue-600">
            CRM Support
          </span>

          <h1
            data-aos="fade-down"
            className="mt-10 text-xl md:text-3xl font-extrabold"
          >
            Customer Relationship Made Easy with Expert CRM Support Services
          </h1>

          <p
            data-aos="fade-up"
            className="mt-2 text-lg text-opacity-85 font_barlow text-justify custom_font"
          >
            When you need someone to deal with your customer relations. We offer
            expert CRM support services that aim to enhance your customer
            relationship management system so that your business can efficiently
            monitor, control, and interact with customers. We recognize the
            significance of having precise and current information readily
            available. This is why our team offers personalized and thorough
            assistance for your particular CRM system.
          </p>
          <p
            data-aos="fade-up"
            className="mt-2 text-lg text-opacity-85 font_barlow text-justify custom_font"
          >
            Our professionals aid in entering, maintaining, and organizing data,
            assisting in efficient customer information management. We provide
            training and troubleshooting to help your team fully utilize your
            CRM system. By utilizing our CRM assistance, you can enhance
            communication, simplify procedures, and boost customer satisfaction.
          </p>
          <p
            data-aos="fade-up"
            className="mt-2 text-lg text-opacity-85 font_barlow text-justify custom_font"
          >
            Through our committed assistance, you will acquire important
            knowledge about customer behavior, enabling you to customize your
            marketing tactics and cultivate more robust connections. Rely on us
            to enhance your customer relation management experience and boost
            business growth with successful customer interaction.
          </p>
        </div>
      </div>
    </>
  );
}

export default CrmSupport;
