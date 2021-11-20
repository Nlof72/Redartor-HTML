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
    const [open, setOpen] = React.useState(false);
    const handleClick = () => {
        setOpen(!open);
    };

    let componentsList = props.componentsList;


    return (

        componentsList.map((item, key) => {
            return (
                <List
                    sx={{width: '100%', maxWidth: 360, bgcolor: theme.palette.background.default}}
                    component="nav"
                    aria-labelledby="nested-list-subheader">

                    <ListItemButton onClick={handleClick}>
                        <ListItemIcon>
                            <InboxIcon/>
                        </ListItemIcon>
                        <ListItemText primary={item.name}/>
                        {open ? <ExpandLess/> : <ExpandMore/>}
                    </ListItemButton>
                    <Collapse in={open} timeout="auto" unmountOnExit>
                        <List component="div" disablePadding>
                            {/*item.components.map( (i, key) => {*/}
                            {/*console.log(i)*/}

                        {/*    return ( <ListItemButton sx={{pl: 4}}>*/}
                        {/*    <ListItemIcon>*/}
                        {/*    <StarBorder/>*/}
                        {/*    </ListItemIcon>*/}
                        {/*    <ListItemText primary={i}/>*/}
                        {/*    </ListItemButton>)*/}
                        {/*}*/}
                        {/*})*/}
                        </List>
                    </Collapse>
                </List>
            );
        })
    );
}

export default ListComponents;
