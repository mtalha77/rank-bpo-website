import { ImagesSliderShower } from "@/components/shared/ImagesSliderShower";
import MediaPlayer from "@/components/shared/MediaPlayer";
import React from "react";

function FrontDesk({ showHeroSection = true }) {
  return (
    <>
      {/* hero section  */}
      {showHeroSection && <ImagesSliderShower title={"front desk"} />}

      <div className="min-h-[70vh] p-10 grid grid-cols-1 md:grid-cols-[1fr_1fr]">
        {/* left side  */}
        <div
          className="w-full h-full flex items-center mt-4 p-10"
          data-aos="fade-right"
        >
          <MediaPlayer src={"/videos/Sales Counter.json"} />
        </div>

        {/* right side  */}
        <div className="text-white/80 p-10" data-aos="fade-left">
          <span className="inline-block mt-5 text-2xl uppercase border-b-4 border-blue-600">
            Front Desk
          </span>

          <h1
            data-aos="fade-down"
            className="mt-10 text-xl md:text-3xl font-extrabold"
          >
            Dedicated Front Desk Support to Enhance Client Relations
          </h1>

          <p
            data-aos="fade-up"
            className="mt-2 text-lg text-opacity-85 font_barlow text-justify custom_font"
          >
            Our front desk services offer a professional virtual reception for
            your business, which acts as the first point of contact for your
            customers. We recognize the importance of a pleasant and effective
            front desk encounter in creating trust and forming solid
            relationships with your customers
          </p>
          <p
            data-aos="fade-up"
            className="mt-2 text-lg text-opacity-85 font_barlow text-justify custom_font"
          >
            Our trained front desk specialists can handle inquiries, book
            appointments, and offer excellent customer service no matter where
            they are located. We proficiently embody your brand, guaranteeing
            that each interaction is polite and prompt, whether it involves
            answering calls, replying to emails, or assisting with reservations.
          </p>
          <p
            data-aos="fade-up"
            className="mt-2 text-lg text-opacity-85 font_barlow text-justify custom_font"
          >
            By merging our receptionist services, you can improve customer
            delight, simplify communication, and guarantee no question will be
            left unaddressed. Trust us for dependable outsourcing solutions that
            improve your professionalism and retain client interaction.
          </p>
        </div>
      </div>
    </>
  );
}

export default FrontDesk;
