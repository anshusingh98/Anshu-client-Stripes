import { combineReducers } from "redux";
import { changeCount } from "./Reducer";

const rootReducers = combineReducers({
    quantity:changeCount,
})

export default rootReducers