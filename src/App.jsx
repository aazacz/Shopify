import React, { createContext,useState } from "react";
import "./App.css";
import Router from "./Routes/Router";
import { Toaster } from "react-hot-toast";


export const AuthContext = createContext()

function App() {

  const [User, setUser] = useState({name:"",  email:"", auth:""});
  return (

    <>
    <Toaster position="top-center" reverseOrder={false}/>
    <AuthContext.Provider value={{User, setUser}}>
      <Router />
    </AuthContext.Provider>
    
    </>
  );
}

export default App;
