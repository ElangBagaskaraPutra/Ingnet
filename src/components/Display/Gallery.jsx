import React, { useState } from 'react';

function Gallery() {
    const [images, setImages] = useState([]);
    const [filteredImages, setFilteredImages] = useState([]);
    const [selectedImages, setSelectedImages] = useState([]);
    const [transformations, setTransformations] = useState({});
    const [zIndexValues, setZIndexValues] = useState({});

    const handleImageUpload = (event) => {
        const file = event.target.files[0];
        const url = URL.createObjectURL(file);
        const newImages = [...images, { name: file.name, url: url }];
        setImages(newImages);
        setFilteredImages(newImages);
    };

    const handleImageSearch = (event) => {
        const search = event.target.value;
        if (search === '') {
            setFilteredImages(images);
        } else {
            const filtered = images.filter(image => image.name.includes(search));
            setFilteredImages(filtered);
        }
    }

    const handleImageSelect = (index) => {
        const image = filteredImages[index];
        const isSelected = selectedImages.some(selectedImage => selectedImage.url === image.url);
        if (isSelected) {
            setSelectedImages(selectedImages.filter(selectedImage => selectedImage.url !== image.url));
        } else {
            setSelectedImages([...selectedImages, image]);
        }
    };

    const handleTransformationChange = (property, value, imageUrl) => {
        setTransformations(prevState => ({
            ...prevState,
            [imageUrl]: {
                ...prevState[imageUrl],
                [property]: value
            }
        }));
    };

    const handleDeleteGallery = () => {
        const newImages = images.filter(image => !selectedImages.includes(image));
        setImages(newImages);
        setFilteredImages(newImages);
        setSelectedImages([]);
    }

    const handleReset = () => {
        setTransformations({});
    }

    const handleZIndexChange = (value, imageUrl) => {
        setZIndexValues(prevState => ({
            ...prevState,
            [imageUrl]: value
        }));
    };



    return (
        <div className="flex h-screen">
            <div className={"p-4 w-1/4 bg-gray-400 "}>
                <input type="file" accept="image/*" onChange={handleImageUpload} /><br/><br/>
                <h1> Search: </h1>
                <input type={"search"} onChange={handleImageSearch} className={"border-2"}/>
            </div>
            <div className="w-3/4 bg-gray-200 relative">
                <div className="container aspect-[3840/896] bg-black overflow-hidden relative object-contain">
                    {selectedImages.map((image, ) => (
                        <div
                            key={image.url}
                            style={{
                                transform: `rotate(${transformations[image.url]?.rotation || 0}deg) scaleX(${transformations[image.url]?.scaleX || 1}) scaleY(${transformations[image.url]?.scaleY || 1}) translateX(${transformations[image.url]?.translateX || 0}px) translateY(${transformations[image.url]?.translateY || 0}px)`,
                                zIndex: zIndexValues[image.url] || 0
                            }}
                            className="absolute top-0 left-0 object-contain w-full h-full"
                        >
                            <img
                                src={image.url}
                                alt=""
                                className="object-contain w-full h-full"
                            />
                        </div>
                    ))}
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
            <div className="w-1/4 p-4 bg-gray-900 text-white">
                <button onClick={handleReset} className={"border-2 m-1"}> Reset </button>
                <button onClick={handleDeleteGallery} className={"border-2 m-1"}>Delete</button>
                {/* Sliders for transformation properties */}
                {selectedImages.map((image) => (
                    <div key={image.url}>
                        <br/><br/>
                        <h3>Transformations for {image.name}</h3>
                        <div>
                            <label>Rotation:</label>
                            <input type="range" min="-360" max="360" value={transformations[image.url]?.rotation || 0} onChange={(e) => handleTransformationChange('rotation', e.target.value, image.url)} />
                        </div>
                        <div>
                            <label>Scale X:</label>
                            <input type="range" min="0" max="10" step="0.01" value={transformations[image.url]?.scaleX || 1} onChange={(e) => handleTransformationChange('scaleX', e.target.value, image.url)} />
                        </div>
                        <div>
                            <label>Scale Y:</label>
                            <input type="range" min="0" max="10" step="0.01" value={transformations[image.url]?.scaleY || 1} onChange={(e) => handleTransformationChange('scaleY', e.target.value, image.url)} />
                        </div>
                        <div>
                            <label>Translate X:</label>
                            <input type="range" min="-1000" max="1000" step="0.1" value={transformations[image.url]?.translateX || 0} onChange={(e) => handleTransformationChange('translateX', e.target.value, image.url)} />
                        </div>
                        <div>
                            <label>Translate Y:</label>
                            <input type="range" min="-1000" max="1000" step="0.1" value={transformations[image.url]?.translateY || 0} onChange={(e) => handleTransformationChange('translateY', e.target.value, image.url)} />
                        </div>
                        <div>
                            <label>Layer:</label>
                            <input type="number" defaultValue={zIndexValues[image.url]?.zIndex} onChange={(e) => handleZIndexChange(parseInt(e.target.value), image.url)} />
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}

export default Gallery;
