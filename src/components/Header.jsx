import React from "react";
import { Link } from "react-router-dom";

const Header = () => {
    return (
        <header className="bg-purple-600 text-white p-4 w-full top-0 overflow-hidden">
            <div className={"flex"}>
                <div className={"w-full"}>
                    <h1 className="text-2xl align-middle justify-start">
                        <Link to={"/"} className={"text-white font-bold"}>
                            CS IA
                        </Link>
                    </h1>
                </div>
                <div className={""}>
                    <h1 className={"text-lg justify-end mr-4"}>
                        <Link to={"/login"} className={"text-white font-bold"}>
                            Login
                        </Link>
                    </h1>
                </div>
                <div>
                    <h1 className={"text-lg justify-end"}>
                        <Link to={"/about"} className={"text-white font-bold"}>
                            About
                        </Link>
                    </h1>
                </div>

            </div>
        </header>
    );
};

export default Header;
