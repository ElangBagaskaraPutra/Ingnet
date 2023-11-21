import React, { useState } from 'react';

function Gallery() {
    const [images, setImages] = useState([]);
    const [filteredImages, setFilteredImages] = useState([]);
    const [selectedImage, setSelectedImage] = useState(null);
    const [rotation, setRotation] = useState(0);
    const [scaleX, setScaleX] = useState(1)
    const [scaleY, setScaleY] = useState(1)
    const [newName, setNewName] = useState('');
    const [position, setPosition] = useState(0);

    const handleImageUpload = (event) => {
        const file = event.target.files[0];
        const url = URL.createObjectURL(file);
        const newImages = [...images, {name: file.name, url: url}];
        setImages(newImages);
        setFilteredImages(newImages);
    };

    const handleImageSelect = (index) => {
        setSelectedImage(filteredImages[index].url);
        setNewName(filteredImages[index].name);
    };

        const handleRotationChange = (event) => {
        setRotation(event.target.value);
    };

    const handleScaleXChange = (event) => {
        setScaleX(event.target.value);
    }

    const handleScaleYChange = (event) => {
        setScaleY(event.target.value);
    }

    const handlePositionChange = (event) => {
        setPosition(event.target.value);
    }

    const handleDeleteGallery = () => {
        const newImages = images.filter(image => image.url !== selectedImage);
        setImages(newImages);
        setFilteredImages(newImages);
        setSelectedImage(null);
    }


    const handleDelete = () => {
        setImages(images.filter(image => image !== selectedImage));
        setSelectedImage(null);
    }

    const handleImageSearch = (event) => {
        const search = event.target.value;
        if (search === '') {
            setFilteredImages(images);
        } else {
            const filtered = images.filter(image => image.name.includes(search));
            setFilteredImages(filtered);
        }
    }

    const handleReset = () => {
        setRotation(0);
        setScaleX(1);
        setScaleY(1);
    }

    const handleRename = () => {
        if (newName) {
            const newImages = images.map(image => {
                if (image.url === selectedImage) {
                    return {name: newName, url: image.url};
                } else {
                    return image;
                }
            });
            setImages(newImages);
            setFilteredImages(newImages);
            setNewName('');
        }
    }


    return (
        <div className="flex">
            <div className={"p-4 w-1/4"}>
                <input type="file" accept="image/*" onChange={handleImageUpload} /><br/><br/>
                <h1> Search: </h1>
                <input type={"search"} onChange={handleImageSearch} className={"border-2"}/>
            </div>
            <div className="w-3/4">
                <div className="container object-contain aspect-[3840/896] bg-black overflow-hidden">
                    {selectedImage && (
                        <div style={{ transform: `rotate(${rotation}deg) scaleX(${scaleX}) scaleY(${scaleY}) ` }} className="w-full h-full">
                            <img
                                src={selectedImage}
                                alt=""
                                className="object-contain w-full h-full"
                            />
                        </div>
                    )}
                </div>
                <div className="flex flex-wrap">
                    {filteredImages.map((image, index) => (
                        <img
                            key={image.url}
                            src={image.url}
                            alt={image.name}
                            className="w-64 h-64 object-contain cursor-pointer"
                            onClick={() => handleImageSelect(index)}
                        />
                    ))}
                </div>
            </div>
            <div className="w-1/4 p-4">
                <h1> Rename: </h1>
                <input type={"text"} onChange={(event) => setNewName(event.target.value)} value={newName} className={"border-2"}/>
                <button onClick={handleRename} className={"border-2 m-1"}>Rename</button>

                <h1> Rotation: </h1> <input type={"number"} value={rotation} onChange={handleRotationChange} className={"border-2"}/>
                <input type="range" min="-360" max="360" value={rotation} onChange={handleRotationChange} /> <br/> <br/>

                <h1> Scale Horizontal </h1> <input type={"number"} value={scaleX} step={"0.01"} onChange={handleScaleXChange} className={"border-2"}/>
                <input type={"range"} min={"0"} max={"10"} step={"0.01"}  value={scaleX} onChange={handleScaleXChange}/><br/> <br/>

                <h1> Scale Vertical </h1> <input type={"number"} value={scaleY} onChange={handleScaleYChange} className={"border-2"}/>
                <input type={"range"} min={"0"} max={"10"} step={"0.01"}  value={scaleY} onChange={handleScaleYChange}/> <br/> <br/>

                <button onClick={handleReset} className={"border-2 m-1"}> Reset </button>
                <button onClick={handleDelete} className={"border-2 m-1"}>Hide Layer</button>
                <button onClick={handleDeleteGallery} className={"border-2 m-1"}>Delete</button>
            </div>
            <div className={"w-1/4 bg-blue-300"}>
            </div>
        </div>
    );
}

export default Gallery;
