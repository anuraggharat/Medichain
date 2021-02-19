import {
  SET_LOADING,
  REGISTER_FAIL,
  REGISTER_SUCCESS,
  LOGIN_SUCCESS,
  LOGIN_FAIL,
  LOGOUT,
} from "../Actions/types";

const initialState = {
  token: localStorage.getItem("token"),
  isLoggedIn: false,
  loading: true,
  error: "",
  user: null,
};

export default function (state = initialState, action) {
  const { type, payload } = action;

  switch (type) {
    case SET_LOADING:
      return {
        ...state,
        loading: true,
      };
    case REGISTER_SUCCESS:
      return {
        ...state,
        error: "",
        loading: false,
      };
    case REGISTER_FAIL:
      return {
        ...state,
        error: "Unable to register user! Please try again!",
        loading: false,
      };
    case LOGIN_SUCCESS:
      return {
        ...state,
        token: payload.token,
        user: payload.user,
        isLoggedIn: true,
        error: "",
        loading: false,
      };
    case LOGIN_FAIL:
      return {
        ...state,
        user: null,
        error: payload,
        loading: false,
        isLoggedIn: false,
      };
    case LOGOUT:
      return {
        ...state,
        token: null,
        user: null,
        error: false,
        loading: false,
        isLoggedIn: false,
      };
    default:
      return {
        ...state,
      };
  }
}
