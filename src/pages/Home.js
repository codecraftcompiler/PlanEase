import React from "react";
import homeimage from '../assets/display.jpg'
import image1 from '../assets/Example2.webp'
import image2 from '../assets/Example1.webp'
import { FaArrowRightLong } from "react-icons/fa6";
import image3 from '../assets/Example3.webp'
import image4 from '../assets/Example4.jpg'

const Home = () => {
    return (
        <div className="w-full h-screen font-sans flex flex-col bg-gray-100">

            <div className="w-full h-[600px] relative">
                <img src={homeimage} alt="" className="h-[650px] w-full rounded-3xl opacity-50" />
                <div className="flex flex-col p-5 w-full justify-center items-center gap-y-3 absolute top-10 bg-opacity-50 text-slate-800 mt-[10%] italic">
                    <p className="font-extrabold text-2xl text-center mb-[50px] shadow-lg">Welcome to PlanEase - <span className="text-xl font-semibold">"your smart solution to stay organized, focused, and in control of your time"</span></p>
                    <p className="text-2xl font-semibold shadow-lg">Whether you're managing study schedules, work deadlines, or daily errands, our task manager helps you plan your day efficiently.</p>
                    <p className="text-2xl font-semibold shadow-lg"> Add tasks, set reminders, track your progress, and make every minute count.</p>
                    <p className="text-2xl font-semibold shadow-lg">Start managing your time like a pro — because every task completed is a step closer to your goals.</p>
                </div>

            </div>

            <div className="w-full h-auto px-8 mt-[4%] text-slate-700 bg-gray-100">

                <p className="text-[4rem] text-center w-11/12 mx-auto mb-6">Functionalities</p>

                <div className="flex justify-between items-center mb-[3%] gap-x-[2rem] w-11/12 mx-auto ">
                    <img src={image1} alt="" className="h-[400px] w-[600px] rounded-lg" />
                    <div className="flex flex-col items-center gap-y-5">
                        <p className="text-center text-2xl italic">Note down quick ideas, meeting points, or important reminders in a clutter-free space. Notes lets you save everything from thoughts to checklists, so nothing slips through the cracks</p>
                        <FaArrowRightLong className="text-[4rem]" />
                    </div>

                </div>
                <div className="flex justify-between items-center mb-[3%] gap-x-[2rem] w-11/12 mx-auto ">
                    <div className="flex flex-col items-center gap-y-5">
                        <p className="text-center text-2xl italic">Start your day with a focused plan. The My Day Board gives you a daily snapshot of your tasks, priorities, and events, helping you organize your workflow one day at a time</p>
                        <FaArrowRightLong className="text-[4rem]" />
                    </div>
                    <img src={image2} alt="" className="h-[400px] w-[600px] rounded-lg" />
                </div>
                <div className="flex justify-between items-center mb-[3%] gap-x-[2rem] w-11/12 mx-auto ">
                    <img src={image3} alt="" className="h-[400px] w-[600px] rounded-lg" />
                    <div className="flex flex-col items-center gap-y-5">
                        <p className="text-center text-2xl italic">Never miss a deadline again. Task Minder sends timely reminders for your upcoming tasks and lets you schedule repeat alerts for recurring responsibilities</p>
                        <FaArrowRightLong className="text-[4rem]" />
                    </div>
                </div>
                <div className="flex justify-between items-center gap-x-[2rem] w-11/12 mx-auto mb-[3%]">
                    <div className="flex flex-col items-center gap-y-5">
                        <p className="text-center text-2xl italic">Keep track of your daily expenses alongside your tasks. Wallet Watch helps you monitor spending, set budget goals, and maintain financial discipline as part of your routine</p>
                        <FaArrowRightLong className="text-[4rem]" />
                    </div>
                    <img src={image4} alt="" className="h-[400px] w-[600px] rounded-lg" />
                </div>
            </div>

            <div className="bg-gray-100 text-[4rem] text-center">
                <p>footer</p>
            </div>
        </div>
    )
}

export default Home 