import React, { useContext, useState } from "react";
import noteContext from "../context/notes/noteContext";
import Spinner from "./Spinner";

const AddNote = (props) => {
  const context = useContext(noteContext);
  const { addNote } = context;
  const [note, setNote] = useState({
    title: "",
    description: "",
    tag: "",
  });
  const [showSpinner, setShowSpinner] = useState(false);

  const handleClick = async (e) => {
    if (note.title.length < 5) {
      props.showAlert("Unsuccessful!! Minimum Title length is 5", "warning");
    } else if (note.description.length < 5) {
      props.showAlert(
        "Unsuccessful!! Minimum Description length is 5",
        "warning"
      );
    } else {
      e.preventDefault();
      setShowSpinner(true);

      try {
        await addNote(note.title, note.description, note.tag);
        setNote({
          title: "",
          description: "",
          tag: "",
        });
        props.showAlert("Added Successfully", "success");
      } catch (error) {
        props.showAlert("Error adding note", "error");
      } finally {
        setShowSpinner(false);
      }
    }
  };

  const onChange = (e) => {
    setNote({ ...note, [e.target.name]: e.target.value });
  };

  return (
    <div>
      <h1 className="block mb-2 text-4xl font-medium  text-white">
        Add a Note
      </h1>
      <br />
      <form>
        <div className="mb-6">
          <label
            htmlFor="title"
            className="block mb-2 text-sm font-medium  text-white"
          >
            Title
          </label>
          <input
            onChange={onChange}
            type="text"
            id="title"
            name="title"
            value={note.title}
            className="shadow-sm  border  text-sm rounded-lg  block w-full p-2.5 bg-gray-700 border-gray-600 placeholder-gray-400 text-white focus:ring-blue-500 focus:border-blue-500 shadow-sm-light"
            placeholder="Your Title"
            minLength={5}
            required
          />
        </div>
        <div className="mb-6">
          <label
            htmlFor="description"
            className="block mb-2 text-sm font-medium text-white"
          >
            Description
          </label>
          <input
            onChange={onChange}
            type="text"
            id="description"
            name="description"
            value={note.description}
            className="shadow-sm border text-sm rounded-lg block w-full p-2.5 bg-gray-700 border-gray-600 placeholder-gray-400 text-white focus:ring-blue-500 focus:border-blue-500 shadow-sm-light"
            placeholder="Your Description"
            minLength={5}
            required
          />
        </div>
        <div className="mb-6">
          <label
            htmlFor="tag"
            className="block mb-2 text-sm font-medium  text-white"
          >
            Tag
          </label>
          <input
            onChange={onChange}
            type="text"
            id="tag"
            name="tag"
            value={note.tag}
            className="shadow-sm  border  text-sm rounded-lg   block w-full p-2.5 bg-gray-700 border-gray-600 placeholder-gray-400 text-white focus:ring-blue-500 focus:border-blue-500 shadow-sm-light"
            placeholder="Your Tag"
          />
        </div>

        <button
          type="submit"
          className="text-white   focus:ring-4 focus:outline-none  font-medium rounded-lg text-sm px-5 py-2.5 text-center bg-blue-600 hover:bg-blue-700 focus:ring-blue-800"
          onClick={handleClick}
        >
          Add Note
        </button>
      </form>
      {showSpinner && <Spinner />}
    </div>
  );
};

export default AddNote;
