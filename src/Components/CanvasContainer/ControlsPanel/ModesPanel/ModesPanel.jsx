import * as React from 'react';
import Stack from "@mui/material/Stack";
import {styled} from "@mui/material/styles";
import {Button} from "@mui/material";

const BUTTON_LIST = ["Canvas", "HTML", "CSS"]
const ACTIVE_COLOR = {backgroundColor: "#6A0E0E"}

const ModesPanel = ({activeMode, SetActiveMode}) => {
    const onClickHandler = (id) => {
        SetActiveMode(id);
    }

    return (
        <Stack
            spacing={4}
            direction="row"
            sx={{m: '0 0 25px 50px'}}
        >
            {BUTTON_LIST.map((item, index) => {
                return <NavButton
                    key={"NavButton" + index}
                    onClick={() => {onClickHandler(index)}}
                    variant="contained"
                    sx={activeMode === index && ACTIVE_COLOR}
                >{item}</NavButton>
            })}
        </Stack>
    )
}

const NavButton = styled(Button)({
    width: 200,
    height: 50,
    borderRadius: '0 0 21px 21px',
    boxShadow: '0 3px 5px 2px rgba(0, 0, 0, .3)',
    fontFamily: 'Monospace',
    fontSize: 23,
});

export default ModesPanel;
