const Header = ({ name }) => <h1>{name}</h1>;

const Content = ({ parts }) => {
  return (
    <>
      {parts &&
        parts.map((item, index) => (
          <Part key={index} name={item.name} exercises={item.exercises} />
        ))}
    </>
  );
};

const Part = ({ name, exercises }) => (
  <p>
    {name} {exercises}
  </p>
);

const Total = ({ parts }) => {
  const ejercicios = "exercises";

  const total = parts.reduce((a, b) => a + (b[ejercicios] || 0), 0);

  return (
    <p>
      <b>Number of exercises {total}</b>
    </p>
  );
};

function Nivelacion() {
  const course = {
    name: "Half Stack application development",
    parts: [
      {
        name: "Fundamentals of React",
        exercises: 10,
      },
      {
        name: "Using props to pass data",
        exercises: 7,
      },
      {
        name: "State of a component",
        exercises: 14,
      },
      {
        name: "Redux",
        exercises: 11,
        id: 4,
      },
    ],
  };

  const { name, parts } = course;
  return (
    <div>
      <Header name={name} />
      <Content parts={parts} />
      <Total parts={parts} />
    </div>
  );
}

export default Nivelacion;
