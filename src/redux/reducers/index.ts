import { combineReducers } from "redux";
import reducers from "./reducers";

const rootReducers = combineReducers({
  coolor: reducers,
});

export default rootReducers;
