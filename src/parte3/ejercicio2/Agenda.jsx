import React, { useState } from "react";
import Contacts from "./Contacts";
import FormContact from "./FormContact";
import FormSearch from "./FormSearch";

const initialForm = [
  { name: "Arto Hellas", number: "040-123456" },
  { name: "Ada Lovelace", number: "39-44-5323523" },
  { name: "Dan Abramov", number: "12-43-234345" },
  { name: "Mary Poppendieck", number: "39-23-6423122" },
];

const Agenda = () => {
  const [persons, setPersons] = useState(initialForm);
  const [newName, setNewName] = useState("");
  const [filter, setFilter] = useState("");
  const [isFilter, setIsFilter] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;

    setNewName({
      ...newName,
      [name]: value,
    });
  };

  const addContact = (e) => {
    e.preventDefault();

    const isContact = persons.some(
      (el) => el.name === newName.name || el.number === newName.number
    );
    // const isExistsNumber

    if (isContact) {
      alert(`${newName.name} o ${newName.number} ya existe en la agenda`);
      return;
    }

    setPersons([...persons, newName]);
  };

  const handleFilter = (e) => {
    let search = e.target.value;
    const isFilter = persons.filter(
      (el) => el.name.toLowerCase() === search.toLowerCase()
    );

    if (isFilter) {
      setFilter(isFilter);
      setIsFilter(true);
    }
  };

  return (
    <div>
      <h2>Phonebook</h2>
      <FormSearch
        handleFilter={handleFilter}
        filter={filter}
        isFilter={isFilter}
      />
      <FormContact addContact={addContact} handleChange={handleChange} />
      <Contacts persons={persons} />
    </div>
  );
};

export default Agenda;
