import React, {useRef} from "react";
import ClearIcon from "@mui/icons-material/Clear";
import {IconButton} from "@mui/material";
import {styled} from "@mui/styles";
import {useDrag, useDrop} from "react-dnd";
import {ItemTypes} from "../../../../ItemTypesDND";


let children = [];
const ComponentItem = ({
                           id,
                           index,
                           blockIndex,
                           parentId,
                           componentType,
                           css,
                           html,
                           onSelectItem,
                           moveCard,
                           moveItemIntoDiv
                       }) => {
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
            const hoverMiddleX = (hoverBoundingRect.left - hoverBoundingRect.right) / 2;


            const clientOffset = monitor.getClientOffset();
            const hoverClientY = clientOffset.y - hoverBoundingRect.top;
            const hoverClientX = clientOffset.x - hoverBoundingRect.right;

            const inInnerHoverY = hoverClientY < hoverMiddleY + hoverBoundingRect.height / 4 && hoverClientY > hoverMiddleY - hoverBoundingRect.height / 4;
            const inInnerHoverX = hoverClientX < hoverMiddleX + hoverBoundingRect.height / 4 && hoverClientX > hoverMiddleX - hoverBoundingRect.height / 4;
            if (inInnerHoverY && inInnerHoverX) {
                return;
            }

            if (dragIndex < hoverIndex && hoverClientY < hoverMiddleY) {
                return;
            }

            if (dragIndex > hoverIndex && hoverClientY > hoverMiddleY) {
                return;
            }

            moveCard(dragIndex, dragId, hoverIndex);
            item.index = hoverIndex;
        },

        drop(item, monitor) {
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
            const divMiddleY = (hoverBoundingRect.bottom - hoverBoundingRect.top) / 2;
            const divMiddleX = (hoverBoundingRect.left - hoverBoundingRect.right) / 2;


            const clientOffset = monitor.getClientOffset();
            const ClientY = clientOffset.y - hoverBoundingRect.top;
            const ClientX = clientOffset.x - hoverBoundingRect.right;

            const inInnerY = ClientY < divMiddleY + hoverBoundingRect.height / 4 && ClientY > divMiddleY - hoverBoundingRect.height / 4;
            const inInnerX = ClientX < divMiddleX + hoverBoundingRect.height / 4 && ClientX > divMiddleX - hoverBoundingRect.height / 4;
            if (inInnerY && inInnerX) {
                moveItemIntoDiv(dragIndex, dragId, hoverIndex);
                return;
            }
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


    }
    return (
        <ContainerBlock>
            <InnerButton>
                <ClearIcon fontSize="little"/>
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

