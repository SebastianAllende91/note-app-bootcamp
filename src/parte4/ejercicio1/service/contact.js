// PARTE 4 EJERCICIO 3
import axios from "axios";

const baseUrl = "http://localhost:3001/persons";

export const getContact = () => axios.get(baseUrl);

export const createContact = (newObject) => axios.post(baseUrl, newObject);

export const deleteContact = (id) => axios.delete(`${baseUrl}/${id}`);

export const updateNumber = (id, newNumber) =>
  axios.put(`${baseUrl}/${id}`, newNumber);
