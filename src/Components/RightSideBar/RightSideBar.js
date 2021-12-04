import React from 'react';
import TableParameters from "./TableParameters/TableParameters";
import {useSelector} from "react-redux";


const getComponentParams = (compId, blockId, canvas) => {
    if (compId) {
        let currentComponent = canvas[blockId].find(item => item.id === compId);
        return {...currentComponent.css, ...currentComponent.html, body: currentComponent.body};
    }
    return null;
}

const RightSideBar = () => {
    const canvasBody = useSelector((state) => state?.canvasData);
    let componentParams = getComponentParams(canvasBody.selectedComponentId, canvasBody.currentBlock, canvasBody.canvas);
    return (
        <TableParameters componentParams={componentParams}/>
    );
}

export default RightSideBar;