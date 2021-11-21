import './App.css';
import {makeStyles} from '@mui/styles';
import CanvasContainer from "./Components/CanvasContainer/CanvasContainer";


const useStyles = makeStyles((theme) => ({
    gridContainer: {
        display: "grid",
        gridTemplateColumns: "2fr 8fr 2fr",
        backgroundColor: theme.palette.background.default,
        width: "100vw",
        height: "100vh",
    },
    // MOCK
    gridContainerItems: {
        border: "1px solid black"
    }
}));


function App() {

    const classes = useStyles();

    return (
        <div className={classes.gridContainer}>
            <div className={classes.gridContainerItems}>
                // TODO: Реализовать левую боковую панель
            </div>
            <div className={classes.gridContainerItems}>
               <CanvasContainer/>
            </div>
            <div className={classes.gridContainerItems}>
                // TODO: Реализовать правую боковую панель
            </div>
        </div>
    );
}

export default App;
