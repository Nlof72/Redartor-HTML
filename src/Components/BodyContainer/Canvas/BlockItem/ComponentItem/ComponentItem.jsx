import React from "react";


const ComponentItem = ({id, blockIndex,componentType, css, html, body, onSelectItem}) => {
    return (
        React.createElement(`${componentType}`,
            {
                onClick: () => {
                    onSelectItem(id, blockIndex)
                },
                style: css,
                ...html
            }, body))
}

export default ComponentItem;




