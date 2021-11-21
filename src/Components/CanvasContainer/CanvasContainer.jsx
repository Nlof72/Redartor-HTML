import * as React from 'react';
import ControlsPanel from "./ControlsPanel/ControlsPanel";
import Canvas from "./Canvas/Canvas";


const CanvasContainer = (props) => {
    return (
        <>
            <ControlsPanel/>
            <Canvas/>
        </>
    )
}

export default CanvasContainer;