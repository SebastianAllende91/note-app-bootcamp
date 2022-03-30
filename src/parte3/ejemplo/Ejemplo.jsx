import React, { useState } from "react";
import Note from "./components/Note";

const Ejemplo = ({ data }) => {
  const [notes, setNotes] = useState(data);
  const [newNote, setNewNote] = useState("");
  const [showAll, setShowAll] = useState(true);

  const notesToShow = showAll
    ? notes
    : notes.filter((note) => note.important === true);

  const handleChange = (e) => setNewNote(e.target.value);

  const addNote = (e) => {
    e.preventDefault();

    const noteObject = {
      content: newNote,
      date: new Date().toISOString(),
      important: Math.random() < 0.5,
      id: notes.length + 1,
    };
    setNotes([...notes, noteObject]);

    setNewNote("");
  };

  return (
    <div>
      <h1>Notes</h1>
      <button onClick={() => setShowAll(!showAll)}>
        show {showAll ? "important" : "all"}
      </button>
      <ul>
        {notesToShow.map((note) => (
          <Note key={note.id} note={note} />
        ))}
      </ul>
      <form onSubmit={addNote}>
        <input type="text" onChange={handleChange} value={newNote} />
        <button>save</button>
      </form>
    </div>
  );
};

export default Ejemplo;
