import * as React from 'react';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from './ItemIcon';
import ListItemText from '@mui/material/ListItemText';


function CollapsedListItem(props) {
    return (
        <ListItemButton sx={{pl: 4}}>
            <ListItemIcon type={props.type}/>
            <ListItemText primary={props.name} />
        </ListItemButton>
    );
}

export default CollapsedListItem;
