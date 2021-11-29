import React from 'react';
import TableParameters from "./TableParameters/TableParameters";
import {useSelector} from "react-redux";

// АХТУНГ КОСТЫЛИ
function RightSideBar() {
    const canvasBody = useSelector((state) => state.canvasData);

    let componentId = canvasBody.selectedComponentId;
    let blockId = canvasBody.currentBlock;
    let currentComponent = null
    if (componentId)
        currentComponent = canvasBody.canvas[blockId].find(item => item.id === componentId);
    let compProps = null;
    if (currentComponent)
        compProps = {...currentComponent.css, ...currentComponent.html, body: currentComponent.body}
    return (
        <TableParameters comProps={compProps}/>
    );
}


export default RightSideBar;