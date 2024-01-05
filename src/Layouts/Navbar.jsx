import React, { useState, useEffect } from "react";
import { list } from "../Utils/Navbardata";
import { Link } from "react-router-dom";

const Navbar = () => {
  const [colorChange, setcolorChange] = useState(0);

  return (
    <div
      className={`z-50  md:sticky md:top-0 md:h-[70px] md:w-full md:overflow-x-hidden  ${colorChange ? "bg-sky-600 transition-colors duration-200" : "bg-none"
        }  justify-between  md:flex  md:shadow-[0px_3px_20px_2px_#4c51bf] md:backdrop-blur-sm`}
    >
      <div className="font-Oswald h-full items-center  text-[30px] font-medium text-white md:flex md:w-1/2 md:pl-10     ">
        <span className="hover:duration-400 hover:font-Oswald from-gray-300 via-fuchsia-600 to-orange-600
                          hover:bg-gradient-to-bl hover:bg-clip-text hover:text-[30px] hover:font-medium hover:text-transparent hover:transition-all">
          
          Abhilash Abin Zachariah
        </span>
      </div>

      <div className="flex h-full text-white  md:w-1/2 ">
        <ul className="flex items-center gap-x-9">
          {list.map((value, index) => {
            return (
              <li key={index} className="text-lg text-white">
                <Link href={value.link}>{value.li}</Link>
              </li>
            );
          })}
        </ul>
      </div>
    </div>
  );
};

export default Navbar;
