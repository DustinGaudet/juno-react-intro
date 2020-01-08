import React from "react";

const Book = props => (
  <section className="book">
    <h2>{props.details.title}</h2>
    <h3>{props.details.author}</h3>
    <p>
      <em>{props.details.description}</em>
    </p>
    <button style={{ position: "absolute", bottom: "10px" }}>
      Delete Book {props.index + 1}
    </button>
  </section>
);

export default Book;
