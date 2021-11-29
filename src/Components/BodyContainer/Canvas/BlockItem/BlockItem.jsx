import React, {useState} from "react";
import {styled} from "@mui/material/styles";
import {Box, IconButton} from "@mui/material";
import ClearIcon from '@mui/icons-material/Clear';

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
                    const AddedComponent = component.componentType;
                    if (["input"].includes(component.componentType))
                        return (<AddedComponent style={component.css} src={component.src}/>);
                    else
                        return (
                            <AddedComponent style={component.css} href={component.href} src={component.src}>Hello
                                world!</AddedComponent>);
                }
            )}
        </BlockWrapper>
    )
}

export default BlockItem;