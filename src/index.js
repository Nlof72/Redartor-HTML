import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import {theme} from "./theme";
import {ThemeProvider} from "@mui/material/styles";


let tempStoreComponents = [
    {
        name: "Actions",
        components: ["< button >", "< input >"],
    },
    {
        name: "Text",
        components: ["< a >", "< b >", "< i >","< h >"]
    },
    {
        name: "Multimedia",
        components: ["< image >", "< video >", "< audio >", "< iframe >"]
    },
    {
        name: "Universal",
        components: ["< div >"]
    },
     {
        name: "Other",
        components: ["< ul >", "< lable >"]
    },

]

ReactDOM.render(
    <ThemeProvider theme={theme}>
        <App componentsList={tempStoreComponents}/>
    </ThemeProvider>,
    document.getElementById('root')
);

reportWebVitals();
