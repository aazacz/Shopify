import React, { createContext, useState } from "react";
import Navbar from "../Layouts/Navbar";
import Minicart from "../Layouts/Minicart";
import { Outlet } from "react-router-dom";


export const addedItemsContext  = createContext(); 
export const filteredContext  = createContext(); 


const Home = () => {
  const [cartItems, setcartItems] = useState([])
  const [cartopen,setcartopen] =useState(false)
  const [filtered, setfiltered] = useState([])

  return (
    <>
    {/* <filteredContext.Provider value={{filtered, setfiltered}}> */}
     <addedItemsContext.Provider value={{cartItems,setcartItems}}>
      
      <Navbar />
      <Outlet/>
      
    {cartopen &&  <Minicart/>}
      </addedItemsContext.Provider>
     {/* </filteredContext.Provider> */}
    </>
  );
};

export default Home;
