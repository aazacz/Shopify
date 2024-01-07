import React,{createContext,useContext} from "react";
import { useNavigate, Route, Routes } from "react-router-dom";
import Navbar from "../Layouts/Navbar";
import ErrorPage from "../Pages/ErrorPage";
import Home from "../Pages/Home";
import Login from "../Pages/Login";
import Signup from "../Pages/SignUp";
import Body from "../Layouts/Body";
import Orders from "../Layouts/Orders";
import MyAccounts from "../Layouts/Accounts";
import CheckoutPage from "../Layouts/Checkout";
import { AuthContext } from "../App";


const Router = () => {
const navigate = useNavigate()
  const authContext = useContext(AuthContext)   //Auth Context
  const {User,setUser} = authContext

  return (
    <Routes>
      <Route path="/" element={<Home/>} >
      <Route index element={<Body/>} />
       <Route path='myorders' element={<Orders />} />
       <Route path='account' element={<MyAccounts />} />
       <Route path='checkout' element={<CheckoutPage />} />
      </Route>
      <Route path="/login" element={User && User.name !== "" ? navigate("/")  : <Login/>} />
      <Route path="/signup" element={<Signup/>} />

      <Route path="*" element={<ErrorPage />} />
    </Routes>
  );
};

export default Router;
