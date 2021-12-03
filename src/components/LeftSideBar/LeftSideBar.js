import React, {useState} from 'react';
import {makeStyles} from "@mui/styles";
import ListComponents from "./ListComponents/ListComponents";
import Search from "./Search/Search";



const useStyles = makeStyles((theme) => ({
    mainContainer: {
        display: "flex",
        flexDirection: "column",
    },
    searchContainer: {
        padding: "10px",
        backgroundColor: theme.palette.primary.main,
    },
    componentsContainer: {
        overflow: "auto",
        height: "fit-content",
        maxHeight: "93vh",

    }
}));

const ListRenderSelector = (searchData) => {
    if (searchData)
        return (<div>
            {/*{Components.map( (item.index) => {*/}

            {/*})}*/}
        </div>)
    else
        return <ListComponents/>
}


function LeftSideBar(props) {

    const classes = useStyles();
    const [searchData, setSearchData] = useState(null);
    return (
        <div className={classes.mainContainer}>
            <div className={classes.searchContainer} onChange={(e) => {
                setSearchData(e.target.value)
            }}>
                <Search/>
            </div>
            <div className={classes.componentsContainer}>
                {ListRenderSelector(searchData)}

            </div>
        </div>
    );
}

export default LeftSideBar;