import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import MainButton from "./components/MainButton.jsx";
import Main from "./components/Main.jsx"
import Header from "./components/Header.jsx"
import Gallery from "./components/Display/Gallery.jsx";
import LoginPage from "./components/Login.jsx";
import AboutPage from "./components/About.jsx";
import LandingPage from "./components/Display/LandingPage.jsx";
import Tasks from "./components/Display/Task.jsx";
import Task1 from "./components/Tasks/Task1/Task1.jsx";
import Task2 from "./components/Tasks/Task2/Task2.jsx";

function App() {
    return (
        <Router>
            <div>
                <Header/>
                <Routes>
                    <Route path="/" element={
                        <>
                            <MainButton />
                            <Main />
                        </>
                    } />
                    <Route path="/display" element={
                        <>
                            <Gallery/>

                    </>
                    } />
                    <Route path="/login" element={
                        <>
                            <LoginPage/>
                        </>
                    } />
                    <Route path="/about" element={
                        <>
                            <AboutPage/>
                        </>
                    } />
                    <Route path="/landing" element={
                        <>
                            <LandingPage/>
                            <Main />
                        </>
                    } />
                    <Route path="/tasks" element={
                        <>
                            <Tasks/>
                            <Main />
                        </>
                    } />
                    <Route path="/task1" element={
                        <>
                            <Task1/>
                        </>
                    } />
                    <Route path="/task2" element={
                        <>
                            <Task2/>
                        </>
                    } />
                </Routes>
            </div>
        </Router>
    );
}

export default App;
