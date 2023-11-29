import React from "react";
import { Link } from "react-router-dom";

const Header = () => {
    return (
        <header className="bg-purple-600 text-white p-4 w-full top-0 ">
            <div className={"flex"}>
                <div className={"w-full"}>
                    <h1 className="text-2xl align-middle justify-center">
                        <Link to={"/"} className={"text-white font-bold"}>
                            Perhimpunan Humas Siswa
                        </Link>
                    </h1>
                </div>
                <div className={""}>
                    <h1 className={"text-lg justify-end"}>
                        <Link to={"/login"} className={"text-white font-bold"}>
                            Login
                        </Link>
                    </h1>
                </div>

            </div>
        </header>
    );
};

export default Header;
