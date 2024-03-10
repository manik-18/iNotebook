import React, { useContext } from "react";
import noteContext from "../context/notes/noteContext";

const NoteItem = (props) => {
  const context = useContext(noteContext);
  const { deleteNote } = context;
  const { note, updateNote } = props;
  return (
    <div className="max-w-sm p-6 border rounded-lg shadow bg-gray-800 border-gray-700">
      <div className="flex justify-end mb-5">
        <i
          className="fa-regular fa-trash-can fa-lg mx-2 cursor-pointer"
          style={{ color: "#c53030" }}
          onClick={() => {
            deleteNote(note._id);
            props.showAlert("Deleted Successfully", "success");
          }}
        ></i>
        <i
          className="fa-solid fa-pen-to-square fa-lg mx-2 cursor-pointer"
          style={{ color: "#38a169" }}
          onClick={() => {
            updateNote(note);
          }}
        ></i>
      </div>
      <div className="break-all">
        <h5 className="mb-5 text-2xl font-semibold tracking-tight text-white">
          {note.title}
        </h5>

        <p className="mb-3 font-normal text-gray-400">{note.description}</p>
      </div>
    </div>
  );
};

export default NoteItem;
