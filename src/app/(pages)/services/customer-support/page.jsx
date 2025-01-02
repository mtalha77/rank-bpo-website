import { ImagesSliderShower } from "@/components/shared/ImagesSliderShower";
import MediaPlayer from "@/components/shared/MediaPlayer";
import ServiceCard from "@/components/shared/ServiceCard";
import Link from "next/link";
import React from "react";

const services = [
  {
    image: "/images/services/Appointment-Setting.jpg",
    title: "Appointment Setting",
    description:
      "Boost your sales pipeline with efficient appointment-setting services, ensuring you secure more meetings and opportunities with greater efficiency.",
    url: "/services/customer-support/appointment-setting",
  },
  {
    image:
      "/images/services/Chat-Support.jpg",
    title: "Chat Support",
    description:
      "Enhance customer engagement through real-time chat support, delivering instant replies and personalized service.",
    url: "/services/customer-support/chat-support",
  },
  {
    image:
      "/images/services/CRM-Support.jpg",
    title: "CRM Support",
    description:
      "Maximize customer relationship management with our expert support, helping you simplify communications and boost customer satisfaction.",
    url: "/services/customer-support/crm-support",
  },
  {
    image: "/images/services/email-support.jpg",
    title: "Email Support",
    description:
      "Ensure prompt and professional customer service with organized email support, efficiently addressing inquiries and resolving issues.",
    url: "/services/customer-support/email-support",
  },
  {
    image:
      "/images/services/Front-Desk-Support.jpg",
    title: "Front Desk",
    description:
      "Create a strong first impression with our virtual front desk services, managing customer communications and appointments professionally.",
    url: "/services/customer-support/front-desk",
  },
  {
    image:
      "/images/services/Virtual-Assistant.jpg",
    title: "Virtual Assistant",
    description:
      "Boost efficiency and create more time by utilizing our virtual assistants to handle assignments, customer queries, and administrative tasks.",
    url: "/services/customer-support/virtual-assistant",
  },
  {
    image:
      "/images/services/Virtual-Order-Taker.jpg",
    title: "Virtual Order Taker",
    description:
      "Simplify your order management process with our virtual order takers, handling transactions accurately and enhancing customer satisfaction.",
    url: "/services/customer-support/virtual-order-taker",
  },
];

function CustomerSupportPage({ showHeroSection = true }) {
  return (
    <>
      {/* hero section  */}
      {showHeroSection && (
        <ImagesSliderShower title={"Customer Support Services"} />
      )}

      <div className="min-h-[70vh] py-10 grid grid-cols-1 md:grid-cols-[1fr_1fr]">
        {/* left side  */}
        <div className="w-full h-full flex items-center mt-4 p-10">
          <MediaPlayer src={"/videos/customer-support.json"} />
        </div>

        {/* right side  */}
        <div className="text-white/80 p-10">
          <span className="inline-block mt-5 text-2xl uppercase border-b-4 border-blue-600">
            Customer Support
          </span>

          <h1
            data-aos="fade-down"
            className="mt-10 text-xl md:text-3xl font-extrabold"
          >
            Build Stronger Relationships with Dedicated Customer Support
          </h1>

          <p
            data-aos="fade-up"
            className="mt-2 text-lg text-opacity-85 font_barlow text-justify"
          >
            At Rank BPO PVT LTD, we believe that providing excellent customer
            support is crucial for creating lasting connections with your
            customers. Our wide range of services is constructed to cater to
            your companys various requirements, guaranteeing that your customers
            get prompt and efficient support. We provide chat support for
            immediate interaction, enabling your clients to reach us instantly.
            Our email support system offers a professional and structured
            approach to managing inquiries and feedback, leading to improved
            customer satisfaction.
          </p>
          <p
            data-aos="fade-up"
            className="mt-2 text-lg text-opacity-85 font_barlow text-justify"
          >
            Furthermore, our CRM support guarantees that your customer
            relationship management procedures are smooth and effective. Our
            focus is on appointment setting and simplifying your scheduling
            requirements, while our virtual assistant services offer flexible
            help with different administrative duties. Our front desk services
            improve your professional image, while our virtual order-taker
            solutions aid in smooth transaction processes.
          </p>
          <p
            data-aos="fade-up"
            className="mt-2 text-lg text-opacity-85 font_barlow text-justify"
          >
            All of our customer support services will exceed your expectations.
            Allow Rank BPO PVT LTD to enhance your customer service experience
            and guarantee that your customers feel appreciated and supported.
          </p>
        </div>
      </div>

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

      <div className="grid grid-cols-1 md:grid-cols-3 2xl:grid-cols-4 gap-4 p-10">
        {services.map(({ image, title, description, url }) => (
          <ServiceCard
            key={title}
            image={image}
            title={title}
            description={description}
            url={url}
          />
        ))}
      </div>
    </>
  );
}

export default CustomerSupportPage;
