import React, { useEffect, useState } from "react";
import useAxios from "../../hooks/useAxios";
import BookCategoryCard from "../BookCategory/BookCategoryCard";
import useAxiosSecure from "../../hooks/useAxiosSecure";

function AllBooks() {
  const axiosSecure = useAxiosSecure();
  const [allBooks, setAllBooks] = useState([]);
  const [count, setCount] = useState(false);
  useEffect(() => {
    const getData = async () => {
      try {
        const { data } = await axiosSecure(`/books?filter=${count}`);
        setAllBooks([...data]);
      } catch (err) {
        console.log(err);
      }
    };

    getData();
  }, [count]);



  return (
    <div>
      <button
        onClick={()=>setCount(true)}
        className="btn btn-secondary mx-auto flex items-center justify-center my-20"
      >
        filter {allBooks.length}
      </button>
      <button
        onClick={()=>setCount(false)}
        className="btn btn-secondary flex items-center justify-center mx-auto"
      >
        reset
      </button>
      <div className="grid grid-cols-1 lg:grid-cols-3">
        {allBooks.map((book) => (
          <BookCategoryCard
            fromAll
            key={book._id}
            bookInfo={book}
          ></BookCategoryCard>
        ))}
      </div>
    </div>
  );
}

export default AllBooks;
