import React from 'react'
import {ComponentPreview, Previews} from '@react-buddy/ide-toolbox'
import {PaletteTree} from './palette'
import DisplayerPage from "../components/Display/DisplayerPage.jsx";

const ComponentPreviews = () => {
    return (
        <Previews palette={<PaletteTree/>}>
            <ComponentPreview path="/DisplayerPage">
                <DisplayerPage/>
            </ComponentPreview>
        </Previews>
    )
}

export default ComponentPreviews