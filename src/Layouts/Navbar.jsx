import React, { useState, useEffect } from "react";
import { list, navpopup } from "../Utils/Navbardata";
import { Link } from "react-router-dom";
import { IoReorderThree } from "react-icons/io5";
import "../App.css"
const Navbar = () => {
  const [cartItems, setCartitems] = useState([]);
  const [NavPopOpen, setNavPopOpen] = useState(false)

  
  return (
    <div className={`z-50 h-20 w-full  justify-between shadow-fineline relative md:sticky  bg-white md:top-0  md:flex md:h-[70px] md:w-full`} >
      <div className="text:black  flex  h-full   md:px-9  md:w-auto  ">
        <ul className="flex w-full items-center gap-x-3 px-4 " >
          <li className="font-bold text-sm md:text-lg "> Shopify</li>
          {list.map((value, index) => {
            return (
              <li key={index} className="text-sm md:text-lg text-black">
                <Link>{value.li}</Link>
              </li>
            );
          })}
          <li className=" absolute right-4 text-2xl text-blue-700">
            <button type="button" onClick={() => setNavPopOpen((OpenStatus) => !OpenStatus)}>
              <IoReorderThree className={`block md:hidden ${NavPopOpen ? "rotate-90" : ""}  transition-all duration-300 `} />
            </button>
            {console.log(NavPopOpen)}
          </li>
        </ul>
      </div>

      {   <div className={` Dropdown bg-white `}>

          <div className={`  ${NavPopOpen?"bg-white" : "-translate-y-5 opacity-0"}  transition-all duration-300 font-Oswald text:black absolute right-5 flex w-[200px] gap-y-3 justify-center flex-col h-[170px] gap-x-5  border-[1px] rounded-lg border-black  font-light text-sm px-2   
                       md:-translate-y-0 md:opacity-100 md:transition-none md:duration-0 md:flex md:h-full md:w-auto  md:flex-row  md:justify-end md:border-none  md:px-9  md:text-lg`}>

            { navpopup.map((values, index) => {
              const Compenenticons = values.icons
              return (
                <>
                  <span key={index} className="flex gap-x-2 items-center md:flex  md:w-auto hover:bg-cyan-200 md:hover:bg-inherit  px-3 py-1 ">
                    <span className={`${values.screen}`} ><Compenenticons /></span> <span className="text-[16px] w-max" >{values.header}</span>
                  </span>
                </>
              )
            })}

            {/* <span className=""> <FaShoppingCart /> </span> */}
            <span className={`${cartItems.length > 0 ? "" : "hidden"} text-red-600`} >
              {cartItems.length ? cartItems.length : ""}
            </span>

          </div>
        </div>}

    </div>
  );
};

export default Navbar;
