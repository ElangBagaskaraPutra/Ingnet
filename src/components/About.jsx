import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

const AboutPage = () => {

        return (
            <div className={"flex justify-center h-screen bg-gray-200"}>
                <div className={""}>
                    <h1 className={"text-5xl font-bold text-black text-center m-4"}>About</h1>
                    <p className={"text-xl text-black text-center"}>This is a project for the 2021-2022 school year for the IA-CS class.</p>
                    <p className={"text-xl text-black text-center"}>This project is a displayer simulator, which allows the user to create a slideshow of images and videos.</p>
                </div>
            </div>
        );
}

export default AboutPage;