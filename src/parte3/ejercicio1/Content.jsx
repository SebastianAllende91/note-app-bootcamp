import Part from "./Part";

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

export default Content;
