import { SET_LOADING, MEDICHIAN_LOADED } from "../Actions/types";

const initialState = {
  medichain: "Medichain data here",
  account: null,
  loading: false,
};

export default function (state = initialState, action) {
  const { type, payload } = action;

  switch (type) {
    case SET_LOADING:
      return {
        ...state,
        loading: true,
      };
    case MEDICHIAN_LOADED:
      return {
        ...state,
        medichain: payload,
      };
    default:
      return {
        ...state,
      };
  }
}
