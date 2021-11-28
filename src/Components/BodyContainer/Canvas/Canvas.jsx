import React from "react";
import BlockItem from "./BlockItem/BlockItem";
import {connect, useSelector} from "react-redux";
import {AddNewBlock, DeleteBlock} from "../../../Redux/CanvasReducer";
import {Box, IconButton} from "@mui/material";
import AddIcon from '@mui/icons-material/Add';
import {styled} from "@mui/material/styles";
import {useDispatch} from "react-redux";


const Canvas = (props) => {
    const dispatch = useDispatch();
    const canvasBody = useSelector((state) => state.canvasData);

    return (
        <CanvasWrapper>
            {
                canvasBody.map((block, index) => {
                    return <BlockItem key={'BlockKey-' + index} blockBody={block} deleteBlock={() => {
                        dispatch(DeleteBlock(index))
                    }}/>
                })
            }
            <IconButton onClick={() => {
                dispatch(AddNewBlock())
            }} color="primary" aria-label="add new block to canvas"
                        sx={{float: "right"}}>
                <AddIcon/>
            </IconButton>
        </CanvasWrapper>
    )
}

const CanvasWrapper = styled(Box)({
    overflowY: "auto",
    height: "100%",
})


export default Canvas;