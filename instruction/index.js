///////////////////////////////////////////////////////////
/////////////////////Component Canvas:

let component = {
    id: `8d15b4610552`, //uuIdv4 or any gen Id
    componentType: ".div", ///".button", ".any"
    css: { ///any css props
        cursor: "pointer",
        color: "red",
        background: "white"
    },
    orderId: 1, //Sequential number in the line
    parentId: 0 //parent Id
}

////////////////////////////////////////////////////////
/////////////////////Example row

let firstRow = [
    {
        ...component
    },
    {
        id: `5224651a3e0b`,
        componentType: ".div",
        css: {
            cursor: "pointer",
            color: "red",
            background: "white"
        },
        orderId: 1,
        parentId: `8d15b4610552`
    }
]
////////////////////////////////////////////////////
/////////////////////How to find root-components in row

let a = firstRow.filter(item => item.parentId === 0)

//[output a]:  [{
//     id: `8d15b4610552`,
//     componentType: ".div",
//     css: {
//         cursor: "pointer",
//         color: "red",
//         background: "white"
//     },
//     orderId: 1,
//     parentId: 0
// }]
// if row is empty return `undefined`


////////////////////////////////////////////////////
/////////////////////Use a children props for react FC:

import React from 'react';

const MyComponent = ({children}) => {

    const {css} = children;
    return (
        <div style={css}>
            {children}
        </div>
    );
};

////////////////////////////////////////////////////
