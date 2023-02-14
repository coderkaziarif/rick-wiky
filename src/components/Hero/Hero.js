import React from "react";
import bubble from "../../assets/Home page/Hero Elements/bubble.png";
import pill from "../../assets/Home page/Hero Elements/pill.png";
import portal from "../../assets/Home page/Hero Elements/portal.png";
import gun from "../../assets/Home page/Hero Elements/Gun.png";

import bg from '../../assets/Home page/Background  Elements/Background.png';
import sprial from '../../assets/Home page/Background  Elements/Spiral.png';
import { MdOutlinePlayCircleOutline } from 'react-icons/md';

const Hero = () => {
  return (
    <>
      <div className="flex flex-row  justify-center p-4 mt-24 mx-auto ">
    
        <div className="">
          <div className="flex sm:justify-center relative ">
            <span className="absolute top-[-37px] left-[-40px] sm:top-[-35px] sm:left-[-40px]  md:top-[-60px] md:left-[-45px]  ">
              <img
                src={bubble}
                alt=""
                className="h-20 w-20 md:h-full md:w-32 "
              />
            </span>

            <h1 className="flex items-center font-taravels font-extrabold text-white text-3xl sm:text-5xl md:text-6xl lg:text-8xl  mb-5">
              <span className="italic">THE</span>
              <span>
                <img src={portal} alt="portal" className="w-12 sm:w-24" />
              </span>
              {/* text-transparent bg-clip-text bg-gradient-to-r from-[#9DFE00] to-[#14D9E5] */}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#9DFE00] to-[#14D9E5] ml-2 sm:ml-5">
                RICK &
              </span>

              <img
                src={pill}
                alt="pill"
                className="h-1.5 w-3 sm:w-8 absolute top-[-2px] right-[-1px] sm:right-[-10px]  "
              />
            </h1>
          </div>

          <span className="font-taravels font-extrabold text-center text-3xl sm:text-5xl md:text-6xl lg:text-8xl ">
            <h1 className="text-[#9DFE00] ">
              {" "}
              <span className="text-[#9DFE00]"> MORTY</span>
              <span className="italic text-white"> WIKI</span>
            </h1>
          </span>
          {/* //! description */}
          <div className="mt-10 flex flex-col-reverse md:flex-row md:justify-evenly md:items-center">
            <div>
              <button className="flex items-center bg-gradient-to-r from-[#9DFE00] to-[#14D9E5] text-white py-3 px-4 my-4 rounded-3xl text-sm cursor-pointer ">
                {" "}
                <MdOutlinePlayCircleOutline className="mr-2 " size={20} /> Watch
                Now{" "}
              </button>
            </div>

            <div>
              <p className="text-[#14d9e5] font-semibold text-[10px] sm:text-[18px]">
                Brilliant but boozy scientist Rick hijacks his fretful <br />
                teenage grandson, Morty, for wild escapades <br />
                in other worlds and alternate dimensions.
              </p>
            </div>
          </div>
        </div>
        {/* //! gun img */}
        <div className="flex items-center ">
          <img
            src={gun}
            alt="gun"
            className="w-28 h-28 sm:w-48 sm:h-48 lg:w-72 lg:h-full"
          />
        </div>
      </div>
    </>
  );
};

export default Hero;
