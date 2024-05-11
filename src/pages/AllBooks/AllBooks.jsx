import React, { useEffect, useState } from "react";
import useAxios from "../../hooks/useAxios";
import BookCategoryCard from "../BookCategory/BookCategoryCard";
import useAxiosSecure from "../../hooks/useAxiosSecure";
import CardView from "./CardView";
import TableView from "./TableView";

function AllBooks() {
  const axiosSecure = useAxiosSecure();
  const [allBooks, setAllBooks] = useState([]);
  const [count, setCount] = useState(false);
  const [view,setView]= useState("")
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
      <select onChange={e=>setView(e.target.value)} className="text-stone-800 input w-full max-w-xs" name="view">
        <option className="text-stone-800" value="">
          --Please Select View--
        </option>
        <option className="text-stone-800" value="card">
          Card View
        </option>
        <option className="text-stone-800" value="table">
          Table View
        </option>
      </select>
      <button
        onClick={() => setCount(true)}
        className="btn btn-secondary mx-auto flex items-center justify-center my-20"
      >
        filter {allBooks.length}
      </button>
      <button
        onClick={() => setCount(false)}
        className="btn btn-secondary flex items-center justify-center mx-auto"
      >
        reset
      </button>
    {view==='card'? <CardView allBooks={allBooks}></CardView>: <TableView allBooks={allBooks}></TableView>}
    </div>
  );
}

export default AllBooks;
