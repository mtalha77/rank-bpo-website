"use client";
import Loader from "@/components/shared/Loader";
import HomePage from "./(pages)/home/page";
import AOS from "aos";
import "aos/dist/aos.css"; // Import the AOS CSS
import { useEffect, useState } from "react";
export default function Home() {
  const [showLoader, setShowLoader] = useState(true);

  // Show or hide loader based on showLoader state
  useEffect(() => {
    setTimeout(() => {
      setShowLoader(false);
    }, 1500);
  }, []);

  // Render loading bar if showLoader is true

  useEffect(() => {
    AOS.init({
      duration: 400, // Customize the animation duration
      once: true, // Whether animation should happen only once
    });
  }, []);

  if (showLoader) return <Loader />;
  return (
    <>
      <HomePage />
    </>
  );
}
