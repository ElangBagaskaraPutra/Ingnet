import React, {useState} from "react";

const DisplayerPage = () => {
    const [selectedFile, setSelectedFile] = useState(null);

    const handleFileUpload = (event) => {
        setSelectedFile(URL.createObjectURL(event.target.files[0]));
    };

    return (
        <div className={"absolute w-screen h-screen flex justify-start p-4 items-end z-20"}>
            <input type="file" onChange={handleFileUpload} />
            {selectedFile && <img src={selectedFile} alt="Uploaded content" />}
        </div>
    )
};

export default DisplayerPage;
