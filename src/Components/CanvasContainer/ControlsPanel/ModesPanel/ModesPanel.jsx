import * as React from 'react';
import Stack from "@mui/material/Stack";
import {styled} from "@mui/material/styles";
import {Button} from "@mui/material";

const NavButton = styled(Button)({
    width: 200,
    height: 50,
    borderRadius: '0 0 21px 21px',
    boxShadow: '0 3px 5px 2px rgba(0, 0, 0, .3)',
    fontFamily: 'Monospace',
    fontSize: 23,
});

const ModesPanel = (props) => {
    return (
        <Stack
            spacing={4}
            direction="row"
            sx={{m: '0 0 25px 50px'}}
        >
            <NavButton variant="contained">Canvas</NavButton>
            <NavButton variant="contained">HTML</NavButton>
            <NavButton variant="contained">CSS</NavButton>
        </Stack>
    )
}

export default ModesPanel;