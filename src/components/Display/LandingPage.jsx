import React from "react";
import { Link } from "react-router-dom";

const LandingPage = () => {
    return (
        <div className='absolute w-screen h-screen flex justify-center items-center z-20'>
            <div className='flex justify-center items-center space-x-4'>

                <Link to="/display" className='flex items-center h-[80%] rounded-br-xl rounded-tl-xl shadow-lg bg-gray-50 shadow-gray-600 m-4 p-4 cursor-pointer hover:scale-110 hover:transition-all hover:bg-blue-50 ease-in-out duration-200'>
                    <span className='ml-4 pt-2 text-3xl font-medium'>Freeroam</span>
                </Link>
            </div>
            <div className='flex justify-center items-center space-x-4'>

                <Link to="/tasks" className='flex items-center h-[80%] rounded-br-xl rounded-tl-xl shadow-lg bg-gray-50 shadow-gray-600 m-4 p-4 cursor-pointer hover:scale-110 hover:transition-all hover:bg-blue-50 ease-in-out duration-200'>
                    <span className='ml-4 pt-2 text-3xl font-medium'>Tasked</span>
                </Link>
            </div>
        </div>
    );
}

export default LandingPage;