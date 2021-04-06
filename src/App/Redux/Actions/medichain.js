import { MEDICHIAN_LOADED, SET_LOADING } from "../Actions/types";
import api from "../../utils/api";

//load medichain
export const loadMedichain = (data) => async (dispatch) => {
  console.log(data);

  dispatch({
    type: MEDICHIAN_LOADED,
    payload: data,
  });
};
