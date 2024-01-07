import React, { useState,useContext } from "react";
import { list, navpopup } from "../Utils/Navbardata";
import { Link } from "react-router-dom";
import { IoReorderThree } from "react-icons/io5";
import { FaShoppingCart } from "react-icons/fa";
import "../App.css"
import Minicart from "./Minicart";
import { addedItemsContext } from '../Pages/Home'; 
import { signOut } from "firebase/auth";
import { auth } from "../Services/FirebaseConfig";
import { AuthContext } from "../App";
import { useNavigate } from "react-router-dom";


const Navbar = () => {

  const navigate = useNavigate()
  
  const [NavPopOpen, setNavPopOpen] = useState(false)
  const [MinicartOpen,setMinicartOpen] = useState(false)
 
  const addedItemscontext = useContext(addedItemsContext);  //Cart Context
  const{cartItems,setcartItems} = addedItemscontext

  const authContext = useContext(AuthContext)   //Auth Context
  const {User,setUser} = authContext


  const HandleSignout=()=>{
   
    signOut(auth)
    .then((value)=>{  setUser((prevUser)=>{ (  {...prevUser, name:"",email:"",password:""}) })  })
    .then(()=>navigate('/'))
    .catch((error)=>toast.error(error.message))
  }


  return (
    <>
    <div className={`z-50 h-20 w-full  justify-between shadow-fineline relative md:sticky  bg-white md:top-0  md:flex md:h-[70px] md:w-full`} >
      <div className="text:black  flex  h-full   md:px-9  md:w-auto  ">
        <ul className="flex w-full items-center gap-x-3 px-4 " >
          <li className="font-bold text-sm md:text-lg "> Shopify</li>
          {list.map((value, index) => {
            const link = value.filter
            return (
              <li key={index} className="text-sm md:text-lg text-black">
                <span >{value.li}</span>
              </li>
            );
          })}
          <li className=" absolute right-4 text-2xl text-blue-700">
            <button type="button" onClick={() => setNavPopOpen((OpenStatus) => !OpenStatus)}>
              <IoReorderThree className={`block md:hidden ${NavPopOpen ? "rotate-90" : ""}  transition-all duration-300 `} />
            </button>
          
          </li>
        </ul>
      </div>

      {   <div className={` Dropdown bg-white `}>

          <div className={`  ${NavPopOpen?"bg-white" : "-translate-y-5 opacity-0"}  transition-all duration-300 font-Oswald text:black absolute right-5 flex w-[200px] gap-y-3 justify-center flex-col h-[170px] gap-x-5  border-[1px] rounded-lg border-black  font-light text-sm px-2   
                       md:-translate-y-0 md:opacity-100 md:transition-none md:duration-0 md:flex md:h-full md:w-auto  md:flex-row  md:justify-end md:border-none  md:px-9  md:text-lg`}>
         
         <span className="flex gap-x-2 items-center md:flex  md:w-auto hover:bg-cyan-200 md:hover:bg-inherit  px-3 py-1">
          <span className="" > { User && User.name !== "" ? User.name : "Guest" } </span>
          </span>
            { navpopup.map((values, index) => {
              const Compenenticons = values.icons
              return (
                <>
                  <span key={index} className="flex gap-x-2 items-center md:flex  md:w-auto hover:bg-cyan-200 md:hover:bg-inherit  px-3 py-1 ">
                    <span className={`${values.screen}`} ><Compenenticons /></span><Link to={values.link}  className="text-[16px] w-max" >{values.header}</Link>
                  </span>
                </>
              )
            })}
          <span className="flex gap-x-2 items-center md:flex  md:w-[30px] hover:bg-cyan-200 md:hover:bg-inherit  px-3 py-1 ">
          <span className=""> <FaShoppingCart  onClick={()=>setMinicartOpen((currentstate)=>!currentstate)}/> </span>
          <span className={ `${cartItems.length > 0 ? "" : "hidden"} text-red-600`} >
              {cartItems.length ? cartItems.length : ""}
            </span>
          </span>
        
          <span className="flex  items-center md:flex  md:w-auto hover:bg-cyan-200 md:hover:bg-inherit  py-1">
           
           
           </span>
            
          <span className="flex gap-x-2 items-center md:flex  md:w-auto hover:bg-cyan-200 md:hover:bg-inherit  px-3 py-1">
          <span className="cursor-pointer" onClick={()=>HandleSignout()}> Logout </span>
          </span>
          
          </div>
        </div>}

    </div>
    {MinicartOpen && <Minicart/>}
    </>
  );
};

export default Navbar;
