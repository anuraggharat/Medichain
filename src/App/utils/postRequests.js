import axios from "axios";
import api from "./api";

export const getrequests = async (body) => {
    console.log(body);
    const jsonbody= JSON.stringify(body)
  try {
    const res = await api.post("/requests/getrequests", jsonbody);
    console.log(res)
    return res.data;
  } catch (error) {
    return { success: false, error: "Unable to fetch  data" };
  }
};
export const putRequests = async (body) => {
    console.log(body);
    const jsonbody = JSON.stringify(body);

  try {
    const res = await api.post("/requests/putrequest", jsonbody);
    return res.data;
  } catch (error) {
    return { success: false, error: "Unable to fetch  data" };
  }
};
