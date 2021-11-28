import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import {theme} from "./theme";
import {ThemeProvider} from "@mui/material/styles";
import {Provider} from "react-redux";
import store from "./Redux/Store";


ReactDOM.render(
    <ThemeProvider theme={theme}>
        <Provider store={store}>
            <App/>
        </Provider>
    </ThemeProvider>,
    document.getElementById('root')
);

reportWebVitals();
