import * as React from 'react';
import List from '@mui/material/List';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemText from '@mui/material/ListItemText';
import Collapse from '@mui/material/Collapse';
import ExpandLess from '@mui/icons-material/ExpandLess';
import ExpandMore from '@mui/icons-material/ExpandMore';
import CollapsedListItem from "./CollapsedListItem/CollapsedListItem";
import StarIcon from "@mui/icons-material/Star";


function ListComponents(props) {
    const [open, setOpen] = React.useState({});
    const handleClick = (prop, value) => {
        setOpen({...open, [prop]: value});
    };


    return (
        props.componentsList.map((context, index) => {
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
                            {context.components.map((comp, index) => {
                                return (<CollapsedListItem
                                    name={comp.name}
                                    icon={comp.icon}
                                    razmetka={comp.razmetka}
                                    key={"collapseListItem-"+index}
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
