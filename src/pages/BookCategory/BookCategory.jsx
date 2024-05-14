import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import useAxios from "../../hooks/useAxios";
import BookCategoryCard from "./BookCategoryCard";
import { FaAnglesRight } from "react-icons/fa6";
import axios from "axios";

function BookCategory() {
  const { categoryName } = useParams();
  const axiosBase = useAxios();
  const [books, setBooks] = useState([]);


  useEffect(() => {
    const getData = async () => {
      try {
        const { data } = await axios.get(`https://novel-nest-server.vercel.app/categories/${categoryName}`);
        setBooks([...data]);
      } catch (err) {
        console.log(err);
      }
    };

    getData();
  }, []);



  return (
  <div>
     <div className="bg-black h-52 my-20 flex flex-col justify-center items-center mt-12 text-beige">
        <h1 className="text-4xl font-bold">Category</h1>
        <div className="flex gap-2 items-center font-extralight text-sm">
          <Link to="/">Home</Link>
          <FaAnglesRight />
          <Link>Category</Link>
        </div>
      </div>

  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
    {books.map(book=><BookCategoryCard key={book._id} bookInfo={book}></BookCategoryCard>)}

  </div>

  </div>)
  ;
}

export default BookCategory;
