import React from "react";
import {styled} from "@mui/material/styles";
import {Box} from "@mui/material";


const CanvasWrapper = styled(Box)({
    width: "95%",
    height: "89vh",            //TODO: Опредлить и выверить по высоте страницы
    margin: "auto",
    // Клетки
    background: "linear-gradient( #bbb, transparent 1px), linear-gradient( 90deg, #bbb, transparent 1px)",
    backgroundSize: "20px 20px",
    backgroundPosition: "center center",
    //
    border: "1mm solid #683B3B",
})

const Canvas = () => {
    return (
        <>
            <CanvasWrapper></CanvasWrapper>
        </>
    )
}

export default Canvas;