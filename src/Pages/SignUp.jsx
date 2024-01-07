import React, { useState } from "react";
import { auth } from "../Services/FirebaseConfig"; 
import { createUserWithEmailAndPassword,updateProfile } from "firebase/auth";
import toast from "react-hot-toast";
import { useNavigate} from "react-router-dom";

const Signup = () => {
  const navigate = useNavigate();
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSignup = (e) => {
    e.preventDefault();
 
   
   //Firebase account creation 
   createUserWithEmailAndPassword(auth, email, password)
    .then((userCredential) => {
     
      const user = userCredential.user;
      console.log(user);
      updateProfile(user,{ displayName: name })   
    })
    .then(()=>{
        setName("")
        setEmail("")
        setPassword("")
        toast.success('Successfully toasted!') 
    })
    .then(   ()=> navigate('/login', { replace: true })    )

    .catch((error) => {
       const errorMessage = error.message;
      toast.error(errorMessage)
       });
  };

  return (
    <div className="flex justify-center items-center h-screen bg-gray-100">
      <div className="bg-white p-8 rounded shadow-md w-96">
        <h2 className="text-2xl font-semibold mb-6">Sign Up</h2>
        <form onSubmit={(e)=>handleSignup(e)}>
          <div className="mb-4">
            <label htmlFor="name" className="block text-gray-600 mb-2">         Name       </label>
            <input
              type="text"
              id="name"
              className="w-full px-4 py-2 border rounded-md focus:outline-none focus:border-blue-400"
              placeholder="Your Name"
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
          </div>
          <div className="mb-4">
            <label htmlFor="email" className="block text-gray-600 mb-2">         Email      </label>
            <input
              type="email"
              id="email"
              className="w-full px-4 py-2 border rounded-md focus:outline-none focus:border-blue-400"
              placeholder="Your Email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>
          <div className="mb-4">
            <label htmlFor="password" className="block text-gray-600 mb-2">       Password     </label>
            <input
              type="password"
              id="password"
              className="w-full px-4 py-2 border rounded-md focus:outline-none focus:border-blue-400"
              placeholder="Your Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>
          <button type="submit"     className="w-full bg-blue-500 text-white py-2 rounded-md hover:bg-blue-600">
            Sign Up
          </button>
        </form>
      </div>
    </div>
  );
};

export default Signup;
