import React from "react";
import {BrowserRouter as Router, Link, Route, Routes} from "react-router-dom";
import {GrMonitor} from "react-icons/gr";

const AboutPage = () => {
    return (
        <div className="min-h-screen flex items-center justify-center bg-gray-50 py-12 px-4 sm:px-6 lg:px-8">
            <div className="max-w-md w-full space-y-8">
                <div>
                    <h2 className="mt-6 text-center text-3xl font-extrabold text-gray-900">
                        About
                    </h2>
                </div>
                <div>
                    <p className={"text-xl text-black text-center"}>This is a project for the 2021-2022 school year for the IA-CS class.</p>
                    <p className={"text-xl text-black text-center"}>This project is a displayer simulator, which allows the user to create a slideshow of images and videos.</p>
                </div>
            </div>
        </div>
    );
};

export default AboutPage;
