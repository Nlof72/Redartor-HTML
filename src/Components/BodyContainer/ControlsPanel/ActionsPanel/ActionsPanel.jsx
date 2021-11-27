import * as React from 'react';
import Stack from "@mui/material/Stack";
import CleaningServicesIcon from '@mui/icons-material/CleaningServices';
import DownloadIcon from '@mui/icons-material/Download';
import {ClearCanvas} from "../../../../Redux/CanvasReducer";
import {connect} from "react-redux";
import {IconButton} from "@mui/material";

const ActionsPanel = (props) => {
    const OnCleanClick = () => {
        props.ClearCanvas()
    }

    return (
        <Stack
            spacing={5}
            direction="row"
            justifyContent="center"
            alignItems="center"
            sx={{m: 3}}
        >
            <IconButton onClick={() => {
                if (window.confirm('Are you sure you wish to clear canvas? Your data will be deleted.')) OnCleanClick()
            }} color="inherit" aria-label="clear canvas">
                <CleaningServicesIcon fontSize="large"/>
            </IconButton>

            <IconButton  color="inherit" aria-label="download canvas">
                <DownloadIcon fontSize='large'/>
            </IconButton>
        </Stack>
    )
}
const mapStateToProps = () => {
    return {}
}
export default connect(mapStateToProps, {
    ClearCanvas,
})(ActionsPanel);