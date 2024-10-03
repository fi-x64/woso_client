import request from "../utils/request";
import authHeader from "./auth-header";

export const getBatch = async (values) => {
  const res = await request.get(`/batch/getBatch/${values.batchCode}`);
  if (res.data.status === "success") {
    return res.data;
  } else if (res.data.status === "error") {
    return res.data;
  }

  return [];
};

export const getAllBatch = async (values) => {
  const res = await request.post(`/batch/getAllBatch`, values);
  if (res.data.status === "success") {
    return res.data;
  } else if (res.data.status === "error") {
    return res.data;
  }

  return [];
};

export const createBatch = async (values) => {
  const res = await request.post("/batch/createBatch", values);

  if (res.data.status === "success") {
    return res.data;
  } else if (res.data.status === "error") {
    return res.data;
  }

  return [];
};

export const editBatch = async (values) => {
  const res = await request.post("/batch/editBatch", values);

  if (res.data.status === "success") {
    return res.data;
  } else if (res.data.status === "error") {
    return res.data;
  }

  return [];
};

export const deleteBatch = async (batchCode) => {
  const res = await request.delete(`/batch/deleteBatch/${batchCode}`);

  if (res.data.status === "success") {
    return res.data;
  } else if (res.data.status === "error") {
    return res.data;
  }

  return [];
};
