import React, { useEffect, useState, useRef } from "react";
import Typed from "react-typed";
import { AiFillGithub } from "react-icons/ai";
import { SiTailwindcss, SiFirebase, SiLinux } from "react-icons/si";

const Skills = () => {
  const [showTitle, setShowTitle] = useState(false);
  const [showImage, setShowImage] = useState(false);

  const titleRef = useRef(null);
  const imageRef = useRef(null);

  useEffect(() => {
    const myObserver = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.target === titleRef.current && entry.isIntersecting) {
          setShowTitle(true);
        } else if (entry.target === imageRef.current && entry.isIntersecting) {
          setShowImage(true);
        }
      });
    });

    myObserver.observe(titleRef.current);
    myObserver.observe(imageRef.current);

    return () => {
      myObserver.disconnect();
    };
  });

  return (
    <section id="skills" className="mt-12 md:mt-[200px] p-8">
      {/* Paragraph and image */}
      <div className="w-full flex flex-col md:flex-row items-center justify-between md:p-12 p-4">
        {" "}
        <div className="flex justify-center flex-col items-center mb-4 md:mb-0">
          {/* Image div */}
          <div
            ref={imageRef}
            className={`text-gray-200 max-w-[600px] mx-auto flex justify-center items-center relative ${
              !showImage ? "opacity-0" : "fade-in-second"
            }`}
          >
            <img
              src="./assets/skills.png"
              className="object-cover filter contrast-150 opacity-80 w-[400px]"
              alt="Skills vector"
            />
            <div className="animate-blobing left-1/2 absolute bg-redOrange2 filter blur-2xl w-[150px] h-[150px] z-[-1] opacity-25"></div>
            <div className="animate-blobing animation-delay-4000 absolute bg-redOrange2 filter blur-2xl w-[150px] h-[150px] z-[-1] opacity-50"></div>
            <div className="animate-blobing animation-delay-2000 right-1/2 absolute bg-redOrange2 filter blur-2xl w-[150px] h-[150px] z-[-1] opacity-25"></div>
          </div>
          <div className="flex">
            <h1 className="md:text-4xl sm:text-3xl text-2xl mr-2">
              Code with{" "}
            </h1>
            <p className="md:text-4xl sm:text-3xl text-2xl  font-bold">
              {" "}
              <Typed
                strings={["React.js", "javaScript", "HTML", "CSS"]}
                loop
                typeSpeed={140}
                backSpeed={1000}
              />
            </p>
          </div>
        </div>
        <div
          ref={titleRef}
          className={`max-w-[600px] p-4 ${
            !showTitle ? "opacity-0" : "fade-in-first"
          }`}
        >
          <h2 className="text-redOrange text-[40px] max-w-fit font-bold tracking-wide">
            Skills
            <hr className="border-b-2 w-[120%] border-redOrange" />
          </h2>
          <p className="text-base md:text-lg mt-4">
            <strong>
              I specialize in creating stunning user interfaces using today's
              most popular front-end framework, React.js.
            </strong>{" "}
            With my expertise in interactive design and logic-based styling, I
            am able to create engaging and intuitive apps that keep users coming
            back for more. Additionally, I leverage the power of tailwind.css to
            design faster and achieve a consistent and responsive website,
            ensuring that your app looks great on any device.
          </p>
        </div>
      </div>
      {/* Cards container */}
      <div className="relative w-[20%] h-[70vh] md:h-screen mx-auto flex items-center justify-center group">
        {/* Little card */}
        <div className="flex items-center justify-center absolute rounded-xl aspect-[5/7] transform-gpu transition-card w-[12vmin] shadow-sm bg-gradient-to-t from-black to-[#101010b5] text-redOrange3 group-hover:translate-x-[200%] group-hover:translate-y-[-125%] group-hover:rotate-[-15deg]">
          {" "}
          <SiLinux size={70} />
        </div>
        {/* Big card */}
        <div className="aspect-[5/7] transform-gpu transition-card w-[30vmin] rounded-xl absolute shadow-xl shadow-black cursor-pointer hover:brightness-110 -translate-x-[10%] -rotate-1 group-hover:translate-x-[-75%] group-hover:translate-y-[16%] group-hover:rotate-[-24deg]">
          <img
            src="./assets/cardLogos/html.png"
            className="w-full h-full object-cover rounded-xl"
            alt="/"
          />
        </div>
        {/* Little card */}
        <div className="flex items-center justify-center absolute rounded-xl aspect-[5/7] transform-gpu transition-card w-[12vmin] shadow-sm bg-gradient-to-t from-black to-[#101010b5] text-cyan-500 group-hover:translate-x-[200%] group-hover:translate-y-[220%] group-hover:rotate-[15deg]">
          <AiFillGithub size={70} />
        </div>
        {/* Big card */}
        <div className="aspect-[5/7] transform-gpu transition-card w-[30vmin] rounded-xl absolute shadow-xl shadow-black cursor-pointer hover:brightness-110 rotate-2 group-hover:translate-x-[-25%] group-hover:translate-y-[8%] group-hover:rotate-[-8deg]">
          <img
            src="./assets/cardLogos/css.png"
            className="w-full h-full object-cover rounded-xl"
            alt="/"
          />
        </div>
        {/* Little card */}
        <div className="flex items-center justify-center absolute rounded-xl aspect-[5/7] transform-gpu transition-card w-[12vmin] shadow-sm bg-gradient-to-t from-black to-[#101010b5] text-cyan-500 group-hover:translate-x-[-200%] group-hover:translate-y-[-135%] group-hover:rotate-[15deg]">
          <SiTailwindcss size={70} />
        </div>
        {/* Big card */}
        <div className="aspect-[5/7] transform-gpu transition-card w-[30vmin] rounded-xl absolute shadow-xl shadow-black cursor-pointer hover:brightness-110 -translate-x-[6%] group-hover:translate-x-[25%] group-hover:translate-y-[8%] group-hover:rotate-[8deg]">
          <img
            src="./assets/cardLogos/javaScript.png"
            className="w-full h-full object-cover rounded-xl"
            alt="/"
          />
        </div>
        {/* Little card */}
        <div className="flex items-center justify-center absolute rounded-xl aspect-[5/7] transform-gpu transition-card w-[12vmin] shadow-sm bg-gradient-to-t from-black to-[#101010b5] text-redOrange3 group-hover:translate-x-[-200%] group-hover:translate-y-[220%] group-hover:rotate-[-15deg]">
          <SiFirebase size={68} />
        </div>
        {/* Big card */}
        <div className="aspect-[5/7] transform-gpu transition-card w-[30vmin] rounded-xl absolute shadow-xl shadow-black cursor-pointer hover:brightness-110 translate-x-[10%] translate-y-[3%] rotate-[5deg] group-hover:translate-x-[75%] group-hover:translate-y-[16%] group-hover:rotate-[24deg]">
          <img
            src="./assets/cardLogos/react.png"
            className="w-full h-full object-cover rounded-xl"
            alt="/"
          />
        </div>
      </div>
    </section>
  );
};

export default Skills;
