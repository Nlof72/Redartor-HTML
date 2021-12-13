import * as React from 'react';
import Stack from "@mui/material/Stack";
import CleaningServicesIcon from '@mui/icons-material/CleaningServices';
import DownloadIcon from '@mui/icons-material/Download';
import {ClearCanvas} from "../../../../Redux/CanvasReducer";
import {connect, useSelector} from "react-redux";
import {IconButton} from "@mui/material";
import {getCSS, getHTML} from "../../../../Utils/Helpers/ConvertToMarkup";

const ActionsPanel = (props) => {
    let canvasData = useSelector((state) => state.canvasData);
    let HTML = getHTML(canvasData.canvas);
    let CSS = getCSS(canvasData.canvas);

    const handleHtmlClick = async () => {
        let data = new Blob([HTML], {type: 'text/html'}),
            htmlURL = window.URL.createObjectURL(data),
            tempLink = document.createElement('a');
        tempLink.href = htmlURL;
        tempLink.setAttribute('download', 'index.html');
        await tempLink.click();
    }

    const handleCSSClick = async () => {
        let data = new Blob([CSS], {type: 'text/css'}),
            cssURL = window.URL.createObjectURL(data),
            tempLink = document.createElement('a');
        tempLink.href = cssURL;
        tempLink.setAttribute('download', 'style.css');
        await tempLink.click();
    }

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

            <IconButton color="inherit" aria-label="download canvas" onClick={async () => {
                await handleHtmlClick();
                await handleCSSClick();
            }}>
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
