import React from "react";
import {styled} from "@mui/material/styles";
import {Box, IconButton} from "@mui/material";
import ClearIcon from '@mui/icons-material/Clear';
import ComponentItem from "../ComponentItem/ComponentItem";
import {useDispatch, useSelector} from "react-redux";
import {SelectCurrentBlock, SelectCurrentComponent} from "../../../../Redux/CanvasReducer";
import {activeColor} from "../../../../theme";

const BlockWrapper = styled(Box)({
    minHeight: "15%",
    border: "2px solid lightgray",
})

const BlockItem = (props) => {
    const onSelectComponent = (id, blockItem) => {
        dispatch(SelectCurrentComponent(id, blockItem))
    }
    const currentBlock = useSelector((state) => state?.canvasData?.currentBlock);
    const dispatch = useDispatch();
    return (
        <BlockWrapper
            sx={currentBlock === props.blockIndex && {borderColor: activeColor}}
            onClick={() => (dispatch(SelectCurrentBlock(props.blockIndex)))
            }>

            <IconButton onClick={props.deleteBlock} color="default" aria-label="add new block to canvas"
                        sx={{float: "right"}}>
                <ClearIcon sx={{position:"absolute", right:"10px", top:"10px"}} fontSize="little"/>
            </IconButton>

            {props.blockBody.map((component) => {
                    return <ComponentItem {...component} blockIndex={props.blockIndex} onSelectItem={onSelectComponent}/>
                }
            )}
        </BlockWrapper>
    )
}

export default BlockItem;