import { combineReducers } from "redux";
import user from "./user";
import doctor from "./doctor";

const rootReducer = combineReducers({
  user,
  doctor,
});

export default rootReducer;
