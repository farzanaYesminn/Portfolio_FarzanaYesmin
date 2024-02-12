import React from "react";
import HeroImage from "../assets/heroImage.png";
import { MdOutlineKeyboardArrowRight } from "react-icons/md";
import { Link } from "react-scroll";

const Home = () => {
  return (
    <div
      name="home"
      className="h-screen w-full bg-gradient-to-b from-black via-black to-gray-800 home"
    >
      <div className="max-w-screen-lg mx-auto sm:grid sm:grid-cols-2 items-center justify-center h-full px-4 md:flex-row">
      <div className="small-screen hidden">
          <img
            src={HeroImage}
            alt="profile"
            className="rounded-2xl mx-auto w-3/3 md:w-full"
          />
        </div>
        <div className=" flex flex-col justify-center h-full">
          <h2 className="text- md:text-5xl font-bold text-white">
            I'm a Front-End Developer
          </h2>
          <p className="text-gray-500 py-4 max-w-md">
            I have 1 year of experience building websites and desgining software.
            I love to work on web application using technologies like
            HTML, CSS, React, Tailwind.
          </p>

          <div className="portfolio-btn">
            <Link
              to="portfolio"
              smooth
              duration={500}
              className="group text-white w-fit px-6 py-3 my-2 flex items-center rounded-md bg-gradient-to-r from-cyan-500 to-blue-500 cursor-pointer"
            >
              Portfolio
              <span className="group-hover:rotate-90 duration-300">
                <MdOutlineKeyboardArrowRight size={25} className="ml-1" />
              </span>
            </Link>
          </div>
        </div>
        <div className="big-screen">
          <img
            src={HeroImage}
            alt="profile"
            className=" mx-auto w-full md:w-full"
          />
        </div>
        
      </div>
    </div>
  );
};

export default Home;
