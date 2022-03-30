import React from "react";

const FormSearch = ({ handleFilter, isFilter, filter }) => {
  return (
    <div>
      <label>
        Filter show with
        <input
          type="search"
          name="search"
          id="search"
          onChange={handleFilter}
        />
      </label>
      {isFilter &&
        filter.map((el, i) => (
          <p key={i}>
            {el.name} {el.number}
          </p>
        ))}
    </div>
  );
};

export default FormSearch;
