import React, {useState} from 'react';
import {makeStyles} from "@mui/styles";
import ListComponents from "./ListComponents/ListComponents";
import Search from "./Search/Search";
import {Components, Topics} from "../../Data/ComponentsData";
import ActionIcon from "../../Assets/Icons/32x32/Action.png";


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
    let topics, components;

    if (searchData) {
        topics = [{
            id: 0,
            name: "Результат поиска",
            type: "search",
            icon: ActionIcon
        }, ...Topics]

        let searchComponents = [...Components.filter((items, index) => items.name.toLowerCase().includes(searchData))];
        searchComponents = searchComponents.map((item, index) => {
            return {...item, topicId: 0}
        });

        components = [...Components].concat(searchComponents)
    } else {
        topics = Topics;
        components = Components;
    }
    return <ListComponents topics={topics} defaultComponents={components}/>
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