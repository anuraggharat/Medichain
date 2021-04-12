import axios from "axios";
import api from "./api";

export const removeRequest = async (id) => {
  console.log(id)
    try {
    const res = await api.delete(`/requests/${id}`);
    console.log(res,"res on delete")
    return res;
  } catch (error) {
    return { success: false, error: "unable to delete req" };
  }
};

