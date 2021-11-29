import React from "react";


const ComponentItem = ({id, blockIndex,componentType, css, html, body, onSelectItem}) => {
    // const useOutsideAlerter = (ref) => {
    //     useEffect(() => {
    //         function handleClickOutside(event) {
    //             if (ref.current && !ref.current.contains(event.target)) {
    //                 onSelectItem(null, 0) //TODO Исправить второй аргумент при выборе активного блока
    //             }
    //         }
    //
    //         document.addEventListener("mousedown", handleClickOutside);
    //         return () => {
    //             document.removeEventListener("mousedown", handleClickOutside);
    //         };
    //     }, [ref]);
    // }
    //
    // const wrapperRef = useRef(null);
    // useOutsideAlerter(wrapperRef);
    return (
        React.createElement(`${componentType}`,
            {
                // ref: wrapperRef,
                onClick: () => {
                    onSelectItem(id, blockIndex)
                },
                style: css,
                ...html
            }, body))
}

export default ComponentItem;




