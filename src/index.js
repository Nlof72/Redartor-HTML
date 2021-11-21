import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import {theme} from "./theme";
import {ThemeProvider} from "@mui/material/styles";


let tempStoreComponents = [
    {
        name: "Элементы взаимодействия",
        type: "action",
        components: [
            {
                name: "Кнопка",
                type: "button"
            },
            {
                name: "Поле ввода",
                type: "input"
            }
        ],
    },
    {
        name: "Текс",
        type: "text",
        components: [
            {
                name: "Ссылка",
                type: "link"
            },
            {
                name: "Жирный текст",
                type: "bold"
            },
            {
                name: "Курсив",
                type: "italic"
            },
            {
                name: "Загаловок",
                type: "heading"
            }
        ],

    },
    {
        name: "Мультимедия",
        type: "multimedia",
        components: [
            {
                name: "Картинка",
                type: "image"
            },
            {
                name: "Видео",
                type: "video"
            },
            {
                name: "Аудио",
                type: "audio"
            },
            {
                name: "Видео",
                type: "video"
            },
        ],

    },
    {
        name: "Не знаю что тут будет",
        type: "universal",
        components: [
            {
                name: "< div >",
                type: "div"
            }
        ],
    },
    {
        name: "Другое",
        type: "other",
        components: [
            {
                name: "Список",
                type: "list"
            },
            {
                name: "Таблица",
                type: "table"
            }
        ],

    },
]

ReactDOM.render(
    <ThemeProvider theme={theme}>
        <App componentsList={tempStoreComponents}/>
    </ThemeProvider>,
    document.getElementById('root')
);

reportWebVitals();
