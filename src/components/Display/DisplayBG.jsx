import React from "react";

const DisplayBG = () => {
    return (
        <div>
            <div className={"absolute w-screen h-screen flex bg-gray-600"}>
                <div className={"absolute w-3/12 aspect-video flex bg-green-700 rounded-xl m-4 "}>
                </div>

                <div className={"absolute right-1/4 aspect-video w-3/12 flex bg-yellow-500 rounded-xl m-4 mr-10"}>
                </div>

                <div className={"absolute right-0 bg-blue-300 h-screen w-1/4"}>
                </div>
            </div>
        </div>
    )
}

export default DisplayBG