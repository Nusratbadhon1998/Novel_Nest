import React from "react";
import BookCategoryCard from "../BookCategory/BookCategoryCard";
import BookCard from "./BookCard";

function CardView({ allBooks, handleDelete }) {
  return (
    <div className="grid grid-cols-1 lg:grid-cols-3">
      {allBooks.map((book) => (
        <BookCard
          handleDelete={handleDelete}
          fromAll
          key={book._id}
          bookInfo={book}
        ></BookCard>
      ))}
    </div>
  );
}

export default CardView;
