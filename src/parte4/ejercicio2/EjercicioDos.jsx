import React, { useEffect, useState } from "react";
import axios from "axios";
import "./style.css";
import Country from "./Country";

const EjercicioDos = () => {
  const [countries, setCountries] = useState([]);
  const [filterCountry, setFilterCountry] = useState([]);
  const [busqueda, setBusqueda] = useState("");

  const peticion = async () => {
    axios.get(`https://restcountries.com/v2/all`).then((response) => {
      setFilterCountry(response.data);
      setCountries(response.data);
    });
  };

  useEffect(() => {
    peticion();
  }, []);

  const filtrar = (termino) => {
    let resultado = countries.filter((el) => {
      if (el.name.toString().toLowerCase().includes(termino.toLowerCase())) {
        return el;
      }
    });

    setFilterCountry(resultado);
  };

  const searchCountries = (e) => {
    setBusqueda(e.target.value);
    filtrar(e.target.value);
  };

  const selectCountry = (el) => {
    console.log(`seleccionando pais ${el.name}`);
    console.log(el);
    filtrar(el.name);
  };

  return (
    <div className="container">
      <label>
        Find countries
        <input
          type="search"
          name="search"
          id="search"
          value={busqueda}
          onChange={searchCountries}
        />
      </label>
      <ul>
        {filterCountry.length === 1
          ? filterCountry.map((el) => <Country key={el.name} el={el} />)
          : filterCountry
          ? filterCountry.map((el) => (
              <li key={el.name}>
                {el.name}{" "}
                <button onClick={() => selectCountry(el)}>show</button>
              </li>
            ))
          : countries.map((el) => <li key={el.name}>{el.name}</li>)}
        {filterCountry.length === 0 && <h2>Not matches</h2>}
      </ul>
    </div>
  );
};

export default EjercicioDos;
