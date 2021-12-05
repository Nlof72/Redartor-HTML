import * as React from 'react';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '../ItemIcon/ItemIcon';
import ListItemText from '@mui/material/ListItemText';


function CollapsedListItem(props) {
    const addToBlock = (type, css, src) => {
        props.addToBlock(type, css, src);
    }

    if (props.mock){
        return <ListItemButton>
            <ListItemText primary={"Ничего не найдено"}/>
        </ListItemButton>
    }
    return (
        <ListItemButton sx={{pl: 4}} onClick={() => {
            addToBlock(props.type, props.css, props.src)
        }}>
            <ListItemIcon icon={props.icon}/>
            <ListItemText primary={props.name}/>
        </ListItemButton>
    );
}

export default CollapsedListItem;
