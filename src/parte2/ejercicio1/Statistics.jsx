const Opinion = ({ text, value }) => (
  <tbody>
    <tr>
      <td>{text}</td>
      <td>{value}</td>
    </tr>
  </tbody>
);

export const Statistics = ({ good, neutral, bad }) => {
  return (
    <div>
      <h2>Statistics</h2>

      {good + neutral + bad === 0 ? (
        <h3> No feedback given</h3>
      ) : (
        <table>
          <Opinion text="good" value={good} />
          <Opinion text="neutral" value={neutral} />
          <Opinion text="bad" value={bad} />
          <Opinion text="all" value={good + neutral + bad} />
          <Opinion
            text="average"
            value={(good - bad) / (good + neutral + bad)}
          />
          <Opinion
            text="positive"
            value={(good * 100) / (good + neutral + bad)}
          />
        </table>
      )}
    </div>
  );
};
