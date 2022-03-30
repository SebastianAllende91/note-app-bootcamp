import React from "react";

const Contacts = ({ persons, delContact }) => {
  return (
    <div>
      <h2>Numbers</h2>
      {persons.map((el) => (
        <p key={el.id}>
          {el.name} {el.number}{" "}
          <button onClick={() => delContact(el)}>Delete</button>
        </p>
      ))}
    </div>
  );
};

export default Contacts;
