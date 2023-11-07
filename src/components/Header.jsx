import React from "react";
import { Link } from "react-router-dom";

const Header = () => {
    return (
        <header className="bg-purple-600 text-white p-4 w-screen top-0 ">
            <h1 className="text-2xl flex justify-center">
                <Link to={"/"} className={"text-white font-bold"}>
                    Perhimpunan Humas Siswa
                </Link>
            </h1>
        </header>
    );
};

export default Header;
