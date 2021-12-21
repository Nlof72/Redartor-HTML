import React from "react";
import ClearIcon from "@mui/icons-material/Clear";
import {IconButton} from "@mui/material";
import {styled} from "@mui/styles";


const ComponentItem = ({id, blockIndex, componentType, css, html, onSelectItem}) => {
    return (
        <ContainerBlock>
            <InnerButton>
                <ClearIcon fontSize="little"/>
            </InnerButton>
            {React.createElement(`${componentType}`,
                {
                    onClick: () => {
                        onSelectItem(id, blockIndex)
                    },
                    style: {...css},
                    ...html,
                }, (html?.content))}


        </ContainerBlock>
    )
}

export default ComponentItem;




const ContainerBlock = styled('div')({
    position: "relative",
    padding: 20
})

const InnerButton = styled('div')({
    position: "absolute",
    top: 0,
    right: 0,
    cursor: "pointer",
})

