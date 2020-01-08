import React, { useState } from "react";
import Book from "./Book";
import bookList from "./booklist";
import NewBookForm from "./NewBookForm";

const Library = () => {
  const [books, setBooks] = useState(bookList);

  const handleDelete = indexToDelete => () =>
    setBooks(books.filter((book, index) => index !== indexToDelete));

  const handleAdd = book => setBooks(books.concat(book));

  return (
    <main>
      <h1>My Library</h1>
      <NewBookForm handleAdd={handleAdd} />
      <section className="library">
        {books.map((book, i) => (
          <Book details={book} handleDelete={handleDelete(i)} index={i} />
        ))}
      </section>
    </main>
  );
};

export default Library;
