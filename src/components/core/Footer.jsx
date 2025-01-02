"use client";
import Link from "next/link";
import React from "react";
import { MdOutlinePhoneInTalk, MdOutlineMailOutline } from "react-icons/md";
import { IoLocationOutline } from "react-icons/io5";
import { RiInstagramFill } from "react-icons/ri";
import { CiFacebook } from "react-icons/ci";
import { IoLogoInstagram } from "react-icons/io5";
import { AiOutlineYoutube } from "react-icons/ai";
import { motion } from "framer-motion";
import {
  FaCarSide,
  FaFacebook,
  FaLinkedin,
  FaPinterest,
  FaTiktok,
  FaYoutube,
} from "react-icons/fa6";

const quickLinks = [
  {
    title: "Home",
    url: "/",
  },
  {
    title: "Careers",
    url: "/careers",
  },
  {
    title: "Services",
    url: "/services",
  },
  {
    title: "About Us",
    url: "/about-us",
  },
  {
    title: "Contact Us",
    url: "/contact-us",
  },
];

const services = [
  {
    title: "Custom Development",
    url: "/services/custom-development",
  },
  {
    title: "Digital Marketing",
    url: "/services/digital-marketing",
  },
  {
    title: "Customer Support",
    url: "/services/customer-support",
  },
];

function Footer() {
  return (
    <>
      <footer className="footer bg-base-200 text-base-content p-10 md:grid md:grid-cols-4 font_barlow">
        <aside data-aos="fade-up">
          <div className="flex-shrink-0 w-40">
            <Link href="/" className="ms-0 h-8 md:h-12 ">
              <img
                src="/images/Rank-BPO-PVT-LTD-LOGO.png"
                alt="Company Logo"
                className="w-full h-full object-contain"
              />
            </Link>
          </div>

          <p className="text-justify">
            Rank BPO is a top-ranked digital marketing agency, expertly
            maximizing the income streams of our customers within Pakistan and
            throughout the globe. In our hands lies the power to grow your
            business!
          </p>

          {/* social media link  */}
          <div className="flex justify-center items-center gap-x-2 ">
            <Link target="_blank" href={"https://www.facebook.com/rankbpo/"}>
              <FaFacebook className="text-3xl text-[#005BEA] hover:scale-110 hover:font-semibold transition-all" />
            </Link>
            <Link target="_blank" href={"https://www.instagram.com/rankbpo/"}>
              <RiInstagramFill className="text-3xl text-[#005BEA] hover:scale-110 hover:font-semibold transition-all" />
            </Link>
            <Link target="_blank" href={"https://www.youtube.com/@RankBPO"}>
              <FaYoutube className="text-4xl text-[#005BEA] hover:scale-110 hover:font-semibold transition-all" />
            </Link>
            <Link target="_blank"
              href={
                "https://www.linkedin.com/company/80291042/admin/feed/posts/"
              }
            >
              <FaLinkedin className="text-3xl text-[#005BEA] hover:scale-110 hover:font-semibold transition-all" />
            </Link>
            <Link target="_blank" href={"https://www.pinterest.com/rankbpo1/"}>
              <FaPinterest className="text-3xl text-[#005BEA] hover:scale-110 hover:font-semibold transition-all" />
            </Link>
            <Link target="_blank" href={"https://www.tiktok.com/@rankbpo"}>
              <FaTiktok className="text-3xl text-[#005BEA] hover:scale-110 hover:font-semibold transition-all" />
            </Link>
          </div>
        </aside>

        {/* Quick link  */}
        <nav className="md:ms-10" data-aos="fade-up">
          <h6 className="footer-title text-[#005BEA]">Quick Links</h6>

          {quickLinks.map((link, index) => (
            <Link
              key={index}
              href={link.url}
              className="text-decoration-none hover:text-[#005BEA] hover:font-semibold"
            >
              {link.title}
            </Link>
          ))}
        </nav>

        {/* service  */}
        <nav data-aos="fade-up">
          <h6 className="footer-title text-[#005BEA] z-10">Services</h6>
          {services.map((link, index) => (
            <Link
              key={index}
              href={link.url}
              className="text-decoration-none hover:text-[#005BEA] hover:font-semibold"
            >
              {link.title}
            </Link>
          ))}
        </nav>

        {/* contact us  */}
        <nav data-aos="fade-up">
          <h6 className="footer-title text-[#005BEA]">Contact Us</h6>
          <div className="cursor-pointer">
            <div className="flex gap-x-2 items-center">
              <MdOutlinePhoneInTalk className="text-lg  text-blue-600" />
              <p>03000332782</p>
            </div>
            <div className="flex gap-x-2 items-center">
              <MdOutlinePhoneInTalk className="text-lg  text-blue-600" />
              <p>04232322782</p>
            </div>
          </div>
          <div className="cursor-pointer">
            <div className="flex gap-x-2 items-center">
              <MdOutlineMailOutline className="text-lg  text-blue-600" />
              <p>info@rankbpo.com</p>
            </div>
          </div>
          <div className="cursor-pointer">
            <div className="flex gap-x-2 items-center ">
              <IoLocationOutline className="text-lg text-blue-600" />
              <p>Plot# 90, Block D2, Phase 1 Johar Town, Lahore</p>
            </div>
          </div>
        </nav>
      </footer>

      <footer
        data-aos="fade-right"
        className="footer bg-base-200 text-base-content flex justify-center p-5"
      >
        <span className="text-lg font-semibold text-blue-600">
          © 2021-25 Rank BPO . All Rights Reserved.
        </span>
      </footer>
    </>
  );
}

export default Footer;
