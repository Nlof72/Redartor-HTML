import React from "react";
import {styled} from "@mui/material/styles";
import {Box, IconButton} from "@mui/material";
import ClearIcon from '@mui/icons-material/Clear';
import ComponentItem from "./ComponentItem/ComponentItem";

const BlockWrapper = styled(Box)({
    minHeight: "15%",
    border: "1px solid lightgray",
})


const BlockItem = (props) => {
    return (
        <BlockWrapper>
            <IconButton onClick={props.deleteBlock} color="default" aria-label="add new block to canvas"
                        sx={{float: "right"}}>
                <ClearIcon fontSize="little"/>
            </IconButton>

            {props.blockBody.map((component) => {
                return (<ComponentItem {...component}/>);
            })}
        </BlockWrapper>
    )
}

export default BlockItem;