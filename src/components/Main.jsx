import React from "react";
import { Link } from "react-router-dom";
import { GrMonitor } from "react-icons/gr";

const Main = () => {
    return (
        <div className="min-h-screen flex items-center justify-center bg-gray-50 py-12 px-4 sm:px-6 lg:px-8">
            <div className="max-w-md w-full space-y-8">
                <div>
                    <h2 className="mt-6 text-center text-3xl font-extrabold text-gray-900">
                        Learning Website
                    </h2>
                </div>
                <div>
                    <Link to="/landing">
                        <button
                            type={"button"}
                            className="group relative w-full flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                        >
              <span className="absolute left-0 inset-y-0 flex items-center pl-3">
                <GrMonitor className="h-5 w-5 text-indigo-500 group-hover:text-indigo-400" />
              </span>
                            Displayer Simulator
                        </button>
                    </Link>
                </div>
            </div>
        </div>
    );
};

export default Main;
