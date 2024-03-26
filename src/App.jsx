import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Main from "./components/Main.jsx"
import Header from "./components/Header.jsx"
import Gallery from "./components/Display/Gallery.jsx";
import LoginPage from "./components/Login.jsx";
import AboutPage from "./components/About.jsx";
import LandingPage from "./components/Display/LandingPage.jsx";
import Tasks from "./components/Display/Task.jsx";
import Task1 from "./components/Tasks/Task1/Task1.jsx";
import Task2 from "./components/Tasks/Task2/Task2.jsx";
import TaskBackup from "./components/Display/TaskBackup.jsx";
import Task2Back from "./components/Tasks/Task2/Task2Back.jsx";
import Task1Back from "./components/Tasks/Task1/Task1Back.jsx";

function App() {
    return (
        <Router>
            <div>
                <Header/>
                <Routes>
                    <Route path="/" element={
                        <>
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
                        </>
                    } />
                    <Route path="/tasks" element={
                        <>
                            <Tasks/>
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
                    <Route path={"taskbackup"} element={
                        <>
                            <TaskBackup/>
                        </>
                    } />
                    <Route path={"/task1back"} element={
                        <>
                            <Task1Back/>
                        </>
                    } />
                    <Route path={"/task2back"} element={
                        <>
                            <Task2Back/>
                        </>
                    } />
                </Routes>
            </div>
        </Router>
    );
}

export default App;
