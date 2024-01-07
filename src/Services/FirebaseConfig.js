import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyAhQkd0VjAdjs65UYKvE53OF-dIvZ1YuOA",
  authDomain: "ecommerceshopify-6c7bf.firebaseapp.com",
  projectId: "ecommerceshopify-6c7bf",
  storageBucket: "ecommerceshopify-6c7bf.appspot.com",
  messagingSenderId: "948343901434",
  appId: "1:948343901434:web:31546d0a6514700ae24d43",
  measurementId: "G-732RJW67TJ"
};


const app = initializeApp(firebaseConfig);

export const auth = getAuth(app); 
//getting Auth






