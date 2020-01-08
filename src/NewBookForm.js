import React, { useState } from "react";

const Form = props => {
  const [title, setTitle] = useState("");
  const [author, setAuthor] = useState("");
  const [description, setDescription] = useState("");

  const handleTitleChange = e => setTitle(e.target.value);
  const handleAuthorChange = e => setAuthor(e.target.value);
  const handleDescriptionChange = e => setDescription(e.target.value);

  const formIsValid =
    title.length > 0 && author.length > 0 && description.length > 0;

  const handleAdd = e => {
    e.preventDefault();

    if (formIsValid) {
      props.handleAdd({
        title,
        author,
        description
      });
      setTitle("");
      setAuthor("");
      setDescription("");
    }
  };

  return (
    <form>
      <label>
        Book Title:
        <input
          value={title}
          onChange={handleTitleChange}
          placeholder="Add a title here"
        />
      </label>
      <label>
        Book Author:
        <input
          value={author}
          onChange={handleAuthorChange}
          placeholder="Add an author here"
        />
      </label>
      <label>
        Book Description:
        <input
          value={description}
          onChange={handleDescriptionChange}
          placeholder="Add a description here"
        />
      </label>
      <button
        onClick={handleAdd}
        style={{ opacity: formIsValid ? 1 : 0.25 }}
        disabled={!formIsValid}
      >
        Add book
      </button>
    </form>
  );
};

export default Form;
