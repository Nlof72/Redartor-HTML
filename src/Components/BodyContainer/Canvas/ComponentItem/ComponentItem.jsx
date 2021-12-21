import React from "react";
import ClearIcon from "@mui/icons-material/Clear";
import {IconButton} from "@mui/material";


const ComponentItem = ({id, blockIndex, componentType, css, html, onSelectItem}) => {
    return (
        <span>
            {React.createElement(`${componentType}`,
                {
                    onClick: () => {
                        onSelectItem(id, blockIndex)
                    },
                    style: {...css, boxSizing: "border-box", position:"relative"},
                    ...html,
                }, (html?.content))}
            <IconButton color="default" sx={{position:"absolute", zIndex: 1000}}>
                <ClearIcon fontSize="little" sx={{}}/>
            </IconButton>
        </span>)
}

export default ComponentItem;




