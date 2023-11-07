import React from "react";
import {AiOutlineHome, AiOutlineLaptop, AiOutlineProject} from "react-icons/ai";
import { BrowserRouter as Router, Route, Routes, Link } from "react-router-dom";
import {GiVideoCamera} from "react-icons/gi"
import {GrMonitor} from "react-icons/gr"


const MainButton = () => {
    return (
        <div className='absolute w-screen h-screen flex justify-center items-center z-20'>
            <div className='flex justify-center items-center space-x-4'>
                <Link to="/" className='flex items-center  h-[80%] rounded-br-xl rounded-tl-xl shadow-lg bg-gray-50 shadow-gray-600 m-4 p-4 cursor-pointer hover:scale-110 hover:transition-all hover:bg-blue-50 ease-in-out duration-200'>
                    <GiVideoCamera size={100} />
                    <span className='ml-4 pt-2 text-3xl font-medium'>Cameraman Simulator</span>
                </Link>
                <Link to="/display" className='flex items-center h-[80%] rounded-br-xl rounded-tl-xl shadow-lg bg-gray-50 shadow-gray-600 m-4 p-4 cursor-pointer hover:scale-110 hover:transition-all hover:bg-blue-50 ease-in-out duration-200'>
                    <GrMonitor size={100} />
                    <span className='ml-4 pt-2 text-3xl font-medium'>Displayer Simulator</span>
                </Link>
            </div>
        </div>
    );
}

export default MainButton;
