import React from "react";
import {Link,} from "react-router-dom";
import example from "./Assets/Screenshot 2024-03-25 at 13.13.06.png"

const Task1Back = () => {
    return (
        <div className="min-h-screen flex items-center justify-center bg-gray-50 py-12 px-4 sm:px-6 lg:px-8">
            <div className="max-w-md w-full space-y-8">
                <div>
                    <h2 className="mt-6 text-center text-3xl font-extrabold text-gray-900">
                        Task 1
                    </h2>
                </div>
                <div>
                    <p className={"text-xl text-black text-center"}>The first task is a tutorial for this application.</p>
                    <p className={"text-xl text-black text-center"}>Inside here, there is an image of a cat and there is a task to try the transformation and rotation system</p>
                    <img src={example} alt={"Tutorial Image"} className={"object-center"}/>
                    <p className={"text-xl text-black text-center"}>When you are done doing the task, there will be an task done statement, and you can go into the next task</p>
                </div>
                <div className="max-w-md w-full space-y-8">
                    <Link to="/tasks">
                        <button
                            type={"button"}
                            className="group relative w-full flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                        >
            <span className="absolute left-0 inset-y-0 flex items-center pl-3">
            </span>
                            Back
                        </button>
                    </Link>
                </div>
                <div className="max-w-md w-full space-y-8">
                    <Link to="/task1">
                        <button
                            type={"button"}
                            className="group relative w-full flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                        >
            <span className="absolute left-0 inset-y-0 flex items-center pl-3">
            </span>
                            GO!
                        </button>
                    </Link>
                </div>
            </div>
        </div>
    );
};

export default Task1Back;
