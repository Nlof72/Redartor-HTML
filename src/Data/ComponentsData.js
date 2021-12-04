import ActionIcon from "../Assets/Icons/32x32/Action.png";
import ButtonIcon from "../Assets/Icons/32x32/Button.png";
import InputIcon from "../Assets/Icons/32x32/Input.png";
import TextIcon from "../Assets/Icons/32x32/Text.png";
import LinkIcon from "../Assets/Icons/32x32/Link.png";
import BoldIcon from "../Assets/Icons/32x32/Bold.png";
import ItalicIcon from "../Assets/Icons/32x32/Italic.png";
import HeadingIcon from "../Assets/Icons/32x32/Heading.png";
import MediaIcon from "../Assets/Icons/32x32/Media.png";
import ImageIcon from "../Assets/Icons/32x32/Image.png";
import VideoIcon from "../Assets/Icons/32x32/Video.png";
import AudioIcon from "../Assets/Icons/32x32/Audio.png";
import ContainerIcon from "../Assets/Icons/32x32/Container.png";
import LayoutIcon from "../Assets/Icons/32x32/Layout.png";
import DivIcon from "../Assets/Icons/32x32/Div.png";
import OtherIcon from "../Assets/Icons/32x32/Other.png";
import ListIcon from "../Assets/Icons/32x32/List.png";
import TableIcon from "../Assets/Icons/32x32/Table.png";


export const Topics = [

    {
        id: 1,
        name: "Элементы взаимодействия",
        type: "action",
        icon: ActionIcon
    },
    {
        id: 2,
        name: "Текст",
        type: "text",
        icon: TextIcon
    },
    {
        id: 3,
        name: "Мультимедия",
        type: "multimedia",
        icon: MediaIcon
    },
    {
        id: 4,
        name: "Контейнеры",
        type: "universal",
        icon: LayoutIcon
    },
    {
        id: 5,
        name: "Другое",
        type: "other",
        icon: OtherIcon
    }

]


export const Components = [
    {
        name: "Кнопка",
        type: "button",
        icon: ButtonIcon,
        css: {
            width: 200,
        },
        body: "Button",
        topicId: 1
    },
    {
        name: "Поле ввода",
        type: "input",
        icon: InputIcon,
        css: {},
        topicId: 1
    },
    {
        name: "Ссылка",
        type: "a",
        icon: LinkIcon,
        css: {},
        href: "#",
        body: "Hello world!",
        topicId: 2
    },
    {
        name: "Жирный текст",
        type: "b",
        icon: BoldIcon,
        css: {},
        body: "Hello world!",
        topicId: 2
    },
    {
        name: "Курсив",
        type: "i",
        icon: ItalicIcon,
        css: {},
        body: "Hello world!",
        topicId: 2
    },
    {
        name: "Заголовок",
        type: "h1",
        icon: HeadingIcon,
        css: {},
        body: "Hello world!",
        topicId: 2
    },
    {
        name: "Картинка",
        type: "img",
        icon: ImageIcon,
        css: {
            width: "50px",
            height: "50px",
        },
        src: "https://memepedia.ru/wp-content/uploads/2019/03/u-suka-10.jpg",
        topicId: 3
    },
    {
        name: "Видео",
        type: "video",
        icon: VideoIcon,
        css: {},
        src: "",
        topicId: 3
    },
    {
        name: "Аудио",
        type: "audio",
        icon: AudioIcon,
        css: {},
        src: "",
        topicId: 3
    },
    {
        name: "Контейнер медиа",
        type: "iframe",
        icon: ContainerIcon,
        css: {},
        src: "",
        topicId: 3
    },

    {
        name: "Блок",
        type: "div",
        icon: DivIcon,
        css: {
            border: "1px solid black",
            width: "200px",
            height: "200px"
        },
        body: "Hello world!",
        topicId: 4
    },
    {
        name: "Список",
        type: "ul",
        icon: ListIcon,
        css: {},
        topicId: 5
    },
    {
        name: "Таблица",
        type: "table",
        icon: TableIcon,
        css: {
            border: "1px solid black"
        },
        topicId: 5
    }
]
