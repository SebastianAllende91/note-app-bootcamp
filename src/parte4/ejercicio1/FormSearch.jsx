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
          value={filter}
          onChange={handleFilter}
        />
      </label>
      {isFilter &&
        isFilter.map((el, i) => (
          <p key={i}>
            {el.name} {el.number}
          </p>
        ))}
    </div>
  );
};

export default FormSearch;
