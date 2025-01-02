import React from "react";
import { HeroParallax } from "../ui/hero-parallax";

function HeroSection() {
  return (
    <div className="overflow-x-hidden pb-10">
      <HeroParallax products={products} />
    </div>
  );
}

export default HeroSection;

export const products = [
  {
    title: "Custom Development",
    link: "/services/custom-development",
    thumbnail: "/images/services/Custom-Development.jpg",
  },
  {
    title: "Digital Marketing",
    link: "/services/digital-marketing",
    thumbnail: "/images/services/Digital-Marketing.jpg",
  },
  {
    title: "Website Development",
    link: "/services/custom-development/web-development",
    thumbnail: "/images/services/Web-Development.jpg",
  },
  {
    title: "Customer Support",
    link: "/services/customer-support",
    thumbnail: "/images/services/Customer-Support.jpg",
  },

  {
    title: "Automation",
    link: "/services/custom-development/automation",
    thumbnail: "/images/services/Automation.jpg",
  },

  {
    title: " ",
    link: "#",
    thumbnail: "/images/services/Search-Engine-Marketing-oo.jpg",
  },
  {
    title: "CRM Development",
    link: "/services/custom-development/crm-development",
    thumbnail: "/images/services/CRM-Development.jpg",
  },
  {
    title: "Mobile Development",
    link: "/services/custom-development/mobile-development",
    thumbnail: "/images/services/Mobile-Development.jpg",
  },
  {
    title: "E-Commerce Marketing",
    link: "/services/digital-marketing/e-commerce-marketing",
    thumbnail: "/images/services/E-Commerce-Marketing.jpg",
  },
  {
    title: "Pay Per Click Management",
    link: "/services/digital-marketing/ppc-management",
    thumbnail: "/images/services/Pay-Per-Click-(PPC)-Management.jpg",
  },
  {
    title: "YouTube Channel Marketing",
    link: "/services/digital-marketing/youtube-channel",
    thumbnail: "/images/services/YouTube-Channel-Marketing.jpg",
  },

  {
    title: "App Store Optimization & Marketing",
    link: "services/digital-marketing/app-store-optimization-and-marketing",
    thumbnail: "/images/services/App-Store-Optimization-and-Marketing.jpg",
  },
  {
    title: "Quality Assurance",
    link: "/services/custom-development/quality-assurance",
    thumbnail: "/images/services/Quality-Assurance.jpg",
  },
  {
    title: "Social Media Marketing",
    link: "/services/digital-marketing/social-media-marketing",
    thumbnail: "/images/services/Social-Media-Marketing.jpg",
  },
  {
    title: "CRM Support",
    link: "/services/customer-support/crm-support",
    thumbnail: "/images/services/CRM-Support.jpg",
  },
];
