import * as React from 'react';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '../ItemIcon/ItemIcon';
import ListItemText from '@mui/material/ListItemText';


function CollapsedListItem(props) {
    let handleDBClick = (e) =>{
        console.log(e.target);
    };
    return (
        <ListItemButton id={props.id} sx={{pl: 4}} onDoubleClick={handleDBClick}>
            <ListItemIcon icon={props.icon}/>
            <ListItemText primary={props.name} />
        </ListItemButton>
    );
}

export default CollapsedListItem;
