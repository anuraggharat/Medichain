import api from "./api";

export const putaccesslist = async (body) => {
  const jsonbody = JSON.stringify(body);
  try {
    const res = await api.put("/user/addaccesser", jsonbody);
    console.log(res)
    return res.data;
  } catch (error) {
    return { success: false, error: "Unable to fetch  data" };
  }
};

export const getaccessList = async (id) => {
 
  try {
    const res = await api.get(`/user/getaccessslist/${id}`);
    return res.data;
  } catch (error) {
    return { success: false, error: "Unable to fetch  data" };
  }
};

export const revokeAccessFrom = async (from,id) => {
   const body = {
     id: from,
   };
   const jsonbody = JSON.stringify(body)
  try {
    const res = await api.put(`/user/revokeaccess/${id}`,jsonbody);
    return res.data;
  } catch (error) {
    return { success: false, error: "Unable to fetch  data" };
  }
};