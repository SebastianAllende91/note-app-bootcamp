import React from "react";

const FormContact = ({ addContact, handleChange }) => {
  return (
    <>
      <h2>Add a new</h2>
      <form onSubmit={addContact}>
        <div>
          <label>
            name: <input type="text" name="name" onChange={handleChange} />
          </label>
        </div>
        <div>
          <label>
            number: <input type="text" name="number" onChange={handleChange} />
          </label>
        </div>
        <div>
          <button>add</button>
        </div>
      </form>
    </>
  );
};

export default FormContact;
