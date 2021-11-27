import {applyMiddleware, combineReducers, createStore} from "redux";
import thunkMiddleware from "redux-thunk";
import componentsReducer from "./ComponentsReducer";
import CanvasReducer from "./CanvasReducer";

let reducers = combineReducers({
    componentsData: componentsReducer,
    canvasData: CanvasReducer,
});

let store = createStore(reducers, applyMiddleware(thunkMiddleware));

window.store = store;
export default store;