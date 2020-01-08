import React, { useState } from "react";
import Book from "./Book";
import bookList from "./booklist";

const Library = () => {
  const [books, setBooks] = useState(bookList);

  const handleDelete = indexToDelete => () =>
    setBooks(books.filter((book, index) => index !== indexToDelete));

  return (
    <main>
      <h1>My Library</h1>
      <section className="library">
        {books.map((book, i) => (
          <Book details={book} handleDelete={handleDelete(i)} index={i} />
        ))}
      </section>
    </main>
  );
};

export default Library;
