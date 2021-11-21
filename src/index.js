import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import {theme} from "./theme";
import {ThemeProvider} from "@mui/material/styles";


const tempStoreComponents = [
    {
        name: "Элементы взаимодействия",
        type: "action",
        icon: "",
        components: [
            {
                name: "Кнопка",
                type: "button",
                icon: "",
            },
            {
                name: "Поле ввода",
                type: "input",
                icon: "",
            }
        ],
    },
    {
        name: "Тексt",
        type: "text",
        icon: "",
        components: [
            {
                name: "Ссылка",
                type: "link",
                icon: "",
            },
            {
                name: "Жирный текст",
                type: "bold",
                icon: "",
            },
            {
                name: "Курсив",
                type: "italic",
                icon: "",
            },
            {
                name: "Загаловок",
                type: "heading",
                icon: "",
            }
        ],

    },
    {
        name: "Мультимедия",
        type: "multimedia",
        icon: "",
        components: [
            {
                name: "Картинка",
                type: "image",
                icon: "",
            },
            {
                name: "Видео",
                type: "video",
                icon: "",
            },
            {
                name: "Аудио",
                type: "audio",
                icon: "",
            },
            {
                name: "Видео",
                type: "video",
                icon: "",
            },
        ],

    },
    {
        name: "Не знаю что тут будет",
        type: "universal",
        icon: "",
        components: [
            {
                name: "< div >",
                type: "div",
                icon: "",
            }
        ],
    },
    {
        name: "Другое",
        type: "other",
        icon: "",
        components: [
            {
                name: "Список",
                type: "list",
                icon: "",
            },
            {
                name: "Таблица",
                type: "table",
                icon: "",
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
