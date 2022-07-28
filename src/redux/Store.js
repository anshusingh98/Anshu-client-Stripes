import { applyMiddleware, createStore } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";
import thunk from "redux-thunk";
import rootReducers from "./Reducers/rootReducer";

const composeEnhancer = composeWithDevTools(
    applyMiddleware(thunk)
)

const store = createStore(rootReducers, composeEnhancer);
export default store;