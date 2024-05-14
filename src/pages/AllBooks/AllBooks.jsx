import React, { useEffect, useRef, useState } from "react";
import { CiViewTable } from "react-icons/ci";
import { MdGridView } from "react-icons/md";
import useAxiosSecure from "../../hooks/useAxiosSecure";
import CardView from "./CardView";
import TableView from "./TableView";
import { Link } from "react-router-dom";
import { FaAnglesRight } from "react-icons/fa6";
import Swal from "sweetalert2";
import { PropagateLoader } from "react-spinners";


function AllBooks() {
  // Pagination
  const [itemsPerPage, setItemsPerPage] = useState(6);
  const [currentPage, setCurrentPage] = useState(1);
  const [bookCount, setBookCount] = useState(0);

  //
  const axiosSecure = useAxiosSecure();
  const [allBooks, setAllBooks] = useState([]);
  const [count, setCount] = useState(false);
  const [view, setView] = useState("card");
const [bookLoading,setBookLoading]= useState(true)

  // For get data
  useEffect(() => {
    const getData = async () => {
      try {
        const { data } = await axiosSecure(
          `/books?filter=${count}&page=${currentPage}&size=${itemsPerPage}`
        );
        setAllBooks([...data]);
        setBookLoading(false)
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

  const handleDelete = (id) => {
    const swalWithBootstrapButtons = Swal.mixin({
      customClass: {
        confirmButton: "btn btn-success",
        cancelButton: "btn btn-danger",
      },
      buttonsStyling: false,
    });

    swalWithBootstrapButtons
      .fire({
        title: "Are you sure?",
        text: "You won't be able to revert this!",
        icon: "warning",
        showCancelButton: true,
        confirmButtonText: "Yes, delete it!",
        cancelButtonText: "No, cancel!",
        reverseButtons: true,
      })
      .then((result) => {
        if (result.isConfirmed) {
          axiosSecure.delete(`books/${id}`).then((data) => console.log(data));
          swalWithBootstrapButtons.fire({
            title: "Deleted!",
            text: "Your Book has been deleted.",
            icon: "success",
          });
          const remaining = allBooks.filter((book) => book._id !== id);
          setAllBooks(remaining);
        } else if (result.dismiss === Swal.DismissReason.cancel) {
          swalWithBootstrapButtons.fire({
            title: "Cancelled",
            text: "Your Book is safe :)",
            icon: "error",
          });
        }
      });
  };

  if (bookLoading){
    return (
      <div className="flex justify-center items-center min-h-[400px]">
        <PropagateLoader
          color="#FFFF00"
          loading={bookLoading}
          size={40}
          speedMultiplier={1}
        />
      </div>
    );
  }
  // Setting pages
  const numberOfPages = Math.ceil(bookCount / itemsPerPage);
  const pages = [...Array(numberOfPages).keys()].map((element) => element + 1);

  return (
    <div>
      {/* Black Part */}
      <div className="bg-black h-52 flex flex-col justify-center items-center mt-12 text-beige">
        <h1 className="text-4xl font-bold">Our Books</h1>
        <div className="flex gap-2 items-center font-extralight text-sm">
          <Link to="/">Home</Link>
          <FaAnglesRight />
          <Link>Books</Link>
        </div>
      </div>
      {/* Bottom Part */}
      <div className="mt-12">
        <div>
          <div className="flex flex-col lg:flex-row gap-6 justify-between items-center">
            <div className="flex gap-2 items-center">
              <div>
                <select className="px-4 py-2 border border-black" onChange={(e)=>setView(e.target.value)} name="view" id="">
                  <option value="">---Please Select View---</option>
                <option value="card">Grid View</option>
                <option value="table">Table View</option>
                </select>
               
              </div>
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
              <CardView handleDelete={handleDelete} allBooks={allBooks}></CardView>
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
