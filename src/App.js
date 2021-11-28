import './App.css';
import {makeStyles} from '@mui/styles';
import BodyContainer from "./Components/BodyContainer/BodyContainer";
import RightSideBar from "./Components/RightSideBar/RightSideBar";
import LeftSideBar from "./Components/LeftSideBar/LeftSideBar";


const useStyles = makeStyles((theme) => ({
    gridContainer: {
        display: "grid",
        gridTemplateColumns: "2fr 8fr 2fr",
        backgroundColor: theme.palette.background.default,
        position: 'fixed',
        top: 0,
        left: 0,
        width: '100%',
        height: '100%',
        overflow:"auto",

    },

    canvasContainer: {
        borderLeft: "1px solid black",
        borderRight: "1px solid black",
    }
}));


function App(props) {

    const classes = useStyles();

    return (
        <div className={classes.gridContainer}>
            <div>
                <LeftSideBar/>
            </div>
            <div className={classes.canvasContainer}>
                <BodyContainer/>
            </div>
            <div>
                <RightSideBar/>
            </div>
        </div>
    );
}

export default App;
