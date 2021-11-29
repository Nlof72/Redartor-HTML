import React from "react";


const ComponentItem = ({componentType, css, html, body}) => {
    return (
        React.createElement(`${componentType}`,
            {
                onClick: () => {
                    alert("suka")
                },
                style: css,
                ...html
            }, body))
}


export default ComponentItem;