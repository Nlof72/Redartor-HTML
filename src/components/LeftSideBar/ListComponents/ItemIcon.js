import React from 'react';
import StarIcon from '@mui/icons-material/Star';
import TouchAppIcon from '@mui/icons-material/TouchApp';



import ListItemIcon from '@mui/material/ListItemIcon';

function ItemIcon(props) {
    // TODO: Решить какие соотношение картинки-типа, отрефакторить код
    let icon;
    switch (props.type) {
        case "action":
            icon =  <TouchAppIcon/>
            break;
        default:
            icon =  <StarIcon/>
            break;
}

    return (
        <ListItemIcon>
            {icon}
        </ListItemIcon>
    );
}

export default ItemIcon;