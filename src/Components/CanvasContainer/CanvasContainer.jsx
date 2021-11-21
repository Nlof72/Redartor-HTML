import * as React from 'react';
import ControlsPanel from "./ControlsPanel/ControlsPanel";
import Canvas from "./Canvas/Canvas";
import {useState} from "react";


const CanvasContainer = () => {
    const SetActiveMode = (id) => {
        setActiveMode(id);
        //TODO: Реализовать логику переключения режимов
    }

    const [activeMode, setActiveMode] = useState(0);
    return (
        <>
            <ControlsPanel activeMode={activeMode} SetActiveMode={SetActiveMode}/>
            <Canvas/>
        </>
    )
}

export default CanvasContainer;