import React from "react";
import Logo from "../assetss/Logo.png";
const Navbar = () => {
  return (
    <div className="flex justify-between items-center p-4 bg-white w-full fixed z-50 shadow-xl">
      <div>
        <img src={Logo} alt="" className="" />
      </div>
      <ul className="flex gap-10">
        <li className="hover:text-green-400 cursor-pointer">Home</li>
        <li className="hover:text-green-400 cursor-pointer">About</li>
        <li className="hover:text-green-400 cursor-pointer">Services</li>
        <li className="hover:text-green-400 cursor-pointer">Showcase</li>
      </ul>
      <div>
        <button className="p-4 bg-gradient-to-l from-[#00d9a6] to-[#9be15d] rounded-full pl-6 pr-6 text-white">PURCHAES</button>
      </div>
    </div>
  );
};

export default Navbar;
