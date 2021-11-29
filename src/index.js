import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import {theme} from "./theme";
import {ThemeProvider} from "@mui/material/styles";
import {Provider} from "react-redux";
import store from "./Redux/Store";
import {DndProvider} from "react-dnd";
import {HTML5Backend} from "react-dnd-html5-backend";


ReactDOM.render(
    <ThemeProvider theme={theme}>
        <Provider store={store}>
            <DndProvider backend={HTML5Backend}>
            <App/>
            </DndProvider>
        </Provider>
    </ThemeProvider>,
    document.getElementById('root')
);

reportWebVitals();
