import * as React from 'react';
import List from '@mui/material/List';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemText from '@mui/material/ListItemText';
import Collapse from '@mui/material/Collapse';
import ExpandLess from '@mui/icons-material/ExpandLess';
import ExpandMore from '@mui/icons-material/ExpandMore';
import {theme} from "../../../theme";
import CollapsedListItem from "./CollapsedListItem";
import ListItemIcon from "./ItemIcon";


function ListComponents(props) {
    const [open, setOpen] = React.useState({});
    const handleClick = (prop, value) => { setOpen({...open, [prop]: value});};

    return (
        props.componentsList.map((item, index) => {
            return (
                <List
                    sx={{width: '100%', maxWidth: 360, bgcolor: theme.palette.background.default}}
                    component="nav"
                    aria-labelledby="nested-list-subheader">

                    <ListItemButton onClick={() => { handleClick(item.name, !open[item.name])}}>
                        <ListItemIcon type={item.type}/>
                        <ListItemText key={index} primary={item.name}/>
                        {open[item.name] ? <ExpandLess/> : <ExpandMore/>}
                    </ListItemButton>

                    <Collapse in={open[item.name]} timeout="auto" unmountOnExit>
                        <List component="div" disablePadding>
                            {item.components.map((i, key) => {
                                return (<CollapsedListItem name={i.name} type={i.type} key={key}/>)
                            })}
                        </List>
                    </Collapse>
                </List>
            );
        })
    );
}

export default ListComponents;
