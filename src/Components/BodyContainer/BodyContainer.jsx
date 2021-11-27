import * as React from 'react';
import ControlsPanel from "./ControlsPanel/ControlsPanel";
import Canvas from "./Canvas/Canvas";
import {useState} from "react";
import CodeArea from "./CodeArea/CodeArea";
import {styled} from "@mui/material/styles";
import {Box} from "@mui/material";


const ModeRenderSelector = (currentMode, codeText) => {
    switch (currentMode) {
        case 0:
            return <Canvas/>
        case 1:
            return <CodeArea mode={currentMode} code={HTML_TEMPLATE}/>
        case 2:
            return <CodeArea mode={currentMode} code={CSS_TEMPLATE}/>
        default:
            return "Error: Active mode."
    }
}

const BodyContainer = () => {
    const switchMode = (id) => {
        setActiveMode(id);
        //TODO: Реализовать логику переключения режимов
    }

    const [activeMode, setActiveMode] = useState(0);
    return (
        <>
            <ControlsPanel activeMode={activeMode} SetActiveMode={switchMode}/>
            <BodyWrapper>{ModeRenderSelector(activeMode)}</BodyWrapper>
        </>
    )
}

const BodyWrapper = styled(Box)({
    width: "95%",
    height: "89vh",
    margin: "auto",
    backgroundColor: "white",
    border: "1mm solid #683B3B",
})


const CSS_TEMPLATE = `background-color: powderblue;
h1 {
    color: blue;
    font-family: verdana;
    font-size: 300%;
}
p  {
    color: red;
    font-family: courier;
    font-size: 160%;
}
`

const HTML_TEMPLATE = `<!DOCTYPE html>
<html>
<head>
<meta http-equiv="Content-Type" content="text/html; charset=utf-8">
<title>Пример веб-страницы</title>
<style>
body {background-color: powderblue;}
h1   {color: blue;}
p    {color: red;}
</style>
</head>
<body>

<h1>Это заголовок</h1>
<p>Это параграф.</p>

</body>
</html>
body {
    background-color: powderblue;
}
h1 {
    color: blue;
}
p {
    color: red;
}
<!DOCTYPE html>
<html>
<head>
<style>
h1 {
    color: blue;
    font-family: verdana;
    font-size: 300%;
}
p  {
    color: red;
    font-family: courier;
    font-size: 160%;
}
</style>
</head>
<body>
`

export default BodyContainer;