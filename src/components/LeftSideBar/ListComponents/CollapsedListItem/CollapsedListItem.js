import * as React from 'react';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '../ItemIcon/ItemIcon';
import ListItemText from '@mui/material/ListItemText';


function CollapsedListItem(props) {
    const addToBlock = (type) =>{
        debugger;
        props.addToBlock(type);
    }
    return (
        <ListItemButton sx={{pl: 4}}  onClick={()=>{addToBlock(props.type)}}>
            <ListItemIcon icon={props.icon}/>
            <ListItemText primary={props.name}/>
        </ListItemButton>
    );
}

export default CollapsedListItem;
