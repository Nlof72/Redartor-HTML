import * as React from 'react';
import ControlsPanel from "./ControlsPanel/ControlsPanel";
import Canvas from "./Canvas/Canvas";
import {useState} from "react";


const CanvasContainer = () => {
    const switchMode = (id) => {
        setActiveMode(id);
        //TODO: Реализовать логику переключения режимов
    }

    const [activeMode, setActiveMode] = useState(0);
    return (
        <>
            <ControlsPanel activeMode={activeMode} SetActiveMode={switchMode}/>
            <Canvas/>
        </>
    )
}

export default CanvasContainer;