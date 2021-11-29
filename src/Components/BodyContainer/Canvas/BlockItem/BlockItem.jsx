import React from "react";
import {styled} from "@mui/material/styles";
import {Box, IconButton} from "@mui/material";
import ClearIcon from '@mui/icons-material/Clear';
import ComponentItem from "./ComponentItem/ComponentItem";
import {useDispatch} from "react-redux";
import {SelectCurrentBlock, SelectCurrentComponent} from "../../../../Redux/CanvasReducer";

const BlockWrapper = styled(Box)({
    minHeight: "15%",
    border: "1px solid lightgray",
})


const BlockItem = (props) => {
    const onSelectComponent = (id, blockItem) => {
        // console.log(id !== canvasBody.selectedComponentId)
        // console.log(id, "*", canvasBody.selectedComponentId)
        // if (id === canvasBody.selectedComponentId) { //TODO Пофиксить это говно (миллион вызовов)
            console.log('Ping')
            // console.log(canvasBody.selectedComponentId)
            // console.log(id)
            dispatch(SelectCurrentComponent(id, blockItem))
        // }
    }
    const dispatch = useDispatch();

    return (
        <BlockWrapper onClick={()=>{dispatch(SelectCurrentBlock(props.blockIndex))}}>
            <IconButton onClick={props.deleteBlock} color="default" aria-label="add new block to canvas"
                        sx={{float: "right"}}>
                <ClearIcon fontSize="little"/>
            </IconButton>

            {props.blockBody.map((component) => {
                    return <ComponentItem {...component} blockIndex={props.blockIndex} onSelectItem={onSelectComponent}/>
                }
            )}
        </BlockWrapper>
    )
}

export default BlockItem;