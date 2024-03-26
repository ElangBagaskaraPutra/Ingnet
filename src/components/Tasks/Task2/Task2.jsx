import React, {useEffect, useState} from 'react';

function Task2() {
    const [images, setImages] = useState([
        {name : "Sikirinsut1", url : Sikirinsut1, rotation: 0, scaleX: 1, scaleY: 1, translateX: 0, translateY: 0},
        {name : "Sikirinsut2", url : Sikirinsut2, rotation: 0, scaleX: 1, scaleY: 1, translateX: 0, translateY: 0}
    ]);
    const [filteredImages, setFilteredImages] = useState([]);
    const [selectedImages, setSelectedImages] = useState([]);
    const [transformations, setTransformations] = useState({});
    const [zIndexValues, setZIndexValues] = useState({});
    const [tasks, setTasks] = useState([
        { name: "Rotate image 90 degrees", completed: false }
    ]);

    useEffect(() => {
        setFilteredImages(images);
    }, [images]);

    useEffect(() => {
        // Generate tasks based on transformations for each image
        const newTasks = selectedImages.flatMap(image => {
            const tolerance = 1;
            const toleranceTransform = 50;

            const rotation = transformations[image.url]?.rotation || 0;
            const translateX = transformations[image.url]?.translateX || 0;
            const translateY = transformations[image.url]?.translateY || 0;

            const requiredTransformationY = getRequiredTransformationY(image); // Get required transformation for the image
            const requiredTransformationX = getRequiredTransformationX(image); // Get required transformation for the image
            const requiredRotation = getRequiredRotation(image); // Get required rotation for the image

            const completeTransformationX = Math.abs(translateX - requiredTransformationX) <= toleranceTransform;
            const completeTransformationY = Math.abs(translateY - requiredTransformationY) <= toleranceTransform;
            const completeRotate = Math.abs(rotation - requiredRotation) <= tolerance;

            const tasks = [];

            tasks.push({
                name:`${image.name} Tasks:`,
                completed: areAllTasksCompleted(),
                exclamationMark: false

        });
            if (!completeRotate) {
                tasks.push({
                    name: `Rotate image ${image.name} ${requiredRotation} degrees`,
                    completed: completeRotate
                });
            } else {
                tasks.push({
                    name: `Rotate image ${image.name} ${requiredRotation} degrees`,
                    completed: completeRotate,
                    exclamationMark: true // Flag to indicate that an exclamation mark should be displayed
                });
            }

            if (!completeTransformationX) {
                tasks.push({
                    name: `Transform X to ${requiredTransformationX}`,
                    completed: completeTransformationX
                });
            } else {
                tasks.push({
                    name: `Transform X to ${requiredTransformationX}`,
                    completed: completeTransformationX,
                    exclamationMark: true // Flag to indicate that an exclamation mark should be displayed
                });
            }

            if (!completeTransformationY) {
                tasks.push({
                    name: `Transform Y to ${requiredTransformationY}`,
                    completed: completeTransformationY
                });
            } else {
                tasks.push({
                    name: `Transform Y to ${requiredTransformationY}`,
                    completed: completeTransformationY,
                    exclamationMark: true // Flag to indicate that an exclamation mark should be displayed
                });
            }

            return tasks;

        });

        // Set tasks for each image
        setTasks(newTasks);
    }, [selectedImages, transformations]);

    const getRequiredTransformationY = (image) => {
        if (image.name === 'Sikirinsut1') {
            return 2;
        } else if (image.name === 'Sikirinsut2') {
            return 2;
        }
        return 0;
    }

    const getRequiredTransformationX = (image) => {
        if (image.name === 'Sikirinsut1') {
            return 200;
        } else if (image.name === 'Sikirinsut2') {
            return 200;
        }
        return 0;
    }

    const getRequiredRotation = (image) => {
        if (image.name === 'Sikirinsut1') {
            return 90;
        } else if (image.name === 'Sikirinsut2') {
            return 45;
        }
        return 0;
    }

    const areAllTasksCompleted = () => {
        return tasks.every(task => task.completed);
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
                <h1> Search: </h1>
                <input type={"search"} onChange={handleImageSearch} className={"border-2"}/> <br/> <br/>
                <br/>
                <h2 className={"font-bold"}>Tasks List:</h2>
                <br/>
                <ul>
                    {tasks.map((task, index) => (
                        <li key={index}>

                            {task.name}
                            {task.completed && <span>&#10004;</span>}
                            {!task.completed && <span>&#9888;</span>}
                        </li>
                    ))}
                    {tasks.length === 0 && <li className={"font-bold"}>Select Image To Get Tasks</li>}
                    {tasks.length > 0 && areAllTasksCompleted() && <li className={"font-bold"}>Task Done</li>}
                </ul>
            </div>
            <div className="w-3/4 bg-gray-200 relative">
                <div className="container aspect-[3840/896] bg-black overflow-hidden relative object-contain">
                    {selectedImages.map((image, ) => (
                        <div
                            key={image.url}
                            style={{
                                transform: `rotate(${transformations[image.url]?.rotation || 0}deg) scaleX(${transformations[image.url]?.scaleX || 1}) scaleY(${transformations[image.url]?.scaleY || 1}) translateX(${transformations[image.url]?.translateX || 0}px) translateY(${transformations[image.url]?.translateY || 0}px)`,
                                zIndex: zIndexValues[image.url] || 0 // Dynamically assign z-index
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
                            <span>{transformations[image.url]?.rotation || 0} degrees</span> <br/>
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
                            <label>Transform X:</label>
                            <input type="range" min="-1000" max="1000" step="0.1" value={transformations[image.url]?.translateX || 0} onChange={(e) => handleTransformationChange('translateX', e.target.value, image.url)} />
                        </div>
                        <div>
                            <label>Transform Y:</label>
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

export default Task2;
