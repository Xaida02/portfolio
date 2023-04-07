import React, { useState, useEffect } from "react";
import { AiOutlineClose } from "react-icons/ai";
import { BsAppIndicator } from "react-icons/bs";
import { FaCode } from "react-icons/fa";

const SingleProject = ({
  name,
  toolsUsedIcons,
  id,
  img,
  desc,
  codeLink,
  pageLink,
  isProjectClicked,
  setIsProjectClicked,
  projectSectionRef,
}) => {
  const [showProject, setShowProject] = useState(false);

  const handleScrollPositon = () => {
    const projectPosition = projectSectionRef.current.offsetHeight;
    window.scrollTo({
      top: projectPosition,
      behavior: "smooth",
    });
  };

  const handleOpen = () => {
    if (!isProjectClicked) {
      setShowProject(true);
      setIsProjectClicked(true);
    }
    handleScrollPositon();
  };

  const handleClose = () => {
    setShowProject(false);
    setIsProjectClicked(false);
    handleScrollPositon();
  };

  // COLORS OF THE SINGLE PROJECT BOX: bg-gradient from-[#1b1b1b] to-[#090909] REMEMBER TO ADD

  return (
    <>
      <div
        className={`relative rounded-xl group shadow-lg bg-gradient-to-t from-[#1b1b1b] to-[#090909] select-none  duration-1000  ${
          showProject
            ? "absolute top-0 left-0 h-auto w-[80%] min-w-[450px] flex flex-col justify-center items-center scroll-hidden mx-auto p-8"
            : " cursor-pointer"
        } ${
          isProjectClicked && !showProject
            ? "h-[0px] w-[0px] opacity-0 absolute z-[-10] blur-xl"
            : "w-[500px] m-4 p-8"
        }`}
        onClick={handleOpen}
        id={id}
      >
        <img
          className="w-full h-full rounded object-cover duration-300 group-hover:brightness-105"
          src={img}
          alt={name}
        />
        {/* Ring inset animated */}
        <div
          className={`${
            showProject
              ? "inset-0 bg-gradient-to-r from-redOrange2 to-red-700 absolute filter opacity-75 blur-md z-[-1] rounded-xl animate-ringTilt"
              : "inset-0 bg-gradient-to-r from-redOrange3 to-redOrange absolute filter opacity-75 blur-sm z-[-1] rounded-xl animate-ringTilt group-hover:brightness-150 group-hover:blur-xl transition duration-1000 group-hover:duration-300"
          }`}
        ></div>
        {/* Code/Source buttons */}
        <div
          className={`flex justify-around items-center w-full absolute bottom-0 translate-y-1/2 left-0 ${
            !showProject &&
            "opacity-0 invisible group-hover:opacity-100 group-hover:visible duration-200"
          }`}
        >
          <a href={pageLink} target="_blank">
            <p
              className={`py-2 bg-gradient-to-t from-[#1b1b1b] to-[#090909]  uppercase rounded font-bold flex items-center ${
                showProject
                  ? "text-redOrange2 text-2xl px-6"
                  : "text-redOrange3 text-lg px-4"
              }`}
            >
              <BsAppIndicator className="mr-2" />
              Page
            </p>
          </a>
          <a href={codeLink} target="_blank">
            <p
              className={`py-2 bg-gradient-to-t from-[#1b1b1b] to-[#090909] uppercase rounded font-bold flex items-center ${
                showProject
                  ? "text-redOrange2 text-2xl px-6"
                  : "text-redOrange3 text-lg px-4"
              }`}
            >
              <FaCode className="mr-2" />
              Code
            </p>
          </a>
        </div>
      </div>
      {/* Project information div */}
      {showProject && (
        <div className="flex justify-center items-center flex-col max-w-[600px] p-4 my-4 z-[1]">
          <div className=" text-redOrange">
            <h1 className="font-bold text-xl md:text-2xl lg:text-4xl text-center tracking-wide">
              {name}
            </h1>
            <p className="text-base md:text-lg p-2 mx-auto text-gray-300 font-semibold">
              {desc}
            </p>
          </div>
          <div className="flex w-full text-3xl justify-around items-center text-redOrange mt-2">
            {toolsUsedIcons}
          </div>
        </div>
      )}
      {/* Close button */}
      <button
        onClick={handleClose}
        className={`text-red-600 text-2x absolute z-[500] right-8 top-8 p-2 border-redOrange duration-300 rounded shadow-lg hover:text-redOrange  group ${
          showProject ? "" : "opacity-0 invisible"
        }`}
      >
        <AiOutlineClose size={30} />
        <hr className="border-red-600 border-[1.25px] duration-300 group-hover:border-redOrange" />
      </button>
    </>
  );
};

export default SingleProject;
