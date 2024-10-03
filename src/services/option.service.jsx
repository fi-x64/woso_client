import request from "../utils/request";
import authHeader from "./auth-header";

export const checkOptionResult = async (values) => {
  const res = await request.post("/option/checkOptionResult", values);
  if (res.data.status === "success") {
    return res.data.data;
  }
  return [];
};
