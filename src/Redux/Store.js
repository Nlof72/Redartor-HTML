import {applyMiddleware, combineReducers, createStore} from "redux";
import thunkMiddleware from "redux-thunk";
import CanvasReducer from "./CanvasReducer";

let reducers = combineReducers({
    canvasData: CanvasReducer,
});

let store = createStore(reducers, applyMiddleware(thunkMiddleware));

window.store = store;
export default store;

