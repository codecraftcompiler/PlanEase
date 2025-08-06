import React from "react";
import { useEffect } from "react";
import { Route,Routes,useLocation,useNavigate,Navigate} from "react-router-dom";
import Navbar from "./components/Navbar";
import Notes from "./pages/Notes";
import LoginPage from "./pages/LoginPage";
import RegisterPage from "./pages/RegisterPage";
import Home from "./pages/Home";
import './App.css'


function App() {
  const location = useLocation();
   const navigate = useNavigate();

  const hideNavbar = location.pathname === "/login" || location.pathname === "/register";
  useEffect(() => {
    const token = localStorage.getItem("token");
    if (token && location.pathname === "/") {
      navigate("/home");  // Redirect to home if already logged in
    }
  }, [location.pathname, navigate]);
  return(
    <div className="h-full w-full">    
       {!hideNavbar && <Navbar />}
      <Routes>
         <Route path="/" element={<Navigate to="/home" />} />
         <Route path="/login" element={<LoginPage />} />
        <Route path="/register" element={<RegisterPage />} />
        <Route path="/home" element={<Home/>}/>
        <Route path='/notes' element={<Notes/>}/>
      </Routes>
    </div>
  )
}

export default App