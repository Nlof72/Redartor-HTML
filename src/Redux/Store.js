import {applyMiddleware, combineReducers, createStore} from "redux";
import thunkMiddleware from "redux-thunk";
import componentsReducer from "./ComponentsReducer";

let reducers = combineReducers({
    componentsData: componentsReducer,
});

let store = createStore(reducers, applyMiddleware(thunkMiddleware));

export default store;