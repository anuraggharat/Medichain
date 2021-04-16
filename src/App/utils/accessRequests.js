import api from "./api";

export const putaccesslist = async (body) => {
  console.log(body);
  const jsonbody = JSON.stringify(body);
  try {
    const res = await api.put("/user/addaccesser", jsonbody);
    console.log(res)
    return res.data;
  } catch (error) {
    return { success: false, error: "Unable to fetch  data" };
  }
};
