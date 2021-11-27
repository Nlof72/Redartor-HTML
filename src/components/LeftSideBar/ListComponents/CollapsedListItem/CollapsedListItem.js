import * as React from 'react';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '../ItemIcon/ItemIcon';
import ListItemText from '@mui/material/ListItemText';


function CollapsedListItem(props) {
    let handleDBClick = (razmetka) => {
        // TODO: Передать разметку в CANVAS через редух Влада
    };
    return (
        <ListItemButton sx={{pl: 4}}  onClick={props.addToBlock}>
            <ListItemIcon icon={props.icon}/>
            <ListItemText primary={props.name}/>
        </ListItemButton>
    );
}

export default CollapsedListItem;
