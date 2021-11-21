import * as React from 'react';
import List from '@mui/material/List';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import Collapse from '@mui/material/Collapse';
import InboxIcon from '@mui/icons-material/MoveToInbox';
import ExpandLess from '@mui/icons-material/ExpandLess';
import ExpandMore from '@mui/icons-material/ExpandMore';
import StarBorder from '@mui/icons-material/StarBorder';
import {theme} from "../../../theme";


function ListComponents(props) {
    const [open, setOpen] = React.useState({});
    const handleClick = (prop, value) => {
        setOpen({...open, [prop]: value});
    };

    let componentsList = props.componentsList;


    return (
        componentsList.map((item, index) => {
            return (
                <List
                    sx={{width: '100%', maxWidth: 360, bgcolor: theme.palette.background.default}}
                    component="nav"
                    aria-labelledby="nested-list-subheader">

                    <ListItemButton onClick={() => {
                        handleClick(item.name, !open[item.name])
                    }}>
                        <ListItemIcon>
                            <InboxIcon/>
                        </ListItemIcon>
                        <ListItemText primary={item.name}/>
                        {open[item.name] ? <ExpandLess/> : <ExpandMore/>}
                    </ListItemButton>

                    <Collapse in={open[item.name]} timeout="auto" unmountOnExit>
                        <List component="div" disablePadding>
                            {item.components.map((i, key) => {
                                return (<ListItemButton sx={{pl: 4}}>
                                    <ListItemIcon>
                                        <StarBorder/>
                                    </ListItemIcon>
                                    <ListItemText primary={i}/>
                                </ListItemButton>)
                            })}
                        </List>
                    </Collapse>
                </List>
            );
        })
    );
}

export default ListComponents;
