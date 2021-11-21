import * as React from 'react';
import Stack from "@mui/material/Stack";
import CleaningServicesIcon from '@mui/icons-material/CleaningServices';
import DownloadIcon from '@mui/icons-material/Download';


const ActionsPanel = (props) => {
    return (
        <Stack
            spacing={2}
            direction="row"
            justifyContent="center"
            alignItems="center"
            sx={{m: 3}}
        >
            <CleaningServicesIcon fontSize='large'/>
            <DownloadIcon fontSize='large'/>
        </Stack>
    )
}

export default ActionsPanel;