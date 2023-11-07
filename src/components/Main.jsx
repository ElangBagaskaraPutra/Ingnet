import React from "react";

const Main = () => {
    return (
        <div id={"main"} className={"relative"}>

            <img alt={"yeah"} className={"w-screen h-screen object-cover"} src={"https://th.bing.com/th/id/R.b17cfaee30f9544e8ae1848ca8503ded?rik=QKW4hZbSn5Y4rg&pid=ImgRaw&r=0"}/>
            <div className="absolute inset-0 bg-black bg-opacity-50"></div>
            <h1 className="absolute top-1/4 left-1/2 transform -translate-x-1/2 -translate-y-1/2 drop-shadow-2xl shadow-gray-600 text-white text-5xl font-bold">Learning Website</h1>
        </div>
    )
}

export default Main;
