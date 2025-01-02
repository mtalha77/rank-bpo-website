import { ImagesSliderShower } from "@/components/shared/ImagesSliderShower";
import MediaPlayer from "@/components/shared/MediaPlayer";
import React from "react";

function AppointmentSetting({ showHeroSection = true }) {
  return (
    <>
      {/* hero section  */}
      {showHeroSection && <ImagesSliderShower title={"appointment setting"} />}

      <div className="min-h-[70vh] p-10 grid grid-cols-1 md:grid-cols-[1fr_1fr]">
        {/* left side  */}
        <div
          className="w-full h-full flex items-center mt-4 p-10"
          data-aos="fade-right"
        >
          <MediaPlayer src={"/videos/Male Making Schedule.json"} />
        </div>

        {/* right side  */}
        <div className="text-white/80 p-10" data-aos="fade-left">
          <span className="inline-block mt-5 text-2xl uppercase border-b-4 border-blue-600">
            Appointment Setting
          </span>

          <h1
            data-aos="fade-down"
            className="mt-10 text-xl md:text-3xl font-extrabold"
          >
            Streamline Scheduling with Professional Appointment Setting Services
          </h1>

          <p
            data-aos="fade-up"
            className="mt-2 text-lg text-opacity-85 font_barlow text-justify custom_font"
          >
            Rank BPO PVT LTD offers appointment-setting services that aim to
            simplify your scheduling process and enhance your team&apos;s
            efficiency. We recognize the importance of efficiently handling
            appointments to maintain strong client relationships and ensure
            smooth business operations. Our skilled experts manage all aspects
            of scheduling appointments, from reaching out initially to following
            up so your team can concentrate on their strengths.
          </p>
          <p
            data-aos="fade-up"
            className="mt-2 text-lg text-opacity-85 font_barlow text-justify custom_font"
          >
            We employ effective methods to recognize possible leads and assess
            them, guaranteeing that you engage with the proper prospects. Our
            team takes care of scheduling, sending reminders, and rearranging
            appointments, all while upholding a professional and polite attitude
            that represents your brand. Utilizing our specialized
            appointment-setting services can boost your conversion rates,
            decrease no-shows, and improve customer satisfaction.
          </p>
          <p
            data-aos="fade-up"
            className="mt-2 text-lg text-opacity-85 font_barlow text-justify custom_font"
          >
            Allow us to handle the scheduling for you, enabling you to make the
            most of your time and resources for business expansion.
          </p>
        </div>
      </div>
    </>
  );
}

export default AppointmentSetting;
