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
                razmetka: <button/>
            },
            {
                name: "Поле ввода",
                type: "input",
                icon: "",
                razmetka: <input/>
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
                razmetka: <a/>
            },
            {
                name: "Жирный текст",
                type: "bold",
                icon: "",
                razmetka: <b>{"Text"}</b>
            },
            {
                name: "Курсив",
                type: "italic",
                icon: "",
                razmetka: <i>{"Text"}</i>
            },
            {
                name: "Загаловок",
                type: "heading",
                icon: "",
                razmetka: <h1>{"Text"}</h1>
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
                razmetka: <img/>
            },
            {
                name: "Видео",
                type: "video",
                icon: "",
                razmetka: <video/>
            },
            {
                name: "Аудио",
                type: "audio",
                icon: "",
                razmetka: <audio/>
            }
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
                razmetka: <div>{"AAAAAA"}</div>
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
                razmetka: <li><ul>{"строка"}</ul></li>
            },
            {
                name: "Таблица",
                type: "table",
                icon: "",
                razmetka: <table><td><tr>{"a"}</tr></td><td><tr>{"b"}</tr></td></table>
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
