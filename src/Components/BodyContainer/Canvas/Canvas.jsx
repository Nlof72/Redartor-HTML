import React from "react";
import BlockItem from "./BlockItem/BlockItem";
import {AddNewBlock, DeleteBlock} from "../../../Redux/CanvasReducer";
import {Box, IconButton} from "@mui/material";
import AddIcon from '@mui/icons-material/Add';
import {styled} from "@mui/material/styles";
import {useDispatch, useSelector} from "react-redux";
import {HTML5Backend} from "react-dnd-html5-backend";
import {DndProvider} from "react-dnd";


const Canvas = (props) => {
    const dispatch = useDispatch();
    const canvasBody = useSelector((state) => state.canvasData);

    return (
        <CanvasWrapper>
            {
                canvasBody.canvas.map((block, index) => {
                    return (
                        <DndProvider backend={HTML5Backend}>
                            <BlockItem
                                key={'BlockKey-' + index}
                                blockIndex={index}
                                blockBody={block}
                                deleteBlock={() => {
                                    dispatch(DeleteBlock(index))
                                }}
                            />
                        </DndProvider>)
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