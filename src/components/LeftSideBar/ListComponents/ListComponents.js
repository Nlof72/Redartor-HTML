import * as React from 'react';
import List from '@mui/material/List';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemText from '@mui/material/ListItemText';
import Collapse from '@mui/material/Collapse';
import ExpandLess from '@mui/icons-material/ExpandLess';
import ExpandMore from '@mui/icons-material/ExpandMore';
import CollapsedListItem from "./CollapsedListItem/CollapsedListItem";
import StarIcon from "@mui/icons-material/Star";
import {AddComponentToBlock} from "../../../Redux/CanvasReducer";
import {useDispatch, useSelector} from "react-redux";


function ListComponents(props) {

    const [open, setOpen] = React.useState({"Результат поиска": true});
    const dispatch = useDispatch();
    const canvasBody = useSelector((state) => state.canvasData);
    const handleClick = (prop, value) => {
        setOpen({...open, [prop]: value});
    };

    const topics = props.topics;
    const defaultComponents = props.defaultComponents || [];

    return (
        topics.map((context, index) => {
            return (
                <List key={index}>

                    <ListItemButton onClick={() => {
                        handleClick(context.name, !open[context.name])
                    }}>
                        {context.icon ? <img src={context.icon} alt=""/> : <StarIcon/>}

                        <ListItemText primary={context.name} sx={{ml: 1}}/>
                        {open[context.name] ? <ExpandLess/> : <ExpandMore/>}
                    </ListItemButton>

                    <Collapse key={index} in={open[context.name]} timeout="auto" unmountOnExit>
                        <List component="div" disablePadding>
                            {defaultComponents.filter(item => item.topicId === context.id).map((comp, index) => {
                                return (<CollapsedListItem
                                    addToBlock={() => {
                                        dispatch(AddComponentToBlock(comp, canvasBody.currentBlock))
                                    }}
                                    name={comp.name}
                                    icon={comp.icon}
                                    key={"collapseListItem-" + index}
                                />)
                            })}
                        </List>
                    </Collapse>

                </List>
            );
        })
    );
}

export default ListComponents;
