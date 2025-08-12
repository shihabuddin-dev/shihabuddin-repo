import React from "react";
import AnimatedStatusCircle from "../AnimatedStatusCircle/AnimatedStatusCircle";
import { FaFacebookSquare, FaGithubSquare, FaLinkedin } from "react-icons/fa";
import { Fade } from "react-awesome-reveal";
import { TbWorldCode } from "react-icons/tb";

const Header = () => {
  return (
    <div className="text-center mt-8 ">
      <div className="profile-image-wrapper">
        <img
          className=" mx-auto w-36 md:w-40 rounded-full border-4 border-dotted border-gray-600 p-2 hover:grayscale-50 transition-all duration-500 ease-in-out hover:scale-102 hover:skew-0.5"
          src="https://i.ibb.co/v4wz678M/shihab-img.jpg"
          alt="profile picture"
        />
        <AnimatedStatusCircle size={26} color="#4CAF50" duration={2000} />
      </div>
       <Fade>
      <h1 className="text-3xl md:text-4xl font-black md:pt-4">SHIHAB UDDIN</h1>
      <p className="text-xl md:text-2xl font-bold text-gray-500">
        (shihabuddin-dev)
      </p>
        <div className="flex justify-center items-center gap-2 text-lg">
          <a href="https://shihab-dev.web.app" target="blank">
            <TbWorldCode className="text-blue-800" />
          </a>
          <a href="https://www.linkedin.com/in/shihab-dev" target="blank">
            <FaLinkedin className="text-blue-800" />
          </a>

          <a href="https://github.com/shihabuddin-dev" target="blank">
            <FaGithubSquare />
          </a>

          <a href="https://www.facebook.com/shihabuddinReal/" target="blank">
            <FaFacebookSquare className="text-blue-700" />
          </a>
        </div>
        <p className="pt-4 md:text-lg max-w-3xl mx-auto px-2">
          This is Shihab Uddin, Trying to explore Programming Language, I always
          like to learn new things and have experience with new stuff{" "}
        </p>
      </Fade>
      <hr className="border-2 border-gray-500 mt-6" />
    </div>
  );
};

export default Header;
