import React from "react";
import BlockItem from "./BlockItem/BlockItem";
import {connect} from "react-redux";
import {AddNewBlock, DeleteBlock} from "../../../Redux/CanvasReducer";
import {Box, IconButton} from "@mui/material";
import AddIcon from '@mui/icons-material/Add';
import {styled} from "@mui/material/styles";


const Canvas = (props) => {
    const newBlockClickHandler = () => {
        props.AddNewBlock()
    }
    const deleteBlockClickHandler = (index) => {
        props.DeleteBlock(index)
    }

    return (
        <CanvasWrapper>
            {props.canvasBody.map((block, index) => {
                return <BlockItem key={'BlockKey' + index} blockBody={block} deleteBlock={() => {deleteBlockClickHandler(index)}}/>
            })
            }
            <IconButton onClick={newBlockClickHandler} color="primary" aria-label="add new block to canvas"
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

const mapStateToProps = (state) => {
    return {
        canvasBody: state.canvasData,
    }
}

export default connect(mapStateToProps, {
    AddNewBlock,
    DeleteBlock,
})(Canvas);