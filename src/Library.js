import React, { useState } from "react";
import Book from "./Book";
import bookList from "./booklist";

const Library = () => {
  const [books, setBooks] = useState(bookList);

  return (
    <main>
      <h1>My Library</h1>
      <section className="library">
        {books.map((book, i) => (
          <Book details={book} index={i} />
        ))}
      </section>
    </main>
  );
};

export default Library;
