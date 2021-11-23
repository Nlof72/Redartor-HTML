import React from 'react';
import StarIcon from '@mui/icons-material/Star';
import ListItemIcon from '@mui/material/ListItemIcon';

function ItemIcon(props) {
    return (
        <ListItemIcon>
            {props.icon ? <img src={props.icon} alt=""/> : <StarIcon/>}
        </ListItemIcon>
    );
}

export default ItemIcon;