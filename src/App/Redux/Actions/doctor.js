import {
  SET_LOADING,
  REGISTER_FAIL,
  REGISTER_SUCCESS,
  LOGIN_SUCCESS,
  LOGIN_FAIL,
  LOGOUT,
} from "../Actions/types";
import api from "../../utils/api";

//doctor register
export const registerUser = (user) => async (dispatch) => {
  console.log(user);
  const body = JSON.stringify(user);
  console.log(body);
  dispatch({
    type: SET_LOADING,
  });

  try {
    const res = await api.post("/doctor/register", body);
    console.log("response at req", res);
    if (res.data.success) {
      dispatch({
        type: REGISTER_SUCCESS,
        payload: res.data,
      });
      return res.data;
    } else {
      console.log(res.data);
      dispatch({
        type: REGISTER_FAIL,
        payload: "Something went wrong!",
      });
      return res.data;
    }
  } catch (error) {
    console.log("returned :", error);
    dispatch({
      type: REGISTER_FAIL,
      payload: "Something went wrong!",
    });
  }
};

//doctor login
export const loginUser = (user) => async (dispatch) => {
  const body = JSON.stringify(user);
  dispatch({
    type: SET_LOADING,
  });

  try {
    const res = await api.post("/doctor/login", body);
    console.log("response at req", res);
    if (res.data.success) {
      localStorage.setItem("token", res.data.token);
      dispatch({
        type: LOGIN_SUCCESS,
        payload: res.data,
      });
      return res.data;
    } else {
      dispatch({
        type: LOGIN_FAIL,
        payload: res.data.error,
      });
      return res.data;
    }
  } catch (error) {
    console.log("error in catch", error);
    dispatch({
      type: LOGIN_FAIL,
      payload: "Something went wrong!",
    });
  }
};

//doctor user
export const logoutUser = () => (dispatch) => {
  localStorage.removeItem("token");
  dispatch({
    type: LOGOUT,
  });
};
