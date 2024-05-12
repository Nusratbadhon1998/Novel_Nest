import React, { useEffect, useState } from "react";
import useAxios from "../../../hooks/useAxios";
import PickCard from "./PickCard";

function Pick() {
  const axiosBase = useAxios();
  const [books, setBooks] = useState([]);

  useEffect(() => {
    const getData = async () => {
      const { data } = await axiosBase("pickedBooks");
      setBooks(data);
    };
    getData();
  }, []);
  return (
    <div>
     <div className="flex flex-col items-center my-12">
     <h1 className="text-4xl font-semibold flex justify-center">
        Picked By Readers
      </h1>
      <p>Discover Your Next Read: Books That Truly Matter! Explore titles that leave a lasting impact on readers</p>
     </div>

      <div className="flex gap-3">
        {books.slice(0,4).map((book) => (
          <PickCard book={book} key={book._id}></PickCard>
        ))}
      </div>
    </div>
  );
}

export default Pick;
