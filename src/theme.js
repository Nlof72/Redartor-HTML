import {createTheme} from "@mui/material/styles";


export const theme = createTheme({
    palette: {
        primary: {
            main: '#973F3F'
        },
        active: {
            main: '#6A0E0E'
        },
        background: {
            default: '#FDF2F2'
        },
    },
    images:{
        // TODO: Добавить ссылки на картинки, которые будут использоваться
    },
    shape:{
        borderRadius: '30px',
    }
});