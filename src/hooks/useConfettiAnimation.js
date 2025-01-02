import { useEffect, useState } from "react";

const useConfettiAnimation = () => {
  const [windowDimensions, setWindowDimensions] = useState({ width: 0, height: 0 });
  const [isAnimating, setIsAnimating] = useState(false);

  useEffect(() => {
    if (typeof window !== "undefined") {
      const handleResize = () => {
        setWindowDimensions({
          width: window.innerWidth,
          height: window.innerHeight,
        });
      };

      handleResize(); // Set initial dimensions
      window.addEventListener("resize", handleResize);
      return () => window.removeEventListener("resize", handleResize);
    }
  }, []);

  const startAnimation = () => {
    setIsAnimating(true);
    setTimeout(() => setIsAnimating(false), 5000); // Stop animation after 5 seconds
  };

  return { ...windowDimensions, isAnimating, startAnimation };
};

export default useConfettiAnimation;