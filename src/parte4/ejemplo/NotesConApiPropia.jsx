import React, { useState, useEffect } from "react";
import Footer from "./components/Footer";
import Note from "./components/Notes";
import Notification from "./components/Notification";
import { create, getAll, update } from "./service/notes";
import "./styles/style.css";

const NotesConApiPropia = () => {
  const [notes, setNotes] = useState([]);
  const [newNote, setNewNote] = useState("");
  const [showAll, setShowAll] = useState(true);
  const [errorMessage, setErrorMessage] = useState(null);

  useEffect(() => {
    console.log("Effect");
    getAll().then((response) => {
      console.log("promise fulfilled");
      setNotes(response.data);
    });
  }, []);

  const notesToShow = showAll
    ? notes
    : notes.filter((note) => note.important === true);

  const handleChange = (e) => setNewNote(e.target.value);

  const addNote = (e) => {
    e.preventDefault();

    const noteObject = {
      content: newNote,
      date: new Date(),
      important: Math.random() < 0.5,
    };

    create(noteObject).then((response) => {
      console.log(response);
      setNotes([...notes, response.data]);
      setNewNote("");
    });
  };

  const toggleImportanceOf = (id) => {
    // const url = `http://localhost:3001/notes/${id}`;
    const note = notes.find((n) => n.id === id);
    const changedNote = { ...note, important: !note.important };

    console.log(changedNote);

    update(id, changedNote)
      .then((response) =>
        setNotes(notes.map((note) => (note.id !== id ? note : response.data)))
      )
      .catch((error) => {
        setErrorMessage(
          `Note '${note.content}' was already removed from server`
        );
        setTimeout(() => {
          setErrorMessage(null);
        }, 5000);
        setNotes(notes.filter((n) => n.id !== id));
      });
  };

  console.log(notes);

  return (
    <div>
      <h1>Notes</h1>
      <Notification message={errorMessage} />
      <button onClick={() => setShowAll(!showAll)}>
        show {showAll ? "important" : "all"}
      </button>
      <ul>
        {notesToShow.map((note) => (
          <Note
            key={note.id}
            note={note}
            toggleImportance={() => toggleImportanceOf(note.id)}
          />
        ))}
      </ul>
      <form onSubmit={addNote}>
        <input type="text" onChange={handleChange} value={newNote} />
        <button>save</button>
      </form>
      <Footer />
    </div>
  );
};

export default NotesConApiPropia;
