import {v4 as uuidv4} from 'uuid';


const ADD_BLOCK = "ADD-BLOCK";
const DELETE_BLOCK = "DELETE-BLOCK";
const CLEAR = "CLEAR";
const ADD_COMPONENT_TO_BLOCK = "ADD-COMPONENT-TO-BLOCK";
const CHANGE_COMPONENT_IN_BLOCK = "CHANGE-COMPONENT-IN-BLOCK";
const SELECT_CURRENT_COMPONENT = "SELECT-CURRENT-COMPONENT";

let initialState = {
    canvas: [[]],
    currentBlock: 0,
    selectedComponent: null,
}

const CreateComponentByParams = (componentData, state) => {
    let newComponent = {
        id: uuidv4(),
        orderId: state.canvas[state.currentBlock].length + 1,
        parentId: 0,
        componentType: componentData.type,
        css: componentData.css,
        body: componentData.body
    };

    if (componentData.src !== undefined)
        newComponent["html"] = {...newComponent["html"], src: componentData.src};
    debugger;
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
                    if (state.canvas.indexOf(block) === action.blockIndex) {
                        return [...block, CreateComponentByParams(action.component, state)];
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
export const AddComponentToBlock = (componentData, blockIndex) => {
    return {
        type: ADD_COMPONENT_TO_BLOCK,
        blockIndex: blockIndex,
        component: componentData
    }
}

export const SelectCurrentComponent = (id) => {
    return {type: SELECT_CURRENT_COMPONENT, id: id}

}

export const SelectCurrentBlock = (componentID, blockIndex, componentParams) => {
    return {type: CHANGE_COMPONENT_IN_BLOCK, index: blockIndex, componentParams: componentParams}
}

export const ChangeComponentInBlock = (componentID, blockIndex, componentParams) => {
    return {type: CHANGE_COMPONENT_IN_BLOCK, index: blockIndex, componentParams: componentParams}
}


export default CanvasReducer;