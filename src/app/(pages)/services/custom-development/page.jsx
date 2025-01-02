import { ImagesSliderShower } from "@/components/shared/ImagesSliderShower";
import MediaPlayer from "@/components/shared/MediaPlayer";
import ServiceCard from "@/components/shared/ServiceCard";
import Link from "next/link";
import React from "react";

const services = [
  {
    image: "/images/services/Web-Development.jpg",
    title: "Web Development",
    description:
      "Creating dynamic, highly responsive websites that actively engage users and optimize performance across all devices.",
    url: "/services/custom-development/web-development",
  },
  {
    image:
      "/images/services/Mobile-Development.jpg",
    title: "Mobile Development",
    description:
      "Developing innovative mobile applications that provide seamless user experiences across iOS and Android platforms",
    url: "/services/custom-development/mobile-development",
  },
  {
    image:
      "/images/services/CRM-Development.jpg",
    title: "CRM Development",
    description:
      "Making custom CRM systems to streamline customer data, improve interaction tracking, and boost client relationships.",
    url: "/services/custom-development/crm-development",
  },
  {
    image: "/images/services/Quality-Assurance.jpg",
    title: "Quality Assurance",
    description:
      "Ensure perfect performance and functionality with rigorous quality assurance testing tailored to your exact needs.",
    url: "/services/custom-development/quality-assurance",
  },
  {
    image:
      "/images/services/Automation.jpg",
    title: "Automation",
    description:
      "Increase productivity by automating several repetitive tasks and optimizing workflows with custom automation solutions.",
    url: "/services/custom-development/automation",
  },
  {
    image:
      "/images/services/Customization.jpg",
    title: "Customization",
    description:
      "Modify and enhance existing software or websites to better align with your unique business processes and operational goals.",
    url: "/services/custom-development/customization",
  },
];

function CustomDevelopmentPage({ showHeroSection = true }) {
  return (
    <>
      {/* hero section  */}
      {showHeroSection && (
        <ImagesSliderShower title={"Custom Development Services"} />
      )}

      <div className="min-h-[70vh] py-10 grid grid-cols-1 md:grid-cols-[1fr_1fr]">
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
            Custom Development Services
          </span>

          <h1
            data-aos="fade-down"
            className="mt-10 text-xl md:text-3xl font-extrabold"
          >
            Innovative Custom Solutions Tailored to Fit Your Business Needs
          </h1>

          <p
            data-aos="fade-up"
            className="mt-2 text-lg text-opacity-85 text-justify custom_font"
          >
            At Rank BPO PVT LTD, we dive deep into the world of custom
            development, offering solutions that truly reflect the unique vision
            of your business. Our web development team can craft dynamic
            websites that are not just visually stunning but also super
            responsive and user-friendly. When it comes to mobile development,
            we ensure your applications shine across all devices, enhancing user
            engagement.
          </p>
          <p
            data-aos="fade-up"
            className="mt-2 text-lg text-opacity-85 text-justify custom_font"
          >
            But we don’t just stop there. Our CRM development services empower
            you to manage customer relationships like never before. Quality
            assurance? It’s very important! In our custom development approach,
            every project undergoes rigorous testing to guarantee excellence.
          </p>
          <p
            data-aos="fade-up"
            className="mt-2 text-lg text-opacity-85 text-justify custom_font"
          >
            Customization is our motto. Whether its tailoring features to meet
            your specific needs or integrating automation to streamline
            workflows, we are here to innovate. Get ready to turn your concepts
            into reality. Elevate your business and drive success with our
            comprehensive custom development services.
          </p>
        </div>
      </div>

      <div>
        {/* service cards  */}
        {showHeroSection ? (
          <div className="flex flex-col items-center gap-2 pb-5">
            <span className="inline-block mt-20 text-2xl uppercase text-blue-600">
              Our Services
            </span>

            <p
              data-aos="fade-up"
              className="text-3xl md:text-4xl font-extrabold text-md text-opacity-85 font_barlow text-center md:w-[35%]"
            >
              Explore Our Services
            </p>
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-[3fr_1fr]">
            <div className="text-black/90 flex flex-col items-start pl-10 gap-2 pb-5">
              <span className="inline-block mt-14 text-2xl uppercase text-red-600">
                Our Services
              </span>

              <p
                data-aos="fade-up"
                className="text-3xl md:text-4xl font-extrabold text-md text-opacity-85 font_barlow text-center md:w-[35%]"
              >
                Explore Our Services
              </p>
            </div>

            <div className="flex justify-end items-center pr-10">
              <Link
                href={"/services"}
                className="btn bg-blue-600 border-0 text-white hover:bg-red-600 hover:scale-110"
                data-aos="fade-left"
              >
                All Services
              </Link>
            </div>
          </div>
        )}

        <div className=" grid grid-cols-1 md:grid-cols-3 2xl:grid-cols-4 gap-4 p-10">
          {services.map(({ image, title, description, url, iconVideoSrc }) => (
            <ServiceCard
              key={title}
              image={image}
              title={title}
              description={description}
              url={url}
            />
          ))}
        </div>
      </div>
    </>
  );
}

export default CustomDevelopmentPage;
