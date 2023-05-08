import React from "react";
import img2 from "../assetss/img2.jpg";

const Section2 = () => {
  return (
    <div className="w-full flex justify-center items-center bg-slate-100 p-6">
      <div className="relative w-1/2">
        <img
            data-aos="fade-left"
          src={img2}
          alt=""
          className="rounded-2xl w-96 absolute top-16 left-8"
        />
        <div data-aos="fade-right" className="w-96 h-96 bg-gradient-to-tr from-[#00d9a6] to-[#9be15d] rounded-xl "></div>
      </div>
      <div className=" w-1/2 space-y-6">
        <h1 className="text-6xl font-semibold leading-snug">
          learn more
          <br /> about our
          <br /> <span className="text-[#00d9a6]">missions</span>
        </h1>
        <p>
          Far far away, behind the word mountains, far from the countries
          Vokalia and Consonantia, there live the blind texts. Separated they
          live in Bookmarksgrove right at the coast of the Semantics, a large
          language ocean.Separated they live in Bookmarksgrove.
        </p>
        <button className="p-3 bg-gradient-to-l from-[#00d9a6] to-[#9be15d] shadow-xl rounded-full pl-8 pr-8 text-white">
          Read More
        </button>
      </div>
    </div>
  );
};

export default Section2;
