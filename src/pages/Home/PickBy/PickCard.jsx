import React from "react";
import Rating from "react-rating";
import { FaRegStar } from "react-icons/fa";
import { FaStar } from "react-icons/fa6";

function PickCard({ book }) {
  return (
    <div className="flex flex-col items-center justify-center w-full max-w-sm mx-auto">
      <div
        className="w-64 h-80 bg-gray-300 bg-center bg-cover rounded-lg shadow-md"
        style={{
          backgroundImage:
            `url(${book.image})`,
        }}
      />
      <div className="w-56 z-40 -mt-8 overflow-hidden bg-white rounded-lg shadow-lg md:w-64 dark:bg-gray-800">
       
        <div className="bg-beige flex flex-col justify-center items-center">
          <h1 className="font-bold">{book.name}</h1>
          <p className="italic">{book.author}</p>
          <Rating
                  emptySymbol={<FaRegStar className="text-yellow" />}
                  fullSymbol={<FaStar className="text-yellow" />}
                  initialRating={`${book.rating}`}

                  readonly
                />
        </div>
      </div>
    </div>
  );
}

export default PickCard;
