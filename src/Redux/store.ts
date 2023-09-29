import { combineReducers, createStore } from "redux";
import { authReducer } from "./Reducer/AuthReducer/authReducer";
import { layoutReducer } from "./Reducer/Layout/layoutReducer";

const reducers = combineReducers({
    authReducer,
    layoutReducer
})

export const store = createStore(reducers)