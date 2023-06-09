import React, { useState, useEffect, useRef } from "react";
import emailjs from "@emailjs/browser";

import { BiMailSend } from "react-icons/bi";
import { FaCheck, FaGithub, FaInstagram, FaLinkedin } from "react-icons/fa";

const Contact = () => {
  const [showSent, setShowSent] = useState({ sent: false, success: null });
  const [showTitle, setShowTitle] = useState(false);
  const [showContactForm, setShowContactForm] = useState(false);

  const titleRef = useRef(null);
  const formRef = useRef(null);

  useEffect(() => {
    const myObserver = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.target === titleRef.current && entry.isIntersecting) {
          setShowTitle(true);
        } else if (entry.target === formRef.current && entry.isIntersecting) {
          setShowContactForm(true);
        }
      });
    });

    myObserver.observe(titleRef.current);
    myObserver.observe(formRef.current);

    return () => {
      myObserver.disconnect();
    };
  });

  useEffect(() => {
    const timeOut = setTimeout(() => {
      setShowSent({ sent: false, success: null });
    }, 3500);
    return () => clearTimeout(timeOut);
  }, [showSent]);

  const handleSent = (e) => {
    e.preventDefault();
    const publicKey = "0xsDJAcTBLI7IHp3B";
    const inputs = e.target.elements;

    console.log(inputs);

    if (!inputs[0].value || !inputs[1].value || !inputs[2].value) {
      setShowSent({ sent: true, success: false });
    } else {
      emailjs
        .sendForm("service_1boh3vt", "template_v9x1vfc", e.target, publicKey)
        .then((res) => {
          console.log(res);
          setShowSent({ sent: true, success: true });
        })
        .catch((err) => console.log(err));
    }
  };

  return (
    <section id="contact" className="my-12">
      <div className="flex flex-col md:flex-row items-center justify-between md:px-12">
        <div
          ref={titleRef}
          className={`shadow-xl flex flex-col justify-center items-center max-w-[90%] md:max-w-[600px] p-4 rounded-lg bg-gradient-to-t to-[#1a1a1a] from-[#101010] relative group mb-12 z-10 md:mb-0 max-h-[500px] ${
            !showTitle ? "opacity-0" : "fade-in-from-bottom"
          }`}
        >
          <h2 className="text-lg md:text-4xl tracking-wide font-bold py-2 text-redOrange flex justify-center items-center">
            tejada.v.tobias@gmail.com
            {/* <hr className="border-2 border-redOrange mx-auto w-[85%]" /> */}
          </h2>
          <p className="p-2 text-[15px] md:text-[20px] text-gray-200">
            As a highly motivated and eager junior front end developer, I've
            build this portfolio in order to demonstrate my{" "}
            <strong>abilities and expertise.</strong>
            <br /> If you're looking for a dedicated and passionate developer to
            join your team, I would love the opportunity to connect with you and
            discuss how my skills can <strong>benefit your organization</strong>
            .
            <br /> Feel free to reach out to me on the following platforms or in
            the form below via your email.{" "}
            <strong>
              I am always available and ready to take on new challenges.
            </strong>
          </p>
          <div className="p-4 flex justify-around items-center text-3xl w-full text-gray-200">
            <a href="" target="_blank">
              <FaGithub className="transition duration-200 hover:text-redOrange hover:scale-105" />
            </a>
            <a href="" target="_blank">
              <FaLinkedin className="transition duration-200 hover:text-redOrange hover:scale-105" />
            </a>
            <a href="" target="_blank">
              <FaInstagram className="transition duration-200 hover:text-redOrange hover:scale-105" />
            </a>
          </div>
          <div className="inset-0 bg-gradient-to-r to-[#1a1a1a] from-[#101010] absolute filter opacity-75 blur-sm rounded-lg animate-ringTilt group-hover:brightness-150 group-hover:blur-xl transition duration-1000 group-hover:duration-300 z-[-10]"></div>
        </div>
        <div
          ref={formRef}
          className={`relative my-12 md:my-0 w-[90%] md:max-w-[400px] h-[500px] shadow-2xl bg-blue-900 group rounded-lg ${
            !showContactForm ? "opacity-0" : "fade-in-from-bottom-2"
          }`}
        >
          <form
            className="flex flex-col justify-center px-7 py-6  md:px-14 md:py-12 z-[1] relative"
            onSubmit={handleSent}
          >
            <div className="relative my-6 flex items-center justify-center">
              <input
                id="name"
                name="name"
                type="text"
                required
                className="peer shadow-lg placeholder-transparent p-2 bg-gray-800 rounded focus:outline-none focus:ring-2 focus:ring-jumpBlue3 w-[100%]"
                placeholder="Jane Doe"
              />
              <label
                htmlFor="name"
                className="font-bold mb-2 text-gray-200 absolute transition-all duration-200 text-[16.5px] left-2 -top-8 peer-placeholder-shown:text-base peer-focus:text-[16.5px] peer-focus:text-gray-200 peer-placeholder-shown:text-gray-400
                peer-focus:-top-8  peer-placeholder-shown:top-2"
              >
                Your name
              </label>
            </div>
            <div className="relative my-6 flex items-center justify-center">
              <input
                name="user_email"
                type="email"
                id="email"
                required
                className="peer shadow-lg placeholder-transparent p-2 bg-gray-800 rounded focus:outline-none focus:ring-2 focus:ring-jumpBlue3 w-[100%]"
                placeholder="jane@example.com"
              />
              <label
                htmlFor="email"
                className="font-bold mb-2 text-gray-200 absolute transition-all duration-200 text-[16.5px] left-2 -top-8 peer-placeholder-shown:text-base peer-focus:text-[16.5px] peer-focus:text-gray-200 peer-placeholder-shown:text-gray-400
                peer-focus:-top-8  peer-placeholder-shown:top-2"
              >
                Email address
              </label>
            </div>
            <div className="relative my-6 flex items-center justify-center">
              <textarea
                name="message"
                id="message"
                placeholder="bla bla bla"
                type="Message"
                className="peer shadow-lg placeholder-transparent p-2 bg-gray-800 rounded focus:outline-none focus:ring-2 focus:ring-jumpBlue3 w-[100%] h-[120px] resize-none"
              />
              <label
                htmlFor="message"
                className="font-bold mb-2 text-gray-200 absolute transition-all duration-200 text-[16.5px] left-2 -top-8 peer-placeholder-shown:text-base peer-focus:text-[16.5px] peer-focus:text-gray-200 peer-placeholder-shown:text-gray-400
                peer-focus:-top-8  peer-placeholder-shown:top-2"
              >
                Message
              </label>
            </div>
            <button
              type="submit"
              className={`duration-300 select-none transition
            ${
              showSent.sent && showSent.success
                ? "p-2 font-bold rounded bg-green-500 filter hover:contrast-150 flex items-center justify-center"
                : "p-2 font-bold rounded bg-jumpBlue3 hover:contrast-150 flex items-center justify-center"
            }
            ${
              showSent.sent && !showSent.success
                ? "p-2 font-bold rounded bg-red-500 filter hover:contrast-150 flex items-center justify-center"
                : ""
            }`}
            >
              {showSent.sent && showSent.success ? (
                <>
                  <FaCheck className="mr-2" />
                  EMAIL SENT
                </>
              ) : (
                <>
                  <BiMailSend className="mr-2" />
                  SEND EMAIL
                </>
              )}
            </button>
          </form>
          <div className="absolute w-full h-full left-0 top-0 overflow-hidden rounded-lg">
            <div className="bg-gradient-to-t to-redOrange2 from-redOrange3 h-[200px] w-[200px] absolute rotate-45 z-[0] top-0 right-0 translate-x-1/2"></div>
            <div className="bg-gradient-to-b to-redOrange2 from-redOrange3 h-[200px] w-[200px] absolute rotate-45 z-[0] bottom-0 right-0 translate-x-1/2"></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
