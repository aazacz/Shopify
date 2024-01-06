import React, { createContext, useState } from "react";
import Navbar from "../Layouts/Navbar";
import Body from "../Layouts/Body";
import Minicart from "../Layouts/Minicart";


export const addedItemsContext  = createContext(); 


const Home = () => {
  const [cartItems, setcartItems] = useState([]);
  const [cartopen,setcartopen] =useState(false)
  return (
    <>
     <addedItemsContext.Provider value={{cartItems,setcartItems}}>
      <Navbar />
      <Body/>
    {cartopen &&  <Minicart/>}
      </addedItemsContext.Provider>
    
    </>
  );
};

export default Home;
