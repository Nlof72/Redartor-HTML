import React, {useRef} from "react";
import ClearIcon from "@mui/icons-material/Clear";
import {IconButton} from "@mui/material";
import {styled} from "@mui/styles";
import {useDrag, useDrop} from "react-dnd";
import {ItemTypes} from "../../../../ItemTypesDND";



const ComponentItem = ({id, index, blockIndex, componentType, css, html, onSelectItem, moveCard, deleteItem}) => {
    const ref = useRef(null);

    const [{handlerId}, drop] = useDrop({
        accept: ItemTypes.CARD,
        collect(monitor) {
            return {
                handlerId: monitor.getHandlerId()
            };
        },

        hover(item, monitor) {
            if (!ref.current) {
                return;
            }
            const dragIndex = item.index;
            const dragId = item.id;
            const hoverIndex = index;
            if (dragIndex === hoverIndex) {
                return;
            }
            const hoverBoundingRect = ref.current?.getBoundingClientRect();
            const hoverMiddleY = (hoverBoundingRect.bottom - hoverBoundingRect.top) / 2;
            const clientOffset = monitor.getClientOffset();
            const hoverClientY = clientOffset.y - hoverBoundingRect.top;
            if (dragIndex < hoverIndex && hoverClientY < hoverMiddleY) {
                return;
            }
            if (dragIndex > hoverIndex && hoverClientY > hoverMiddleY) {
                return;
            }
            moveCard(dragIndex, dragId, hoverIndex);
            item.index = hoverIndex;
        }
    });
    const [{isDragging}, drag] = useDrag({
        type: ItemTypes.CARD,
        item: () => {
            return {id, index};
        },
        collect: (monitor) => ({
            isDragging: monitor.isDragging()
        })
    });
    drag(drop(ref));

    if (componentType==="div"){

    }
    return (
        <ContainerBlock>
            <InnerButton>
                <ClearIcon fontSize="little" onClick={()=>{onSelectItem(null, null); deleteItem(id)}}/>
            </InnerButton>
            {React.createElement(`${componentType}`,
                {
                    onClick: () => {
                        onSelectItem(id, blockIndex)
                    },
                ref: ref,
                    style: {...css},
                    ...html,
                }, (html?.content))}


        </ContainerBlock>
    )
}

export default ComponentItem;




const ContainerBlock = styled('div')({
    position: "relative",
    padding: 20
})

const InnerButton = styled('div')({
    position: "absolute",
    top: 0,
    right: 0,
    cursor: "pointer",
})

