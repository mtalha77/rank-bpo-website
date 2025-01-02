import { ImagesSliderShower } from "@/components/shared/ImagesSliderShower";
import MediaPlayer from "@/components/shared/MediaPlayer";
import React from "react";

function VirtualAssistant({ showHeroSection = true }) {
  return (
    <>
      {/* hero section  */}
      {showHeroSection && <ImagesSliderShower title={"virtual assistant"} />}

      <div className="min-h-[70vh] p-10 grid grid-cols-1 md:grid-cols-[1fr_1fr]">
        {/* left side  */}
        <div
          className="w-full h-full flex items-center mt-4 p-10"
          data-aos="fade-right"
        >
          <MediaPlayer src={"/videos/Digital Helper.json"} />
        </div>

        {/* right side  */}
        <div className="text-white/80 p-10" data-aos="fade-left">
          <span className="inline-block mt-5 text-2xl uppercase border-b-4 border-blue-600">
            Virtual Assistant
          </span>

          <h1
            data-aos="fade-down"
            className="mt-10 text-xl md:text-3xl font-extrabold"
          >
            Seamless Customer Assistance from Our Expert Virtual Team
          </h1>

          <p
            data-aos="fade-up"
            className="mt-2 text-lg text-opacity-85 font_barlow text-justify custom_font"
          >
            Need someone to manage for you? Our virtual assistant services
            strengthen your business by offering specialized support that
            improves your customer engagement. Our capable virtual assistants
            act as an expansion of your team, interacting with your clients for
            you and guaranteeing they get timely and professional help.
          </p>
          <p
            data-aos="fade-up"
            className="mt-2 text-lg text-opacity-85 font_barlow text-justify custom_font"
          >
            Our virtual assistants are prepared to uphold your brands image with
            the highest level of professionalism and attention to detail.
            Whether we are handling inquiries, booking appointments, or sharing
            product details. We enhance customer satisfaction and foster trust
            and loyalty within your customer base.
          </p>
          <p
            data-aos="fade-up"
            className="mt-2 text-lg text-opacity-85 font_barlow text-justify custom_font"
          >
            You can dedicate your time to strategic projects and expansion by
            assigning us these crucial responsibilities. Our digital assistants
            smoothly blend into your work processes, enabling you to uphold
            top-notch service without needing extra personnel. Allow Rank BPO
            PVT LTD to improve your customer support through our specialized
            virtual assistant services, advancing your business success.
          </p>
        </div>
      </div>
    </>
  );
}

export default VirtualAssistant;
