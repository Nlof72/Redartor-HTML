let initialState = {
    actions: {
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
    text: {
        name: "Текст",
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
    media: {
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
                name: "Контейнер HTML",
                type: "video",
                icon: "",
            },
        ],

    },

};


const componentsReducer = (state = initialState, action) => {
    switch (action.type) {

        default:
            return state;
    }
};

export default componentsReducer;