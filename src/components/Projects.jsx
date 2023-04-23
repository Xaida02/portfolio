import React, { useState, useRef, useEffect } from "react";
import SingleProject from "./SingleProject";
import projectsArray from "../projects";

const Projects = () => {
  const [isProjectClicked, setIsProjectClicked] = useState(false);
  const [showTitle, setShowTitle] = useState(false);
  const [showImage, setShowImage] = useState(false);

  const titleRef = useRef(null);
  const imageRef = useRef(null);

  const projectSectionRef = useRef(null);

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
    <section id="projects" className="min-h-screen p-8">
      {/* Paragraph and image */}
      <div className="w-full flex flex-col md:flex-row items-center justify-between md:p-12 p-4">
        <div
          ref={titleRef}
          className={`max-w-[600px] p-4 ${
            !showTitle ? "opacity-0" : "fade-in-second"
          }`}
        >
          <h2 className="text-redOrange text-[40px] max-w-fit font-bold tracking-wide">
            Projects
            <hr className="border-b-2 w-[120%] border-redOrange" />
          </h2>
          <p className="text-base md:text-lg mt-4">
            <strong>Check out some of the projects I've built!</strong> Using a
            variety of cutting-edge web development skills and tools, I've
            created innovative apps and websites that showcase my expertise and
            creativity. From dynamic front-end and even back-end incorporated
            via firebase! Each project I take on is a chance to learn and grow
            as a developer.
          </p>
        </div>
        <div
          ref={imageRef}
          className={`mt-12 md:mt-0 ${
            !showImage ? "opacity-0" : "fade-in-first"
          }`}
        >
          <img
            src="./assets/projects.png"
            className="filter contrast-150 w-[400px]"
            alt="Projects vector"
          />
        </div>
      </div>
      <hr className="w-[80%] mx-auto border-[1.3px] border-gray-400/50 my-8" />
      {/* Projects container */}
      <div
        ref={projectSectionRef}
        className={`flex flex-wrap relative duration-500 rounded-xl p-2 items-center ${
          !isProjectClicked ? "gap-y-3 justify-evenly" : "justify-center"
        }`}
      >
        {/*  BLurred lines */}
        <div className="absolute w-screen h-full top-0 left-0">
          <div className="bg-red-600 animate-blobing animation-delay-2000 rounded-full opacity-5 z-[-1] h-[100%] w-[400px] filter blur-[50px] top-0 absolute left-0 rotate-12"></div>
          <div className="bg-red-600 animate-blobing  rounded-full opacity-5 z-[-1] h-[100%] w-[400px] filter blur-[50px] top-0 absolute left-1/2 translate-x-1/2 rotate-12"></div>
          <div className="bg-red-600 animate-blobing animation-delay-4000 rounded-full opacity-5 z-[-1] h-[100%] w-[400px] filter blur-[50px] top-0 absolute right-0 rotate-12"></div>
        </div>
        {projectsArray.map((project, index) => (
          <SingleProject
            key={index}
            projectSectionRef={projectSectionRef}
            {...project}
            isProjectClicked={isProjectClicked}
            setIsProjectClicked={setIsProjectClicked}
          />
        ))}
      </div>
      <hr className="border-gray-400/50 w-[65%] pt-2 mx-auto" />
    </section>
  );
};

export default Projects;
