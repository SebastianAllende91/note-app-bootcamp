const Total = ({ parts }) => {
  const ejercicios = "exercises";

  const total = parts.reduce((a, b) => a + (b[ejercicios] || 0), 0);

  return (
    <h3>
      <b>Number of exercises {total}</b>
    </h3>
  );
};

export default Total;
