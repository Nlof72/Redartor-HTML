import React from "react";


const ComponentItem = ({id, blockIndex, componentType, css, html, onSelectItem}) => {
    return (
        React.createElement(`${componentType}`,
            {
                onClick: () => {
                    onSelectItem(id, blockIndex)
                },
                style: css,
                ...html
            }, (html?.content)))
}

export default ComponentItem;




