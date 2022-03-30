import React from "react";
import Content from "./Content";
import Header from "./Header";
import Total from "./Total";

const Courses = ({ data }) => {
  //   console.log(data);
  return (
    <div>
      {data.map((el) => (
        <div key={el.id}>
          <Header name={el.name} />
          <Content parts={el.parts} />
          <Total parts={el.parts} />
        </div>
      ))}
    </div>
  );
};

export default Courses;
