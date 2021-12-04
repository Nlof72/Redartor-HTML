import {v4 as uuidv4} from 'uuid';

const ADD_BLOCK = "ADD-BLOCK";
const DELETE_BLOCK = "DELETE-BLOCK";
const CLEAR = "CLEAR";
const ADD_COMPONENT_TO_BLOCK = "ADD-COMPONENT-TO-BLOCK";
const SELECT_CURRENT_BLOCK = "SELECT-CURRENT-BLOCK";
const SELECT_CURRENT_COMPONENT = "SELECT-CURRENT-COMPONENT";

let initialState = {
    canvas: [[]],
    currentBlock: 0,
    selectedComponentId: null,
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
    if (componentData.href !== undefined)
        newComponent["html"] = {...newComponent["html"], href: componentData.href};
    return newComponent;
}


const CanvasReducer = (state = initialState, action) => {
    switch (action.type) {
        case CLEAR:
            return {...state, canvas: [], currentBlock: null, selectedComponentId: null};

        case ADD_BLOCK:
            return {...state, canvas: [...state.canvas, []]};

        case DELETE_BLOCK:
            return {
                ...state,
                canvas: [...state.canvas.slice(0, action.index), ...state.canvas.slice(action.index + 1)],
                currentBlock: null,
                selectedComponentId: null
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

        case SELECT_CURRENT_COMPONENT:
            return {...state, selectedComponentId: action.id, currentBlock: action.blockIndex}

        case SELECT_CURRENT_BLOCK:
            if (state.currentBlock===action.blockIndex)
                return {...state, currentBlock: action.blockIndex}
            else
                return {...state, currentBlock: action.blockIndex, selectedComponentId: null}
        default:
            return state;
    }
};

export const AddNewBlock = () => ({type: ADD_BLOCK})

export const ClearCanvas = () => ({type: CLEAR})

export const DeleteBlock = (blockIndex) => ({type: DELETE_BLOCK, index: blockIndex})

export const AddComponentToBlock = (componentData, blockIndex) => ({
    type: ADD_COMPONENT_TO_BLOCK,
    blockIndex: blockIndex,
    component: componentData
})

export const SelectCurrentComponent = (id, blockIndex) => ({
    type: SELECT_CURRENT_COMPONENT,
    blockIndex: blockIndex,
    id: id
})

export const SelectCurrentBlock = (blockIndex) => ({type: SELECT_CURRENT_BLOCK, blockIndex: blockIndex})

export default CanvasReducer;