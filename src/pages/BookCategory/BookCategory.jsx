import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import useAxios from "../../hooks/useAxios";
import BookCategoryCard from "./BookCategoryCard";

function BookCategory() {
  const { categoryName } = useParams();
  const axiosBase = useAxios();
  const [books, setBooks] = useState([]);
  useEffect(() => {
    const getData = async () => {
      try {
        const { data } = await axiosBase(`/categories/${categoryName}`);
        setBooks([...data]);
      } catch (err) {
        console.log(err);
      }
    };

    getData();
  }, []);

  return <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
    {books.map(book=><BookCategoryCard key={book._id} bookInfo={book}></BookCategoryCard>)}

  </div>;
}

export default BookCategory;
