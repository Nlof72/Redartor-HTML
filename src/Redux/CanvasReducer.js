import {v4 as uuidv4} from 'uuid';


const ADD_BLOCK = "ADD-BLOCK";
const DELETE_BLOCK = "DELETE-BLOCK";
const CLEAR = "CLEAR";
const ADD_COMPONENT_TO_BLOCK = "ADD-COMPONENT-TO-BLOCK";
const CHANGE_COMPONENT_IN_BLOCK = "CHANGE-COMPONENT-IN-BLOCK";

let initialState = {
    canvas: [[]],
    currentBlock: 0
}

const CreateComponentByParams = (action, state) => {
    let newComponent = {
        id: uuidv4(),
        componentType: action.componentType,
        css: action.componentCss,
        orderId: state.length + 1,
        parentId: 0
    };

    if (action.componentSrc !== undefined)
        newComponent["src"] = action.componentSrc;

    return newComponent;
}


const CanvasReducer = (state = initialState, action) => {
    switch (action.type) {
        case CLEAR:
            return {...state, canvas: []};

        case ADD_BLOCK:
            return {...state, canvas: [...state.canvas, []]};

        case DELETE_BLOCK:
            return {
                ...state,
                canvas: [...state.canvas.slice(0, action.index), ...state.canvas.slice(action.index + 1)]
            };

        case ADD_COMPONENT_TO_BLOCK:
            return {
                ...state, canvas: state.canvas.map(block => {
                    if (state.canvas.indexOf(block) === action.index) {
                        return [...block, CreateComponentByParams(action, state)];
                    } else {
                        return block
                    }
                })
            }

        case CHANGE_COMPONENT_IN_BLOCK:
            break;

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
export const AddComponentToBlock = (componentType, componentCss, componentSrc, blockIndex) => {
    return {
        type: ADD_COMPONENT_TO_BLOCK,
        index: blockIndex,
        componentType: componentType,
        componentCss: componentCss,
        componentSrc: componentSrc
    }
}

export const SelectCurrentBlock = (componentID, blockIndex, componentParams) => {
    return {type: CHANGE_COMPONENT_IN_BLOCK, index: blockIndex, componentParams: componentParams}
}

export const ChangeComponentInBlock = (componentID, blockIndex, componentParams) => {
    return {type: CHANGE_COMPONENT_IN_BLOCK, index: blockIndex, componentParams: componentParams}
}





export default CanvasReducer;