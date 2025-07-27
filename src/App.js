import React from "react";
import { Route,Routes } from "react-router-dom";
import Navbar from "./components/Navbar";
import Notes from "./pages/Notes";
import './App.css'
import Home from "./pages/Home";

function App() {
  return(
    <div className="h-full w-full">    
      <Navbar/>
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path='/notes' element={<Notes/>}/>
      </Routes>
    </div>
  )
}

export default App