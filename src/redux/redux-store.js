import listReducer from "./listReducer";
import thunkMiddleware from "redux-thunk";
import leftNavBarReducer from "./leftNavBarReducer";
import {reducer as formReducer} from 'redux-form';

const { createStore, combineReducers, applyMiddleware} = require("redux");

let reducers = combineReducers({
    leftNavBar: leftNavBarReducer,
    listPage: listReducer,
    form: formReducer,

})


let store = createStore(reducers, applyMiddleware(thunkMiddleware));
window.__store__ = store;

export default store;