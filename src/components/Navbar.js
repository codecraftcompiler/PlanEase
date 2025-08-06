import React from "react";
import img from '../assets/logo_sorted.png';
import { NavLink, useNavigate } from "react-router-dom";

function Navbar() {
  const navigate = useNavigate();
  const token = localStorage.getItem("token");

  const handleLogout = () => {
    localStorage.removeItem("token");
    localStorage.removeItem("user");
    navigate("/"); // Redirect to login page
  };

  return (
    <div className="w-full h-[4rem] flex justify-between items-center px-6 border-b-2 border-slate-600 bg-gray-100">
      {/* Logo Section */}
      <div className="flex items-center text-slate-600">
        <NavLink to='/'>
          <img src={img} className="w-[40px] h-[40px] cursor-pointer" alt="logo" />
        </NavLink>
        <NavLink to='/' className="italic -ml-1 text-xl cursor-pointer">
          PlanEase
        </NavLink>
      </div>

      {/* Nav Links */}
      <div className="flex gap-x-10 text-xl items-center text-slate-600">
        <NavLink to='/notes' className="cursor-pointer">Notes</NavLink>
        <div className="cursor-pointer">MyDayBoard</div>
        <div className="cursor-pointer">TaskMinder</div>
        <div className="cursor-pointer">WalletWatch</div>
      </div>

      {/* Auth Section */}
      <div className="flex items-center gap-4">
        {token ? (
          <>
            <NavLink to="/profile" className="text-slate-600 text-xl cursor-pointer">
              Profile
            </NavLink>
            <button
              onClick={handleLogout}
              className="px-3 py-1 bg-red-500 text-white rounded hover:bg-red-600 transition"
            >
              Logout
            </button>
          </>
        ) : (
          <>
            <NavLink to="/login" className="text-slate-600 text-xl cursor-pointer">
              Login
            </NavLink>
            <NavLink to="/register" className="text-slate-600 text-xl cursor-pointer">
              Signup
            </NavLink>
          </>
        )}
      </div>
    </div>
  );
}

export default Navbar;
