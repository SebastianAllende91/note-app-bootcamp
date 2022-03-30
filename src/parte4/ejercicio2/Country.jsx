import React from "react";

const Country = ({ el }) => {
  return (
    <li key={el.name} style={{ listStyle: "none" }}>
      <h2>{el.name}</h2>
      <p>
        <b>capital {el.capital}</b>
      </p>
      <p>
        <b>population {el.population}</b>
      </p>
      <h3>Languages</h3>
      <ul>
        {el.languages?.map((item, i) => (
          <li key={i}>
            <b>{item.name}</b>
          </li>
        ))}
      </ul>
      <img src={el.flag} alt={el.name} width={150} />
    </li>
  );
};

export default Country;
