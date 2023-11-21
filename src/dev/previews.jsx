import React from 'react'
import {ComponentPreview, Previews} from '@react-buddy/ide-toolbox'
import {PaletteTree} from './palette'
import DisplayerPage from "../components/Display/DisplayerPage.jsx";
import Gallery from "../components/Display/Gallery.jsx";
import App from "../App.jsx";

const ComponentPreviews = () => {
    return (
        <Previews palette={<PaletteTree/>}>
            <ComponentPreview path="/DisplayerPage">
                <DisplayerPage/>
            </ComponentPreview>
            <ComponentPreview path="/Gallery">
                <Gallery/>
            </ComponentPreview>
            <ComponentPreview path="/App">
                <App/>
            </ComponentPreview>
        </Previews>
    )
}

export default ComponentPreviews