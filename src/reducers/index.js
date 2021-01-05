import { combineReducers } from 'redux';
import counterReducer from "./counterReducer";
import loggedReducer from "./loggedReducer";

const allReducer = combineReducers({
    counter: counterReducer,
    logged: loggedReducer
})

export default allReducer;