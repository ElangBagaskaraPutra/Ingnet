import React, { useState } from "react";

const DisplayerPage = () => {
    const [selectedFile, setSelectedFile] = useState(null);
    const [rotation, setRotation] = useState(0);
    const [scaleX, setScaleX] = useState(1)
    const [scaleY, setScaleY] = useState(1)

    const handleFileUpload = (event) => {
        setSelectedFile(URL.createObjectURL(event.target.files[0]));
    };

    const handleRotateChange = (event) => {
        setRotation(event.target.value);
    };

    const handleScaleXChange = (event) => {
        setScaleX(event.target.value);
    }

    const handleScaleYChange = (event) => {
        setScaleY(event.target.value);
    }

    if (rotation <= 10){

    }

    return (
        <div>
            <input type="file" onChange={handleFileUpload}/>
            {selectedFile && <img src={selectedFile} alt="Uploaded content" style={{transform: `rotate(${rotation}deg) scaleX(${scaleX}) scaleY(${scaleY})` , filter: rotation > 180 ? 'blur(5px)' : 'none'}}/>}
            <input type="range" min="0" max="360" value={rotation} onChange={handleRotateChange}/>
            <input type={"range"} min={"0.5"} max={"2"} step={"0.01"}  value={scaleX} onChange={handleScaleXChange}/>
            <input type={"range"} min={"0.5"} max={"2"} step={"0.01"} value={scaleY} onChange={handleScaleYChange}/>
            if
            <h1>{scaleY}</h1>
            <h1>{scaleX}</h1>
            <h1>{rotation}</h1>

        </div>
    );
};

export default DisplayerPage;
