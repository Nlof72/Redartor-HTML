import React, {useCallback, useRef, useState} from "react";
import {styled} from "@mui/material/styles";
import {Box, IconButton} from "@mui/material";
import ClearIcon from '@mui/icons-material/Clear';
import ComponentItem from "../ComponentItem/ComponentItem";
import {useDispatch, useSelector} from "react-redux";
import {
    SelectCurrentBlock,
    SelectCurrentComponent, UpdateCanvas,
} from "../../../../Redux/CanvasReducer";
import {activeColor} from "../../../../theme";
import {useDrop} from "react-dnd";
import {ItemTypes} from "../../../../ItemTypesDND";

const BlockWrapper = styled(Box)({
    minHeight: "15%",
    border: "2px solid lightgray",
})

const BlockItem = (props) => {

    const onSelectComponent = (id, blockItem) => {
        dispatch(SelectCurrentComponent(id, blockItem))
    }
    const currentBlock = useSelector((state) => state?.canvasData?.currentBlock);
    const currentCanvas = useSelector((state) => state?.canvasData?.canvas)
    const dispatch = useDispatch();
    const [children, setChildren] = useState([]);

    const moveItem = useCallback((dragIndex, dragId, hoverIndex) => {

            let newCanvas = JSON.parse(JSON.stringify(currentCanvas));
            let draggedItem = newCanvas.map(elem => elem.find(ele => ele.id === dragId)).find(el => el !== undefined);
            let currentBlockItems = newCanvas[draggedItem.blockIndex];
            // let children = currentBlockItems.filter(item => item.parentId === draggedItem.id);
            // if (children.length !== 0) {
            //
            // }

            [currentBlockItems[dragIndex], currentBlockItems[hoverIndex]] = [currentBlockItems[hoverIndex], currentBlockItems[dragIndex]];
            // let leftSide = currentBlockItems.slice(0, hoverIndex);
            // let rightSide =  currentBlockItems.slice(hoverIndex);
            dispatch(UpdateCanvas(JSON.parse(JSON.stringify(newCanvas))))
        },
        [currentCanvas]);
    const moveItemToBlock = useCallback((draggedItemId, dropBlockIndex) => {

            let newCanvas = JSON.parse(JSON.stringify(currentCanvas));
            let draggedItem = newCanvas.map(elem => elem.find(ele => ele.id === draggedItemId)).find(el => el !== undefined);
            if (draggedItem.blockIndex === dropBlockIndex && draggedItem.parentId === 0) {
                return;
            }
            newCanvas[draggedItem.blockIndex] = newCanvas[draggedItem.blockIndex].filter(item => item.id !== draggedItemId);
            draggedItem.blockIndex = dropBlockIndex;
            draggedItem.parentId = 0;
            newCanvas[dropBlockIndex].push(draggedItem);
            console.log(newCanvas, "***newCanvas****1****")
            dispatch(UpdateCanvas(newCanvas))
        },
        [currentCanvas]);

    const moveItemIntoDiv = useCallback((dragIndex, dragId, hoverIndex) => {

            let newCanvas = JSON.parse(JSON.stringify(currentCanvas));
            let draggedItem = newCanvas.map(elem => elem.find(ele => ele.id === dragId)).find(el => el !== undefined);

            if (newCanvas[draggedItem.blockIndex][hoverIndex].componentType !== "div") return;
            if (draggedItem.parentId === newCanvas[draggedItem.blockIndex][hoverIndex].id) return;
            if (dragIndex + 1 === hoverIndex) return;

            draggedItem.parentId = newCanvas[draggedItem.blockIndex][hoverIndex].id;
            newCanvas[draggedItem.blockIndex] = newCanvas[draggedItem.blockIndex].filter((item, index) => index !== dragIndex);

            let leftPart = newCanvas[draggedItem.blockIndex].slice(0, hoverIndex);
            let rightPart = newCanvas[draggedItem.blockIndex].slice(hoverIndex);
            newCanvas[draggedItem.blockIndex] = [...leftPart, draggedItem, ...rightPart]
            console.log(newCanvas, "*******newCanvas*****")
            dispatch(UpdateCanvas(JSON.parse(JSON.stringify(newCanvas))))
        },
        [currentCanvas]);


    const ref = useRef(null);
    const [{handlerId}, drop] = useDrop({
        accept: ItemTypes.CARD,
        collect(monitor) {
            return {
                handlerId: monitor.getHandlerId()
            };
        },
        drop(item, monitor) {

            let draggedItemId = item.id;
            let dropBlockIndex = props.blockIndex;
            console.log(draggedItemId, dropBlockIndex)
            moveItemToBlock(draggedItemId, dropBlockIndex);
        }
    });
    drop(ref);


    return (
        <BlockWrapper
            ref={ref}
            sx={currentBlock === props.blockIndex && {borderColor: activeColor}}
            onClick={() => (dispatch(SelectCurrentBlock(props.blockIndex)))
            }>
            <IconButton onClick={props.deleteBlock} color="default" aria-label="add new block to canvas"
                        sx={{float: "right"}}>
                <ClearIcon fontSize="little"/>
            </IconButton>

            {props.blockBody.map((component, index) => {
                    return <ComponentItem children={children} setChildren={setChildren} {...component} index={index}
                                          blockIndex={props.blockIndex}
                                          onSelectItem={onSelectComponent} moveCard={moveItem}
                                          moveItemIntoDiv={moveItemIntoDiv}/>
                }
            )}
        </BlockWrapper>
    )
}

export default BlockItem;