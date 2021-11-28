const ADD_BLOCK = "ADD-BLOCK";
const DELETE_BLOCK = "DELETE-BLOCK";
const CLEAR = "CLEAR";
const ADD_COMPONENT_TO_BLOCK = "ADD-COMPONENT-TO-BLOCK";


let initialState = [
    [],
]

const CanvasReducer = (state = initialState, action) => {
    switch (action.type) {
        case CLEAR:

            return [];

        case ADD_BLOCK:
            return [...state, [Math.random()]]; // Рандом для отладки. Убрать.

        case DELETE_BLOCK:
            return [...state.slice(0, action.index), ...state.slice(action.index + 1)];

        case ADD_COMPONENT_TO_BLOCK:
            return state.map((block) => {
                if (state.indexOf(block) === action.index)
                    return [...block,
                        {
                            id: `5224651a3e0b`,
                            componentType: action.componentType,
                            css: {
                                cursor: "pointer",
                                background: "white"
                            },
                            orderId: 1,
                            parentId: 0
                        }];
                else
                    return block;
            })

        default:
            return state;

    }
};

export const AddNewBlock = () => {
    return {type: ADD_BLOCK}
}
export const ClearCanvas = () => {
    return {type: CLEAR}
}
export const DeleteBlock = (blockIndex) => {
    return {type: DELETE_BLOCK, index: blockIndex}
}
export const AddComponentToBlock = (componentType, blockIndex) => {
    return {type: ADD_COMPONENT_TO_BLOCK, index: blockIndex, componentType: componentType}
}


export default CanvasReducer;