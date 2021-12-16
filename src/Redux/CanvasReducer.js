import {v4 as uuidv4} from 'uuid';

const ADD_BLOCK = "ADD-BLOCK";
const DELETE_BLOCK = "DELETE-BLOCK";
const CLEAR = "CLEAR";
const ADD_COMPONENT_TO_BLOCK = "ADD-COMPONENT-TO-BLOCK";
const SELECT_CURRENT_BLOCK = "SELECT-CURRENT-BLOCK";
const SELECT_CURRENT_COMPONENT = "SELECT-CURRENT-COMPONENT";
const SET_COMPONENT_ATTRIBUTES = "SET-COMPONENT-ATTRIBUTES";
const UPDATE_CANVAS_ORDER = "UPDATE-CANVAS-ORDER";
const REPLACE_COMPONENT_TO_BLOCK = "REPLACE-COMPONENT-TO-BLOCK";

let initialState = {
    canvas: [[]],
    currentBlock: 0,
    selectedComponentId: null,
}

const CreateComponentByParams = (componentData, blockIndex, state) => {
    let newComponent = {
        id: uuidv4(),
        orderId: state.canvas[state.currentBlock].length + 1,
        parentId: 0,
        blockIndex: blockIndex,
        componentType: componentData.type,
        css: {},
        html: {},
    };

    if (Object.keys(componentData.html).length !== 0) {
        newComponent["html"] = {...newComponent["html"], ...componentData.html}
    }
    if (Object.keys(componentData.css).length !== 0) {
        newComponent["css"] = {...newComponent["css"], ...componentData.css}
    }
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
                        return [...block, CreateComponentByParams(action.component,action.blockIndex, state)];
                    } else {
                        return block
                    }
                })
            }

        case SELECT_CURRENT_COMPONENT:
            return {...state, selectedComponentId: action.id, currentBlock: action.blockIndex}

        case SELECT_CURRENT_BLOCK:
            if (state.currentBlock === action.blockIndex)
                return {...state, currentBlock: action.blockIndex}
            else
                return {...state, currentBlock: action.blockIndex, selectedComponentId: null}

        case SET_COMPONENT_ATTRIBUTES:
            return {
                ...state, canvas: state.canvas.map(block => {
                    if (state.canvas.indexOf(block) === action.blockIndex) {
                        return block.map(component => {

                            if (component.id === action.id) {
                                let testComp = {...component, ...action.newAttrs}

                                return testComp
                            } else
                                return component
                        })
                    } else {
                        return block
                    }
                })
            }
        case UPDATE_CANVAS_ORDER:
            return {
                ...state, canvas: action.newCanvas
            }
        case REPLACE_COMPONENT_TO_BLOCK:
            return {...state}
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

export const SelectCurrentBlock = (blockIndex) => ({
    type: SELECT_CURRENT_BLOCK,
    blockIndex: blockIndex
})

export const SetComponentAttributes = (id, blockIndex, attrs) => ({
    type: SET_COMPONENT_ATTRIBUTES,
    blockIndex: blockIndex,
    id: id,
    newAttrs: attrs
})

export const UpdateCanvas = (newCanvas) => ({
    type: UPDATE_CANVAS_ORDER,
    newCanvas: newCanvas
})


export default CanvasReducer;