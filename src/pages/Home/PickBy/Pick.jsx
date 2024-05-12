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
      <h1 className="text-4xl font-semibold flex justify-center">
        Picked By Readers
      </h1>

      <div className="flex gap-3">
        {books.slice(5, 9).map((book) => (
          <PickCard book={book} key={book._id}></PickCard>
        ))}
      </div>
    </div>
  );
}

export default Pick;
