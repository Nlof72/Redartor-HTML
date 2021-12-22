import React from 'react';
import TableParameters from "./TableParameters/TableParameters";
import {useSelector} from "react-redux";


const getComponentParams = (compId, blockId, canvas) => {
    if (compId) {
        debugger;
        let component = canvas.map(elem => elem.find(ele => ele.id === compId)).find(el => el !== undefined);
        return {html: component.html, css: component.css,}
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