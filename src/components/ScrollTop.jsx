import React, { useState, useEffect } from "react";
import { BsChevronCompactUp } from "react-icons/bs";

const ScrollTop = () => {
  const [showBackToTopButton, setShowBackToTopButton] = useState(false);

  const handleScroll = () => {
    if (window.scrollY > 500) {
      setShowBackToTopButton(true);
    } else {
      setShowBackToTopButton(false);
    }
  };

  const scrollTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <button
      onClick={scrollTop}
      className={`text-gray-300 flex justify-center items-center animate-bounce fixed bottom-[10px] right-[25px] w-[30px] h-[30px] shadow-lg sm:w-[35px] sm:h-[35px] duration-500 ${
        showBackToTopButton ? "rounded bg-[#151515]" : "bg-[#1b1b1b]"
      }`}
      style={{
        visibility: showBackToTopButton ? "visible" : "hidden",
        opacity: showBackToTopButton ? "1" : "0",
      }}
    >
      <BsChevronCompactUp
        size={30}
        className={`w-full h-full duration-[0.8s] ${
          showBackToTopButton
            ? "scale-100 fill-gray-300 rounded-none"
            : "scale-[0.1] bg-hboPurple4 rounded-full"
        }`}
      />
    </button>
  );
};

export default ScrollTop;
