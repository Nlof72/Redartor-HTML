import React from 'react';
import TableParameters from "./TableParameters/TableParameters";
import {useSelector} from "react-redux";


const getComponentParams = (compId, blockId, canvas) => {
    if (compId) {
        let component = canvas[blockId].find(item => item.id === compId);
        return {css: component.css, html: component.html}
    }

    return null;
}

const RightSideBar = () => {
    const canvasBody = useSelector((state) => state?.canvasData);
    let componentAttrs = getComponentParams(canvasBody.selectedComponentId, canvasBody.currentBlock, canvasBody.canvas);
    return (
        <TableParameters componentAttrs={componentAttrs} compId={canvasBody.selectedComponentId}
                         blockId={canvasBody.currentBlock}/>
    );
}

export default RightSideBar;