import React from "react";
// import Ejemplo from "./ejemplo/Ejemplo";
import Agenda from "./ejercicio2/Agenda";
// import EjercicioUno from "./ejercicio1/EjercicioUno";

// const notes = [
//   {
//     id: 1,
//     content: "HTML is easy",
//     date: "2019-05-30T17:30:31.098Z",
//     important: true,
//   },
//   {
//     id: 2,
//     content: "Browser can execute only JavaScript",
//     date: "2019-05-30T18:39:34.091Z",
//     important: false,
//   },
//   {
//     id: 3,
//     content: "GET and POST are the most important methods of HTTP protocol",
//     date: "2019-05-30T19:20:14.298Z",
//     important: true,
//   },
// ];

const ParteTres = () => {
  return (
    <div>
      {/* <Ejemplo data={notes} /> 
       <hr /> */}
      {/* <EjercicioUno /> 
       <hr /> */}
      <Agenda />
    </div>
  );
};

export default ParteTres;
