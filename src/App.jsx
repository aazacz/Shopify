import React, { createContext,useState } from "react";
import "./App.css";
import Router from "./Routes/Router";
import { Toaster } from "react-hot-toast";


export const AuthContext = createContext()
export const MyOrderContext = createContext()

function App() {

  const [User, setUser] = useState({name:"",  email:"", auth:""});
  const [MyOrder, setMyOrder] = useState([]);
  return (

    <>
    <Toaster position="top-center" reverseOrder={false}/>
    <AuthContext.Provider value={{User, setUser}}>
     <MyOrderContext.Provider value={{MyOrder, setMyOrder}}>
      <Router />
      </MyOrderContext.Provider>
    </AuthContext.Provider>
    
    </>
  );
}

export default App;
