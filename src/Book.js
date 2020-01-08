import React from "react";

const Book = () => (
  <section
    style={{
      backgroundColor: "lightgrey",
      width: "200px",
      height: "300px",
      margin: "10px",
      borderRadius: "5px",
      padding: "10px",
      position: "relative"
    }}
  >
    <h2>My Book Title</h2>
    <author>
      <strong>Book Author</strong>
    </author>
    <p>
      <em>A short description about the book can go here!</em>
    </p>
    <button style={{ position: "absolute", bottom: "10px" }}>
      Delete Book
    </button>
  </section>
);

export default Book;
