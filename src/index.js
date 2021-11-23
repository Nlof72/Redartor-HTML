import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import {theme} from "./theme";
import {ThemeProvider} from "@mui/material/styles";

import ActionIcon from './Assets/Icons/32x32/Action.png'
import ButtonIcon from './Assets/Icons/32x32/Button.png'
import InputIcon from './Assets/Icons/32x32/Input.png'

import TextIcon from './Assets/Icons/32x32/Text.png'
import LinkIcon from './Assets/Icons/32x32/Link.png'
import BoldIcon from './Assets/Icons/32x32/Bold.png'
import ItalicIcon from './Assets/Icons/32x32/Italic.png'
import HeadingIcon from './Assets/Icons/32x32/Heading.png'

import MediaIcon from './Assets/Icons/32x32/Media.png'
import ImageIcon from './Assets/Icons/32x32/Image.png'
import VideoIcon from './Assets/Icons/32x32/Video.png'
import AudioIcon from './Assets/Icons/32x32/Audio.png'
import ContainerIcon from './Assets/Icons/32x32/Container.png'

import LayoutIcon from './Assets/Icons/32x32/Layout.png'
import DivIcon from './Assets/Icons/32x32/Div.png'

import OtherIcon from './Assets/Icons/32x32/Other.png'
import TableIcon from './Assets/Icons/32x32/Table.png'
import ListIcon from './Assets/Icons/32x32/List.png'


const tempStoreComponents = [
    {
        name: "Элементы взаимодействия",
        type: "action",
        icon: ActionIcon,
        components: [
            {
                name: "Кнопка",
                type: "button",
                icon: ButtonIcon,
            },
            {
                name: "Поле ввода",
                type: "input",
                icon: InputIcon,
            }
        ],
    },
    {
        name: "Текст",
        type: "text",
        icon: TextIcon,
        components: [
            {
                name: "Ссылка",
                type: "link",
                icon: LinkIcon,
            },
            {
                name: "Жирный текст",
                type: "bold",
                icon: BoldIcon,
            },
            {
                name: "Курсив",
                type: "italic",
                icon: ItalicIcon,
            },
            {
                name: "Заголовок",
                type: "heading",
                icon: HeadingIcon,
            }
        ],

    },
    {
        name: "Мультимедия",
        type: "multimedia",
        icon: MediaIcon,
        components: [
            {
                name: "Картинка",
                type: "image",
                icon: ImageIcon,
            },
            {
                name: "Видео",
                type: "video",
                icon: VideoIcon,
            },
            {
                name: "Аудио",
                type: "audio",
                icon: AudioIcon,
            },
            {
                name: "Контейнер медиа",
                type: "video",
                icon: ContainerIcon,
            },
        ],

    },
    {
        name: "Контейнеры",
        type: "universal",
        icon: LayoutIcon,
        components: [
            {
                name: "< div >",
                type: "div",
                icon: DivIcon,
            }
        ],
    },
    {
        name: "Другое",
        type: "other",
        icon: OtherIcon,
        components: [
            {
                name: "Список",
                type: "list",
                icon: ListIcon,
            },
            {
                name: "Таблица",
                type: "table",
                icon: TableIcon,
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
