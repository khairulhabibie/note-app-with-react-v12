import React from "react";
import { addNote } from "../utils/local-data";
import { useNavigate } from "react-router-dom";
import NoteInput from "../components/NoteInput";

const AddPage = () => {
  const navigate = useNavigate();

  function onAddNoteHandler(contact) {
    addNote(contact);
    navigate("/");
  }

  return (
    <section>
      <NoteInput addNote={onAddNoteHandler} />
    </section>
  );
};

export default AddPage;
