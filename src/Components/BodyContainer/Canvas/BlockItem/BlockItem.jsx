import React from "react";
import {styled} from "@mui/material/styles";
import {Box, IconButton} from "@mui/material";
import ClearIcon from '@mui/icons-material/Clear';

const BlockWrapper = styled(Box)({
    minHeight: "15%",
    border: "1px solid lightgray",
})


const BlockItem = (props) => {
    return (
        <BlockWrapper onClick={props.selectBlock}>
            <IconButton onClick={props.deleteBlock} color="default" aria-label="add new block to canvas"
                        sx={{float: "right"}}>
                <ClearIcon fontSize="little"/>
            </IconButton>
            {props.blockBody.map((component) => {
                    const AddedComponent = component.componentType;
                    switch (component.componentType) {  // мне это очень не нравится (Настя)
                        case "input":
                            return (<AddedComponent style={component.css}/>);
                            break;
                        case "img":
                            return (<AddedComponent style={component.css} src={component.src}/>);
                            break;
                        case "a":
                            return (
                                <AddedComponent style={component.css} href={component.src}>Hello world! </AddedComponent>);
                            break;
                        case "list":
                            return (<AddedComponent style={component.css}>
                                <li>Text</li>
                            </AddedComponent>);
                            break;
                        case "table":
                            return (<AddedComponent style={component.css}>
                                <tr>
                                    <td>Text</td>
                                    <td>Text</td>
                                </tr>
                                <tr>
                                    <td>Text</td>
                                    <td>Text</td>
                                </tr>
                            </AddedComponent>);
                            break;
                        default:
                            return (<AddedComponent style={component.css}> Hello world! </AddedComponent>);
                            break;
                    }
                }
            )}
        </BlockWrapper>
    )
}

export default BlockItem;