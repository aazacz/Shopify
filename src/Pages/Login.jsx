import React, { useState,useContext } from "react";
import { auth } from "../Services/FirebaseConfig";
import { signInWithEmailAndPassword } from "firebase/auth";
import { useNavigate } from "react-router-dom";
import { AuthContext } from "../App";
import toast from "react-hot-toast";

const Login = () => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const navigate = useNavigate()

    const authContext = useContext(AuthContext)
    const {User,setUser} = authContext

    const handleLogin = (e) => {
        e.preventDefault()
     


        signInWithEmailAndPassword(auth, email, password)
            .then((userCredential) => {
            
                const user = userCredential.user;
               
                setUser((prevUser)=>({
                    ...prevUser,
                            name: user.displayName,
                            email: user.email,
                            auth: user,
                }))
                return user
            })
            .then((user)=>{
              toast.success("Welcome  "+ user.displayName.toUpperCase())
            }
)            .then(()=>{
                setEmail("")
                setPassword("")
                navigate( "/" , {replace:true} )
            })
            .catch((error) => {
                
                toast.error(error.message)
            });
    };

    return (
        <div className="flex justify-center items-center h-screen bg-gray-100">
            <div className="bg-white p-8 rounded shadow-md w-96">
                <h2 className="text-2xl font-semibold mb-6">Login</h2>
                <form onSubmit={(e) => handleLogin(e)}>
                    <div className="mb-4">
                        <label htmlFor="email" className="block text-gray-600 mb-2">     Email     </label>
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
                        <label htmlFor="password" className="block text-gray-600 mb-2">   Password     </label>
                        <input
                            type="password"
                            id="password"
                            className="w-full px-4 py-2 border rounded-md focus:outline-none focus:border-blue-400"
                            placeholder="Your Password"
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                        />
                    </div>
                    <button type="submit" className="w-full bg-blue-500 text-white py-2 rounded-md hover:bg-blue-600" >
                        Login
                    </button>

                </form>
            </div>
        </div>
    );
};

export default Login;
