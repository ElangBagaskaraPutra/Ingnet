import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import axios from "axios";

const Tasks = () => {
    const [completedTasks, setCompletedTasks] = useState([]);

    useEffect(() => {
        // Fetch completed tasks for the current user from the backend
        const fetchCompletedTasks = async () => {
            try {
                const response = await axios.get("/api/user/completed-tasks");
                setCompletedTasks(response.data.completedTasks);
            } catch (error) {
                console.error("Error fetching completed tasks:", error);
            }
        };

        fetchCompletedTasks();
    }, []);

    const isTaskCompleted = (taskNumber) => {
        return completedTasks.includes(taskNumber);
    };

    return (
        <div className="min-h-screen flex flex-col items-center justify-center bg-gray-50 py-12 px-4 sm:px-6 lg:px-8">
            <div className="max-w-md w-full space-y-8">
                <div>
                    <h2 className="mt-6 text-center text-3xl font-extrabold text-gray-900 p-4">
                        Tasked Mode
                    </h2>
                </div>

                <div className="max-w-md w-full space-y-8 mt-4">
                    <Link to="/task1">
                        <button
                            type={"button"}
                            className={`group relative w-full flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md ${
                                isTaskCompleted(1)
                                    ? "bg-purple-600 text-white"
                                    : "bg-gray-400 text-gray-700"
                            } ${
                                !isTaskCompleted(1) && "pointer-events-none"
                            } hover:bg-purple-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-purple-500`}
                            disabled={!isTaskCompleted(1)}
                        >
                            Task Number 1
                        </button>
                    </Link>
                </div>

                <div className="max-w-md w-full space-y-8 mt-4">
                    <Link to="/task2">
                        <button
                            type={"button"}
                            className={`group relative w-full flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md ${
                                isTaskCompleted(2)
                                    ? "bg-purple-600 text-white"
                                    : "bg-gray-400 text-gray-700"
                            } ${
                                !isTaskCompleted(2) && "pointer-events-none"
                            } hover:bg-purple-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-purple-500`}
                            disabled={!isTaskCompleted(2)}
                        >
                            Task Number 2
                        </button>
                    </Link>
                </div>

                <div className="max-w-md w-full space-y-8 mt-4">
                    <Link to="/landing">
                        <button
                            type={"button"}
                            className="group relative w-full flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                        >
                            Back
                        </button>
                    </Link>
                </div>
            </div>
        </div>
    );
};

export default Tasks;
