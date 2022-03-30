import React, { useEffect, useState } from "react";
import Contacts from "./Contacts";
import FormContact from "./FormContact";
import FormSearch from "./FormSearch";
import Notification from "./Notification";
import {
  createContact,
  getContact,
  deleteContact,
  updateNumber,
} from "./service/contact";

const initialForm = {
  name: "",
  number: "",
};

const Agenda = () => {
  const [persons, setPersons] = useState([]);
  const [newName, setNewName] = useState(initialForm);
  const [filter, setFilter] = useState("");
  const [isFilter, setIsFilter] = useState([]);
  const [msg, setMsg] = useState(null);
  const [isError, setIsError] = useState(null);

  useEffect(() => {
    //EJERCICIO 3 DE LA PARTE 4, SEPARAR LOGICA DE PETICIONES HTTP Y DARLE PERSISTENCIA A LOS DATOS
    getContact().then((response) => {
      const contactos = response.data;
      setPersons(contactos);
    });
  }, []);

  const handleChange = (e) => {
    const { name, value } = e.target;

    setNewName({
      ...newName,
      [name]: value,
    });
  };

  const addContact = (e) => {
    e.preventDefault();

    const isContact = persons.find(
      (el) => el.name === newName.name || el.number === newName.number
    );

    if (isContact) {
      const replaceNumber = window.confirm(
        `${newName.name} is already added to phonebook, replace the old number with a new one`
      );

      if (replaceNumber) changedContact(isContact, newName.number);

      return;
    }

    createContact(newName).then((response) => {
      // console.log(response);
      const { data } = response;
      setPersons(persons.concat(data));
      setMsg(`Added ${data.name}`);
      setTimeout(() => {
        setMsg(null);
      }, 5000);
    });
  };

  const delContact = (el) => {
    const isConfirm = window.confirm(`Desea eliminar el contact ${el.name}`);

    if (!isConfirm) return;

    deleteContact(el.id).then((response) => {
      // console.log(response);
      const newData = persons.filter((item) => item.id !== el.id);
      setPersons(newData.map((user) => user));
    });
  };

  const changedContact = (el, num) => {
    // console.log("Editando contacto", el, "nuevo numero ", num);
    const replaceOldNumber = { ...el, number: num };

    updateNumber(el.id, replaceOldNumber)
      .then((response) => {
        const contact = response.data;
        setPersons(persons.map((user) => (user.id !== el.id ? user : contact)));
      })
      .catch((error) => {
        setMsg(`Information of ${el.name} has already been remove from server`);
        setIsError(true);
        setTimeout(() => {
          setIsError(null);
          setMsg(null);
        }, 5000);
      });
  };

  const filtrar = (termino) => {
    let resultado = persons.filter((el) => {
      if (el.name.toString().toLowerCase().includes(termino.toLowerCase())) {
        return el;
      }
    });

    setIsFilter(resultado);
  };

  const handleFilter = (e) => {
    setFilter(e.target.value);
    filtrar(e.target.value);
  };

  return (
    <div>
      <h2>Phonebook</h2>
      {msg && <Notification message={msg} isError={isError} />}
      <FormSearch
        handleFilter={handleFilter}
        filter={filter}
        isFilter={isFilter}
      />
      <FormContact addContact={addContact} handleChange={handleChange} />
      <Contacts persons={persons} delContact={delContact} />
    </div>
  );
};

export default Agenda;
