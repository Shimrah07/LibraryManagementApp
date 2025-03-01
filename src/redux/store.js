import { combineReducers, legacy_createStore as createStore } from "redux";
import { authReducer } from "./reducers/authReducer";
import { bookReducer } from "./reducers/bookReducer";
import { thunk } from "redux-thunk";
import { applyMiddleware } from "redux";

const rootReducer = combineReducers({ auth: authReducer, books: bookReducer });
export const store = createStore(rootReducer, applyMiddleware(thunk));