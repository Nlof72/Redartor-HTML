import React from 'react';
import {makeStyles} from "@mui/styles";
import ListComponents from "./ListComponents/ListComponents";
import Search from "./Search/Search";


const useStyles = makeStyles((theme) => ({
    searchContainer: {
        padding:"10px",
        backgroundColor: theme.palette.primary.main,
    },
    componentsContainer: {
        height:"fit-content",
        backgroundColor: "green",
    }

}));



function LeftSideBar(props) {

    const classes = useStyles();
    return (
        <div>
            <div className={classes.searchContainer}>
                <Search/>
            </div>

            <div className={classes.componentsContainer} >
                <ListComponents componentsList={props.componentsList}/>
            </div>

        </div>
    );
}

export default LeftSideBar;