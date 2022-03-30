import React, { useState } from "react";

const initialPoints = { 0: 0, 1: 0, 2: 0, 3: 0, 4: 0, 5: 0 };

const anecdotes = [
  "If it hurts, do it more often",
  "Adding manpower to a late software project makes it later!",
  "The first 90 percent of the code accounts for the first 90 percent of the development time...The remaining 10 percent of the code accounts for the other 90 percent of the development time.",
  "Any fool can write code that a computer can understand. Good programmers write code that humans can understand.",
  "Premature optimization is the root of all evil.",
  "Debugging is twice as hard as writing the code in the first place. Therefore, if you write the code as cleverly as possible, you are, by definition, not smart enough to debug it.",
];

const Anecdotes = () => {
  const [selected, setSelected] = useState(0);
  const [points, setPoints] = useState(initialPoints);
  const [mostVotedAnecdote, setMostVotedAnecdote] = useState(0);

  const handleClick = () => {
    const indexArray = Math.floor(Math.random() * anecdotes.length);

    setSelected(indexArray);
  };

  const vote = () => {
    const copy = { ...points };
    copy[selected] += 1;
    setPoints(copy);

    for (const [key] of Object.entries(copy)) {
      if (copy[key] > copy[mostVotedAnecdote]) {
        setMostVotedAnecdote(key);
      }
    }
  };

  return (
    <div>
      <h1>Anecdote of the day</h1>
      <div>{anecdotes[selected]}</div>
      <div>has {points[selected]} votes</div>
      <button onClick={vote}>vote</button>
      <button onClick={handleClick}>next anecdote</button>
      <h1>Anecdote with most votes</h1>
      <div>{anecdotes[mostVotedAnecdote]}</div>
      <div>has {points[mostVotedAnecdote]} votes</div>
    </div>
  );
};

export default Anecdotes;
