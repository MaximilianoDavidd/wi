import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import 'bootstrap/dist/css/bootstrap.min.css';


import { initializeApp } from "firebase/app";

const firebaseConfig = {
  apiKey: "AIzaSyCbv6PFUQKMI3NepXwe89ugRjCe89aIMpI",
  authDomain: "winka-8815f.firebaseapp.com",
  projectId: "winka-8815f",
  storageBucket: "winka-8815f.appspot.com",
  messagingSenderId: "391776673644",
  appId: "1:391776673644:web:b14ab45bd5f67b211a9d49"
};

initializeApp(firebaseConfig);


ReactDOM.createRoot(document.getElementById('root')).render(<App />)
