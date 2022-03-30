import React from "react";

const Contacts = ({ persons }) => {
  return (
    <div>
      <h2>Numbers</h2>
      {persons.map((el, i) => (
        <p key={i}>
          {el.name} {el.number}
        </p>
      ))}
    </div>
  );
};

export default Contacts;
