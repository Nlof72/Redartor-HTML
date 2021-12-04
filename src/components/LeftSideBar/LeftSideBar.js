import React from 'react';
import {makeStyles} from "@mui/styles";
import ListComponents from "./ListComponents/ListComponents";
import Search from "./Search/Search";

function LeftSideBar(props) {
    const classes = useStyles();
    return (
        <div className={classes.mainContainer}>
            <div className={classes.searchContainer}>
                <Search/>
            </div>
            <div className={classes.componentsContainer} >
                <ListComponents/>
            </div>

        </div>
    );
}

const useStyles = makeStyles((theme) => ({
    mainContainer:{
        display:"flex",
        flexDirection:"column",
    },
    searchContainer: {
        padding:"10px",
        backgroundColor: theme.palette.primary.main,
    },
    componentsContainer: {
        overflow: "auto",
        height: "fit-content",
        maxHeight: "93vh",

    }
}));

export default LeftSideBar;