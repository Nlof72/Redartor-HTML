import React from "react";
import {styled} from "@mui/material/styles";
import {Box, Button, IconButton} from "@mui/material";
import ClearIcon from '@mui/icons-material/Clear';

const BlockWrapper = styled(Box)({
    minHeight: "15%",
    border: "1px solid lightgray",
})

const RenderComponent = (type) => {
  switch (type) {
      case "button":
          return <Button variant="contained">Mock</Button>
      default:
          return null;
  }
}

const BlockItem = (props) => {
    return (
        <BlockWrapper>
            <IconButton onClick={props.deleteBlock} color="default" aria-label="add new block to canvas" sx={{float: "right"}}>
                <ClearIcon fontSize="little"/>
            </IconButton>
            {props.blockBody.map((component)=>(RenderComponent(component.type)))}
        </BlockWrapper>
    )
}

export default BlockItem;