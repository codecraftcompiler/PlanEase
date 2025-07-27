import React from "react";
import img from '../assets/logo_sorted.png'
import { NavLink } from "react-router-dom"

function Navbar() {
    return (
        <div className="w-full h-[4rem] flex justify-between p-5 border-b-5 border-slate-600 bg-gray-100">
            <div className="flex justify-center items-center text-slate-600">
                <span><NavLink to='/'><img src={img} className="w-[40px] h-[40px] cursor-pointer"/></NavLink></span>
                <span className="italic -ml-1 text-xl cursor-pointer">
                    <NavLink to='/'>PlanEase</NavLink>
                </span>
            </div>
            <div className="flex gap-x-10 text-xl justify-center items-center text-slate-600">
                <div className="cursor-pointer">
                    <NavLink to='./notes'>
                        Notes
                    </NavLink>
                </div>
                <div className="cursor-pointer">MyDayBoard</div>
                <div className="cursor-pointer">TaskMinder</div>
                <div className="cursor-pointer">WalletWatch</div>
            </div>
            <div className="text-slate-600 text-xl mr-4 cursor-pointer">Profile</div>
        </div>
    )
}

export default Navbar