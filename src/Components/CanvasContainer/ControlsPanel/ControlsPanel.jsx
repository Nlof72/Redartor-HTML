import * as React from 'react';
import ModesPanel from "./ModesPanel/ModesPanel";
import ActionsPanel from "./ActionsPanel/ActionsPanel";
import {Stack} from "@mui/material";

const ControlsPanel = (props) => {
    return (
        <Stack
            direction="row"
            justifyContent="space-between"
        >
            <ModesPanel {...props}/>
            <ActionsPanel/>
        </Stack>
    )
}

export default ControlsPanel;