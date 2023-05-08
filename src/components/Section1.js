import React, { useState } from "react";
import { BsSpeedometer2, BsCloud, BsFillPhoneFill } from "react-icons/bs";
import {  BiTimer } from "react-icons/bi";

const Section1 = () => {

  return (
    <div className="flex justify-center items-center w-full bg-slate-100 p-6">
      <div className="w-1/2 space-y-8">
        <p data-aos="zoom-in" className="text-5xl font-semibold leading-snug">We Are Here To<br/> Make Your <span className="text-[#00d9a6]">Website</span><br/> Look More <span className="text-[#00d9a6]">Elegant</span><br/> And Stylish!</p>
        <button 
            className="p-3 bg-gradient-to-l from-[#00d9a6] to-[#9be15d] shadow-xl rounded-full pl-8 pr-8 text-white">
            View All
        </button>
      </div>

        <div className="w-1/2 grid grid-cols-2 gap-4">
            <div className="p-6 bg-white w-80 h-80 rounded-2xl space-y-5 flex flex-col justify-center shadow-xl ">
                <BsSpeedometer2 className={`text-5xl text-[#00d9a6]`}/>
                <h1 className="text-4xl">Speed Optimization</h1>
                <p>Far far away, behind the word mountains, far from the countries Vokalia Separated...</p>
            </div>
            <div className="p-6 bg-white w-80 h-80 rounded-2xl  space-y-5 flex flex-col justify-center shadow-xl ">
                <BsCloud className={`text-5xl text-[#00d9a6]`}/>
                <h1 className="text-4xl">Cloud Solutions</h1>
                <p>Far far away, behind the word mountains, far from the countries Vokalia Separated...</p>
            </div>
            <div  className="p-6 bg-white w-80 h-80 rounded-2xl space-y-5 flex flex-col justify-center shadow-xl ">
                <BsFillPhoneFill className={`text-5xl text-[#00d9a6]`}/>
                <h1 className="text-4xl">Website Design</h1>
                <p>Far far away, behind the word mountains, far from the countries Vokalia Separated...</p>
            </div>
            <div className="p-6 bg-white w-80 h-80 rounded-2xl space-y-5 flex flex-col justify-center shadow-xl ">
                <BiTimer className={`text-5xl text-[#00d9a6]`}/>
                <h1 className="text-4xl">Online Marketing</h1>
                <p>Far far away, behind the word mountains, far from the countries Vokalia Separated...</p>
            </div>
        </div>

    </div>
  );
};

export default Section1;
