import React, { useEffect, useRef, useState } from "react";
import { CiViewTable } from "react-icons/ci";
import { MdGridView } from "react-icons/md";
import useAxiosSecure from "../../hooks/useAxiosSecure";
import CardView from "./CardView";
import TableView from "./TableView";
import { Link } from "react-router-dom";
import { FaAnglesRight } from "react-icons/fa6";

function AllBooks() {
  // Pagination
  const [itemsPerPage, setItemsPerPage] = useState(6);
  const [currentPage, setCurrentPage] = useState(1);
  const [bookCount, setBookCount] = useState(0);

  //
  const axiosSecure = useAxiosSecure();
  const [allBooks, setAllBooks] = useState([]);
  const [count, setCount] = useState(false);
  const [view, setView] = useState("");

  // For get data
  useEffect(() => {
    const getData = async () => {
      try {
        const { data } = await axiosSecure(
          `/books?filter=${count}&page=${currentPage}&size=${itemsPerPage}`
        );
        setAllBooks([...data]);
      } catch (err) {
        console.log(err);
      }
    };

    getData();
  }, [count, itemsPerPage, currentPage]);

  // For the number of data
  useEffect(() => {
    const getCount = async () => {
      const { data } = await axiosSecure(`/book-count`);
      setBookCount(data.count);
    };
    getCount();
  }, []);


  // Setting pages
  const numberOfPages = Math.ceil(bookCount / itemsPerPage);
  const pages = [...Array(numberOfPages).keys()].map((element) => element + 1);

  return (
    <div>
      <div className="bg-black h-52 flex flex-col justify-center items-center mt-12 text-beige">
        <h1 className="text-4xl font-bold">Our Books</h1>
        <div className="flex gap-2 items-center font-extralight text-sm">
          <Link to="/">Home</Link>
          <FaAnglesRight />
          <Link>Books</Link>
        </div>
      </div>

      <div className="mt-12">
        <div>
          <div className="flex justify-between items-center">
            <div className="flex gap-2 items-center">
              <div>
                <button
                  onClick={(e) => setView("card")}
                  className="rounded-l-xl border-2 px-4 py-2"
                >
                  <MdGridView />
                </button>
                <button
                  onClick={() => setView("table")}
                  className="rounded-r-xl border-2 px-4 py-2"
                >
                  <CiViewTable />
                </button>
              </div>
              <p>Showing All {allBooks.length} results</p>
            </div>
            <div className="">
              <button
                onClick={() => setCount(true)}
                className="px-4 py-2 border-2 rounded-l-lg"
              >
                Show Available Books
              </button>
              <button
                onClick={() => setCount(false)}
                className="px-4 py-2 border-y-2 bg-black text-beige hover:bg-beige hover:text-black transition transform ease-in duration-300 rounded-r-lg"
              >
                reset
              </button>
            </div>
          </div>

          <div className="mt-12">
            {view === "card" ? (
              <CardView allBooks={allBooks}></CardView>
            ) : (
              <TableView allBooks={allBooks}></TableView>
            )}
          </div>
        </div>
        {/* Pagination button */}
        <div className="flex justify-center mt-12">
          {/* Previous Button */}
          <button
            disabled={currentPage === 1}
            onClick={() => setCurrentPage(currentPage - 1)}
            className="px-4 py-2 mx-1 text-gray-700 disabled:text-gray-500 capitalize bg-gray-200 rounded-md disabled:cursor-not-allowed disabled:hover:bg-gray-200 disabled:hover:text-gray-500 hover:bg-yellow  hover:text-white"
          >
            <div className="flex items-center -mx-1">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="w-6 h-6 mx-1 rtl:-scale-x-100"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M7 16l-4-4m0 0l4-4m-4 4h18"
                />
              </svg>

              <span className="mx-1">previous</span>
            </div>
          </button>
          {/* Numbers */}
          {pages.map((btnNum) => (
            <button
              onClick={() => setCurrentPage(btnNum)}
              key={btnNum}
              className={`hidden ${
                currentPage === btnNum ? "bg-yellow text-white" : ""
              } px-4 py-2 mx-1 transition-colors duration-300 transform  rounded-md sm:inline hover:bg-yellow  hover:text-white`}
            >
              {btnNum}
            </button>
          ))}
          {/* Next Button */}
          <button
            disabled={currentPage === numberOfPages}
            onClick={() => setCurrentPage(currentPage + 1)}
            className="px-4 py-2 mx-1 text-gray-700 transition-colors duration-300 transform bg-gray-200 rounded-md hover:bg-yellow disabled:hover:bg-gray-200 disabled:hover:text-gray-500 hover:text-white disabled:cursor-not-allowed disabled:text-gray-500"
          >
            <div className="flex items-center -mx-1">
              <span className="mx-1">Next</span>

              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="w-6 h-6 mx-1 rtl:-scale-x-100"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M17 8l4 4m0 0l-4 4m4-4H3"
                />
              </svg>
            </div>
          </button>
        </div>
      </div>
    </div>
  );
}

export default AllBooks;
