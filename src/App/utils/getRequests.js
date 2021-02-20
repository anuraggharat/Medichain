import axios from "axios";
import api from "./api";

export const getDoctors = async () => {
  try {
    const res = await api.get("/doctor/getdoctors");
    return res.data;
  } catch (error) {
    return { success: false, error: "Unable to fetch  data" };
  }
};
