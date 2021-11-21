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

const buttonsList = [
    "Canvas",
    "HTML",
    "CSS",
]

const ModesPanel = ({activeMode, SetActiveMode}) => {
    const OnClickHandler = (id) => {
        SetActiveMode(id);
    }

    return (
        <Stack
            spacing={4}
            direction="row"
            sx={{m: '0 0 25px 50px'}}
        >
            {buttonsList.map((item, index) => {
                return <NavButton
                    key={"NavButton" + index}
                    onClick={() => {OnClickHandler(index)}}
                    variant="contained"
                    sx={activeMode === index && {backgroundColor: "#6A0E0E"}}
                >{item}</NavButton>
            })}
        </Stack>
    )
}

export default ModesPanel;