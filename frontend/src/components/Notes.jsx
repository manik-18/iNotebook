import React, { useContext, useEffect, useState } from "react";
import noteContext from "../context/notes/noteContext";
import NoteItem from "./NoteItem";
import AddNote from "./AddNote";
import { useNavigate } from "react-router-dom";

const Notes = (props) => {
  let navigate = useNavigate();

  const context = useContext(noteContext);
  const { notes, getNotes, editNote } = context;

  useEffect(() => {
    if (!localStorage.getItem("token")) {
      navigate("/login");
    } else {
      getNotes();
    }
  }, []);

  const [note, setNote] = useState({
    id: "",
    etitle: "",
    edescription: "",
    etag: "",
  });

  const [isModalVisible, setModalVisible] = useState(false);

  const openModal = () => {
    setModalVisible(true);
  };

  const closeModal = () => {
    setModalVisible(false);
  };

  const updateNote = (currentNote) => {
    setNote({
      id: currentNote._id,
      etitle: currentNote.title,
      edescription: currentNote.description,
      etag: currentNote.tag,
    });
    openModal();
  };

  const handleClick = () => {
    if (note.etitle.length < 5) {
      props.showAlert("Unsuccessful!! Minimum Title length is 5", "warning");
    } else if (note.edescription.length < 5) {
      props.showAlert(
        "Unsuccessful!! Minimum Description length is 5",
        "warning"
      );
    } else {
      closeModal();
      editNote(note.id, note.etitle, note.edescription, note.etag);
      props.showAlert("Updated Successfully", "success");
    }
  };

  const onChange = (e) => {
    setNote({ ...note, [e.target.name]: e.target.value });
  };

  return (
    <>
      <AddNote showAlert={props.showAlert} />

      <button
        onClick={openModal}
        className="hidden text-white focus:ring-4 focus:outline-none font-medium rounded-lg text-sm px-5 py-2.5 text-center bg-blue-600 hover:bg-blue-700 focus:ring-blue-800"
        type="button"
      >
        Toggle modal
      </button>

      {isModalVisible && (
        <div className="fixed inset-0 flex items-center justify-center z-50">
          <div className="absolute inset-0 bg-black opacity-50"></div>
          <div className="bg-gray-700 w-80 p-6 rounded-lg z-50 border-gray-600">
            {/* Modal content */}
            <h3 className="text-xl font-semibold mb-4 text-white">Edit Note</h3>
            <form>
              <div className="mb-4">
                <label
                  htmlFor="etitle"
                  className="block mb-2 text-sm font-medium text-white"
                >
                  Title
                </label>
                <input
                  onChange={onChange}
                  type="text"
                  id="etitle"
                  name="etitle"
                  value={note.etitle}
                  className="w-full px-3 py-2 rounded-lg border focus:outline-none focus:ring focus:border-blue-500"
                  placeholder="Your Title"
                  minLength={5}
                  required
                />
              </div>
              <div className="mb-4">
                <label
                  htmlFor="edescription"
                  className="block mb-2 text-sm font-medium text-white"
                >
                  Description
                </label>
                <input
                  onChange={onChange}
                  type="text"
                  id="edescription"
                  name="edescription"
                  value={note.edescription}
                  className="w-full px-3 py-2 rounded-lg border focus:outline-none focus:ring focus:border-blue-500"
                  placeholder="Your Description"
                  minLength={5}
                  required
                />
              </div>
              <div className="mb-4">
                <label
                  htmlFor="etag"
                  className="block mb-2 text-sm font-medium text-white"
                >
                  Tag
                </label>
                <input
                  onChange={onChange}
                  type="text"
                  id="etag"
                  name="etag"
                  value={note.etag}
                  className="w-full px-3 py-2 rounded-lg border focus:outline-none focus:ring focus:border-blue-500"
                  placeholder="Your Tag"
                />
              </div>
            </form>
            <div className="flex justify-end mt-4">
              <button
                onClick={handleClick}
                className="mr-3 text-white focus:ring-4 focus:outline-none  font-medium rounded-lg text-sm px-5 py-2.5 text-center bg-blue-600 hover:bg-blue-700 focus:ring-blue-800"
                type="button"
              >
                Update Note
              </button>
              <button
                onClick={closeModal}
                className="focus:ring-4 focus:outline-none rounded-lg border text-sm font-medium px-5 py-2.5 focus:z-10 bg-gray-700 text-gray-300 border-gray-500 hover:text-white hover:bg-gray-600 focus:ring-gray-600"
                type="button"
              >
                Close
              </button>
            </div>
          </div>
        </div>
      )}

      <div className="my-3">
        <br />
        <br />
        <h1 className="block mb-2 text-4xl font-medium text-white">
          Your Notes
        </h1>
        <br />
        <br />
        <div className="animate-bounce block mb-2 text-xl font-medium text-red-500 text-center">
          {notes.length === 0 && "No Notes to Display"}
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {notes.map((note) => {
            return (
              <NoteItem
                key={note._id}
                updateNote={updateNote}
                showAlert={props.showAlert}
                note={note}
              />
            );
          })}
        </div>
      </div>
    </>
  );
};

export default Notes;
