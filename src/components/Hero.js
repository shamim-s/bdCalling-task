import React from "react";
import HeroImg from "../assetss/hero.jpg";
const Hero = () => {
  return (
    <div className="flex justify-around items-center p-4 relative">
        <ul className="flex gap-6 absolute bottom-10 left-8">
            <li className="cursor-pointer hover:text-[#00d9a6]">Facebook</li>
            <li className="cursor-pointer hover:text-[#00d9a6]">Instagram</li>
            <li className="cursor-pointer hover:text-[#00d9a6]">Twitter</li>
            <li className="cursor-pointer hover:text-[#00d9a6]">YouTube</li>
        </ul>
      <div className="space-y-3 w-1/2">
        <h1 className="text-[#00d9a6] tracking-wider">17 YEARS OF EXPERIENCE</h1>
        <h1 className="text-6xl font-bold">We Are a</h1>
        <h1 className="text-6xl font-bold">Web Design <span className="text-[#00d9a6]">Agency</span></h1>  
        <div className="pr-12 mb-4">
            <p className="text-sm">Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts. Separated they live in Bookmarksgrove right at the coast of the Semantics, a large language ocean.Separated they live in Bookmarksgrove.</p>
        </div>
            <button 
            className="p-3 bg-gray-700 rounded-full pl-8 pr-8 text-white">
            Read More
        </button>
      </div> 
      <div className="w-1/2 bg-white relative">
        <div className="w-full bg-slate-200 p-6 rounded-full">
            <div className="w-20 h-10 absolute rounded-full bg-slate-200 left-5"></div>
            <div className="w-20 h-10 absolute rounded-full bg-slate-200 left-28 "></div>
        <img src={HeroImg} alt="" className="rounded-full" />
        </div>
      </div>
    </div>
  );
};

export default Hero;
