import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import MainButton from "./components/MainButton.jsx";
import DisplayerPage from "./components/Display/DisplayerPage.jsx";
import Main from "./components/Main.jsx"
import Header from "./components/Header.jsx"
import Menu from "./components/Menu.jsx"
import DisplayBack from "./components/Display/DisplayBG.jsx"

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
                            <DisplayerPage />

                    </>
                    } />
                </Routes>
            </div>
        </Router>
    );
}

export default App;
