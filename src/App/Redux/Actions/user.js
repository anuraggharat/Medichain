import {
  SET_LOADING,
  REGISTER_FAIL,
  REGISTER_SUCCESS,
  LOGIN_SUCCESS,
  LOGIN_FAIL,
  LOGOUT,
} from "../Actions/types";
import api from "../../utils/api";

//user register
export const registerUser = (user) => async (dispatch) => {
  console.log(user);
  const body = JSON.stringify(user);
  console.log(body);
  // dispatch({
  //   type: SET_LOADING,
  // });

  // try {
  //   const res = await api.post("/user/register", body);
  //   console.log("response at req", res);
  //   if (res.success) {
  //     dispatch({
  //       type: REGISTER_SUCCESS,
  //       payload: res.data,
  //     });
  //   } else {
  //     console.log(res);
  //     dispatch({
  //       type: REGISTER_FAIL,
  //       payload: "Something went wrong!",
  //     });
  //   }
  // } catch (error) {
  //   console.log(error);
  //   dispatch({
  //     type: REGISTER_FAIL,
  //     payload: "Something went wrong!",
  //   });
  // }
};

//user login
export const loginUser = (user) => async (dispatch) => {
  const body = JSON.stringify(user);
  dispatch({
    type: SET_LOADING,
  });

  try {
    const res = await api.post("/user/login", body);
    console.log("response at req", res);
    if (res.success) {
      localStorage.setItem("token", res.data.token);
      console.log(res.data);
      dispatch({
        type: LOGIN_SUCCESS,
        payload: res.data,
      });
    } else {
      dispatch({
        type: LOGIN_FAIL,
        payload: res.msg,
      });
    }
  } catch (error) {
    console.log(error);
    dispatch({
      type: LOGIN_FAIL,
      payload: "Something went wrong!",
    });
  }
};

//logout user
export const logoutUser = () => (dispatch) => {
  localStorage.removeItem("token");
  dispatch({
    type: LOGOUT,
  });
};
