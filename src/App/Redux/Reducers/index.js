import { combineReducers } from "redux";
import user from "./user";
import doctor from "./doctor";
import medichain from "./medichain";

const rootReducer = combineReducers({
  user,
  doctor,
  medichain,
});

export default rootReducer;
