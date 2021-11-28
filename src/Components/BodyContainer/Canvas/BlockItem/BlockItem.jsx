import React from "react";
import {styled} from "@mui/material/styles";
import {Box, Button, IconButton} from "@mui/material";
import ClearIcon from '@mui/icons-material/Clear';

const BlockWrapper = styled(Box)({
    minHeight: "15%",
    border: "1px solid lightgray",
})

const RenderComponent = (component) => {
    const AddedComponent = component.type;
    // return ( <AddedComponent style={component.css}> Hello world <AddedComponent/> );
}

const BlockItem = (props) => {
    return (
        <BlockWrapper>
            <IconButton onClick={props.deleteBlock} color="default" aria-label="add new block to canvas"
                        sx={{float: "right"}}>
                <ClearIcon fontSize="little"/>
            </IconButton>
            {props.blockBody.map((component) => {
                debugger;
                    const AddedComponent = component.componentType;
                 return ( <AddedComponent style={component.css}> Hello world </AddedComponent> );
                }
            )}
        </BlockWrapper>
    )
}

export default BlockItem;