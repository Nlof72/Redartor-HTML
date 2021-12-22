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
        html: {
            content: "New button",
            disabled: false,
        },
        css: {
            width: "200px",
            height: "25px",

            borderColor: "",
            borderWidth: "",
            borderStyle: "",
            color: "#000000",
            backgroundColor: "",
            backgroundImage: "",
            fontSize: "",
            fontFamily: "Times",
            textAlign: "",
            lineHeight: "",
            letterSpacing: "",
            marginLeft: "",
            marginTop: "",
            marginRight: "",
            marginBottom: "",
            paddingLeft: "",
            paddingTop: "",
            paddingRight: "",
            paddingBottom: "",

        },
        topicId: 1
    },
    {
        name: "Поле ввода",
        type: "input",
        icon: InputIcon,
        html: {
            type: "text",
            src: ""
        },
        css: {
            borderColor: "",
            borderWidth: "",
            borderStyle: "",
            color: "",
            backgroundColor: "",
            backgroundImage: "",
            fontSize: "",
            fontFamily: "",
            textAlign: "",
            lineHeight: "",
            letterSpacing: "",
            marginLeft: "",
            marginTop: "",
            marginRight: "",
            marginBottom: "",
            paddingLeft: "",
            paddingTop: "",
            paddingRight: "",
            paddingBottom: "",
            width: "200px",
            height: "25px"
        },
        topicId: 1
    },
    {
        name: "Ссылка",
        type: "a",
        icon: LinkIcon,
        html: {
            content: "Hello world!",
            href: "#",
        },
        css: {
            borderColor: "",
            borderWidth: "",
            borderStyle: "",
            color: "",
            backgroundColor: "",
            backgroundImage: "",
            fontSize: "",
            fontFamily: "",
            textAlign: "",
            lineHeight: "",
            letterSpacing: "",
            marginLeft: "",
            marginTop: "",
            marginRight: "",
            marginBottom: "",
            paddingLeft: "",
            paddingTop: "",
            paddingRight: "",
            paddingBottom: "",},
        topicId: 2
    },
    {
        name: "Жирный текст",
        type: "b",
        icon: BoldIcon,
        css: {
            borderColor: "",
            borderWidth: "",
            borderStyle: "",
            color: "",
            backgroundColor: "",
            backgroundImage: "",
            fontSize: "",
            fontFamily: "",
            textAlign: "",
            lineHeight: "",
            letterSpacing: "",
            marginLeft: "",
            marginTop: "",
            marginRight: "",
            marginBottom: "",
            paddingLeft: "",
            paddingTop: "",
            paddingRight: "",
            paddingBottom: "",},
        html: {
            content: "Hello world!",
        },
        topicId: 2
    },
    {
        name: "Курсив",
        type: "i",
        icon: ItalicIcon,
        html: {
            content: "Hello world!",
        },
        css: {
            borderColor: "",
            borderWidth: "",
            borderStyle: "",
            color: "",
            backgroundColor: "",
            backgroundImage: "",
            fontSize: "",
            fontFamily: "",
            textAlign: "",
            lineHeight: "",
            letterSpacing: "",
            marginLeft: "",
            marginTop: "",
            marginRight: "",
            marginBottom: "",
            paddingLeft: "",
            paddingTop: "",
            paddingRight: "",
            paddingBottom: "",},
        topicId: 2
    },
    {
        name: "Заголовок",
        type: "h1",
        icon: HeadingIcon,
        html: {
            content: "Hello world!",
        },
        css: {
            borderColor: "",
            borderWidth: "",
            borderStyle: "",
            color: "",
            backgroundColor: "",
            backgroundImage: "",
            fontSize: "",
            fontFamily: "",
            textAlign: "",
            lineHeight: "",
            letterSpacing: "",
            marginLeft: "",
            marginTop: "",
            marginRight: "",
            marginBottom: "",
            paddingLeft: "",
            paddingTop: "",
            paddingRight: "",
            paddingBottom: "",},
        topicId: 2
    },
    {
        name: "Картинка",
        type: "img",
        icon: ImageIcon,
        html: {
            src: "https://www.masala.com/cloud/2021/07/28/8DKbhQ8H-SmudgeCat.jpg-1200x675.jpg",
            alt: "",
        },
        css: {
            width: "150px",
            height: "150px",
            borderColor: "",
            borderWidth: "",
            borderStyle: "",
            color: "",
            backgroundColor: "",
            backgroundImage: "",
            fontSize: "",
            fontFamily: "",
            textAlign: "",
            lineHeight: "",
            letterSpacing: "",
            marginLeft: "",
            marginTop: "",
            marginRight: "",
            marginBottom: "",
            paddingLeft: "",
            paddingTop: "",
            paddingRight: "",
            paddingBottom: "",
        },
        topicId: 3
    },
    {
        name: "Видео",
        type: "video",
        icon: VideoIcon,
        html: {
            src: "https://www.w3schools.com/html/movie.mp4",
            controls: true,
            autoplay: false,
            loop: true,
        },
        css: {
            width: "250px",
            height: "250px",
            borderColor: "",
            borderWidth: "",
            borderStyle: "",
            color: "",
            backgroundColor: "",
            backgroundImage: "",
            fontSize: "",
            fontFamily: "",
            textAlign: "",
            lineHeight: "",
            letterSpacing: "",
            marginLeft: "",
            marginTop: "",
            marginRight: "",
            marginBottom: "",
            paddingLeft: "",
            paddingTop: "",
            paddingRight: "",
            paddingBottom: "",
        },
        topicId: 3
    },
    {
        name: "Аудио",
        type: "audio",
        icon: AudioIcon,
        html: {
            src: "",
            controls: true,
            autoplay: false,
            loop: true,
        },
        css: {
            borderColor: "",
            borderWidth: "",
            borderStyle: "",
            color: "",
            backgroundColor: "",
            backgroundImage: "",
            fontSize: "",
            fontFamily: "",
            textAlign: "",
            lineHeight: "",
            letterSpacing: "",
            marginLeft: "",
            marginTop: "",
            marginRight: "",
            marginBottom: "",
            paddingLeft: "",
            paddingTop: "",
            paddingRight: "",
            paddingBottom: "",},
        topicId: 3
    },
    {
        name: "Контейнер медиа",
        type: "iframe",
        icon: ContainerIcon,
        html: {
            src: "https://www.youtube.com/embed/XuXZAXV7NM0?start=220"
        },
        css: {
            width: "480px",
            height: "270px",
            borderColor: "",
            borderWidth: "",
            borderStyle: "",
            color: "",
            backgroundColor: "",
            backgroundImage: "",
            fontSize: "",
            fontFamily: "",
            textAlign: "",
            lineHeight: "",
            letterSpacing: "",
            paddingLeft: "",
            paddingTop: "",
            paddingRight: "",
            paddingBottom: "",
        },
        topicId: 3
    },
    {
        name: "Блок",
        type: "div",
            icon: DivIcon,
            html: {
                content: "Im Div!"
            },
            css: {
                display: "flex",
                justifyContent: "flex-start",
                flexDirection: "row",
                width: "200px",
                height: "200px",
                borderColor: "",
                borderWidth: "",
                borderStyle: "",
                color: "",
                backgroundColor: "",
                backgroundImage: "",
                fontSize: "",
                fontFamily: "",
                textAlign: "",
                lineHeight: "",
                letterSpacing: "",
                marginLeft: "",
                marginTop: "",
                marginRight: "",
                marginBottom: "",
                paddingLeft: "",
                paddingTop: "",
                paddingRight: "",
                paddingBottom: "",
        },
        topicId: 4
    },
    {
        name: "Список",
        type: "ul",
        icon: ListIcon,
        html: {
            type: "disc",
        },
        css: {borderColor: "",
            borderWidth: "",
            borderStyle: "",
            color: "",
            backgroundColor: "",
            backgroundImage: "",
            fontSize: "",
            fontFamily: "",
            textAlign: "",
            lineHeight: "",
            letterSpacing: "",
            marginLeft: "",
            marginTop: "",
            marginRight: "",
            marginBottom: "",
            paddingLeft: "",
            paddingTop: "",
            paddingRight: "",
            paddingBottom: "",},
        rowsCount: 0,
        topicId: 5
    },
    {
        name: "Таблица",
        type: "table",
        icon: TableIcon,
        html: {},
        css: {
            width: "200px",
            height: "200px",
            borderColor: "",
            borderWidth: "",
            borderStyle: "",
            color: "",
            backgroundColor: "",
            backgroundImage: "",
            fontSize: "",
            fontFamily: "",
            textAlign: "",
            lineHeight: "",
            letterSpacing: "",
            marginLeft: "",
            marginTop: "",
            marginRight: "",
            marginBottom: "",
            paddingLeft: "",
            paddingTop: "",
            paddingRight: "",
            paddingBottom: "",
        },
        columnsCount: 1,
        rowsCount: 1,
        topicId: 5
    }
]
