import React, { useState, useEffect, useRef } from "react";
import "./Hero.css";

const initialMousePosition = { x: -7, y: 0 };

const Hero = () => {
  const [showTitle, setShowTitle] = useState(false);
  const [showName, setShowName] = useState(false);
  const [showImage, setShowImage] = useState(false);

  const animatedContainerRef = useRef(null);
  const nameRef = useRef(null);
  const imageRef = useRef(null);

  useEffect(() => {
    const myObserver = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (
          entry.target === animatedContainerRef.current &&
          entry.isIntersecting
        ) {
          setShowTitle(true);
        } else if (entry.target === nameRef.current && entry.isIntersecting) {
          setShowName(true);
        } else if (entry.target === imageRef.current && entry.isIntersecting) {
          setShowImage(true);
        }
      });
    });

    myObserver.observe(animatedContainerRef.current);
    myObserver.observe(nameRef.current);
    myObserver.observe(imageRef.current);

    return () => {
      myObserver.disconnect();
    };
  });

  const [mousePos, setMousePos] = useState(initialMousePosition);

  const handleMouseMove = (e) => {
    let event = e.nativeEvent;
    const elem = animatedContainerRef.current;

    const newX = (event.offsetX / elem.clientWidth) * 100;
    const newY = (event.offsetY / elem.clientHeight) * 100;
    const newMousePos = {
      x: newX,
      y: newY,
    };

    setMousePos(newMousePos);
  };

  const handleMouseOut = () => {
    setMousePos(initialMousePosition);
  };

  return (
    <section className="mt-[100px] flex flex-col sm:flex-row items-center justify-around h-screen">
      {/* Title and name */}
      <div className="mt-8 md:my-0 p-8 flex flex-col items-center justify-center text-xl select-none relative z-[2]">
        <p
          className={`duration-[0.8s] text-gray-200 mb-2 font-inconsolata font-bold ${
            showTitle ? "" : "opacity-0 blur-sm text-gray-700"
          }`}
        >
          Hello there, i'm a{" "}
        </p>
        <div
          className={`relative flex justify-center font-outline items-center ${
            showTitle ? "fade-in-first" : "opacity-0"
          }`}
          ref={animatedContainerRef}
          onMouseMove={handleMouseMove}
          onMouseOut={handleMouseOut}
          style={{
            "--maskX": mousePos.x,
            "--maskY": mousePos.y,
          }}
        >
          <h1 className="cursor-pointer text-center text-3xl sm:text-4xl font-bold tracking-[3px] title relative text-redOrange3">
            <span className="text-redOrange3/70 mr-2">{"<>"}</span>
            Front End Developer
            <span className="text-redOrange3/70 ml-2">{"</>"}</span>
            {/* Animated title divs */}
            <div className="w-1/2 h-[135%] left-0 bg-jumpBlue3 rounded-2xl opacity-20 filter blur-2xl absolute mix-blend-multiply animate-blobing animation-delay-2000 opacity"></div>
            <div className="w-1/2 h-[135%] left-1/3 transform translate-x-1/2 bg-purple-900 redOrange rounded-2xl opacity-20 filter blur-2xl absolute mix-blend-multiply animate-blobing opacity"></div>
            <div className="w-1/2 h-[135%] right-0 bg-redOrange rounded-2xl opacity-20 filter blur-2xl absolute mix-blend-multiply animate-blobing animation-delay-4000 opacity"></div>
            {/* End of animated title divs */}
          </h1>
          <h1 className="cursor-pointer text-center text-3xl sm:text-4xl font-bold tracking-[3px] absolute title-clone text-redOrange2 ">
            <span className="text-redOrange2/70 mr-2">{"<>"}</span>
            Front End Developer
            <span className="text-redOrange2/70 ml-2">{"</>"}</span>
          </h1>
        </div>
        <h2
          ref={nameRef}
          className={`text-center text-xl sm:text-2xl font-bold tracking-[1.2px] mt-2 text-gray-300 font-outline pb-2 ${
            showName ? "fade-in-second opacity-75" : "opacity-0"
          }`}
        >
          Tobías Tejada
        </h2>
      </div>
      {/* Image and shape background */}
      <div
        ref={imageRef}
        className={`mt-12 md:my-0 relative p-8 hover:brightness-110 transition-all ${
          showImage ? "fade-in-first" : "opacity-0"
        }`}
      >
        <div className="flex flex-col w-[500px]">
          <img
            loading="lazy"
            src="./assets/me(test).png"
            className="w-full rounded-full -mt-24"
            alt="Tobias"
          />
          <div className="w-[55%] rounded-full h-[30px] bg-gray-900/90 -mt-8  blur-xl mx-auto"></div>
        </div>
        <div className="absolute w-72 h-72 rounded-full bg-redOrange mix-blend-multiply opacity-50 top-0 left-4 z-[-4] filter blur-xl animate-blobing"></div>
        <div className="absolute w-72 h-72 rounded-full bg-jumpBlue mix-blend-multiply opacity-50 top-0 right-4 z-[-5] filter blur-xl animate-blobing animation-delay-2000"></div>
        <div className="absolute w-72 h-72 rounded-full bg-purple-900 mix-blend-multiply opacity-50 bottom-8 left-1/4 z-[-4] filter blur-xl animate-blobing animation-delay-4000"></div>
      </div>
    </section>
  );
};

export default Hero;
