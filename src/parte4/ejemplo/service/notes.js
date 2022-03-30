import axios from "axios";

const baseUrl = "http://localhost:3002/api/notes";

export const getAll = () => axios.get(baseUrl);

export const create = (newObject) => axios.post(baseUrl, newObject);

export const update = (id, newObject) =>
  axios.put(`${baseUrl}/${id}`, newObject);
