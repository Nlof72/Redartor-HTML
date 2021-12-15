import React, {useCallback, useState} from "react";
import {styled} from "@mui/material/styles";
import {Box, IconButton} from "@mui/material";
import ClearIcon from '@mui/icons-material/Clear';
import ComponentItem from "../ComponentItem/ComponentItem";
import {useDispatch, useSelector} from "react-redux";
import {SelectCurrentBlock, SelectCurrentComponent, UpdateCanvasOrder} from "../../../../Redux/CanvasReducer";
import {activeColor} from "../../../../theme";
import {useDrag, useDrop} from "react-dnd";

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

    const moveCard = useCallback((dragIndex, hoverIndex) => {
            let newCanvas = [...currentCanvas];
            let currentBlockItems = newCanvas[currentBlock];
            [currentBlockItems[dragIndex], currentBlockItems[hoverIndex]] = [currentBlockItems[hoverIndex], currentBlockItems[dragIndex]];
            dispatch(UpdateCanvasOrder(newCanvas))
        },
        [currentCanvas]);


    return (
        <BlockWrapper
            sx={currentBlock === props.blockIndex && {borderColor: activeColor}}
            onClick={() => (dispatch(SelectCurrentBlock(props.blockIndex)))
            }>
            <IconButton onClick={props.deleteBlock} color="default" aria-label="add new block to canvas"
                        sx={{float: "right"}}>
                <ClearIcon fontSize="little"/>
            </IconButton>

            {props.blockBody.map((component, index) => {
                    return <ComponentItem {...component} index={index} blockIndex={props.blockIndex}
                                          onSelectItem={onSelectComponent} moveCard={moveCard}/>
                }
            )}
        </BlockWrapper>
    )
}

export default BlockItem;