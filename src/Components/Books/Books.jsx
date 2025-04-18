import React, {Suspense} from "react";
import {useLoaderData} from "react-router";
import Book from "../Book/Book";

const Books = () => {
  const books = useLoaderData();

  return (
    <div className="max-w-7xl mx-auto px-2 mt-8">
      <h1 className="text-center font-bold text-4xl">Books</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 mt-8 gap-5">
        {books.map((book) => (
          <Book key={book.bookId} book={book}></Book>
        ))}
      </div>
    </div>
  );
};

export default Books;
