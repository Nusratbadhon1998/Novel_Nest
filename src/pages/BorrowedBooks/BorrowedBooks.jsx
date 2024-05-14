import React, { useEffect, useState } from "react";
import useAuth from "../../hooks/useAuth";
import { Link } from "react-router-dom";
import { toast } from "react-toastify";
import RingLoader from "react-spinners/RingLoader";
import PropagateLoader  from 'react-spinners/PropagateLoader'
import useAxiosSecure from "../../hooks/useAxiosSecure";
import { LuBookOpenCheck } from "react-icons/lu";
import NoBorrowedBooks from "./NoBorrowedBooks";
import { FaAnglesRight } from "react-icons/fa6";

function BorrowedBooks() {
  const { user, loading } = useAuth();
  const [bookLoading,setBookLoading]= useState(true)
  const [borrowedBooks, setBorrowedBooks] = useState([]);
  const axiosSecure = useAxiosSecure();

  useEffect(() => {
    const getData = async () => {
      try {
        if (user) {
          const { data } = await axiosSecure(`/borrowedBooks/${user.email}`);
          setBorrowedBooks([...data]);
          setBookLoading(false)
        }
      } catch (err) {
        console.log(err);
      }
    };

    getData();
  }, [user]);

  const handleReturn = async (id,email) => {
    try {
      const { data } = await axiosSecure.delete(`/borrowedBooks?id=${id}&email=${email}`);
      if (data.deletedCount) {
        const updatedBooks = borrowedBooks.filter((book) => book.bookId !== id);
        setBorrowedBooks(updatedBooks);
        toast.success("Returned the book");
      }
    } catch (err) {
      console.log(err);
    }
  };



  if (loading) {
    return (
      <div className="flex justify-center items-center min-h-[600px]">
        <RingLoader
          color="#FFFF00"
          loading={loading}
          size={100}
          speedMultiplier={1}
        />
      </div>
    );
  }

  if (bookLoading){
    return (
      <div className="flex justify-center items-center min-h-[600px]">
        <PropagateLoader
          color="#FFFF00"
          loading={bookLoading}
          size={20}
          speedMultiplier={1}
        />
      </div>
    );
  }
  if (borrowedBooks.length <= 0) return <NoBorrowedBooks></NoBorrowedBooks>;
  return (
    <div>
      {" "}
      <div className="bg-black h-52 flex flex-col justify-center items-center mt-12 text-beige">
        <h1 className="text-4xl font-bold">Borrowed Books</h1>
        <div className="flex gap-2 items-center font-extralight text-sm">
          <Link to="/">Home</Link>
          <FaAnglesRight />
          <Link>Borrowed Books</Link>
        </div>
      </div>
      <div className="overflow-x-auto my-20">
        <div className="overflow-x-auto">
          <table className="table font-bold">
            {/* head */}
            <thead className="text-stone-900">
              <tr>
                <th></th>
                <th>Name</th>
                <th>Category</th>
                <th>Borrowed Date</th>
                <th>Return Date</th>
                <th></th>
                <th></th>
                <th></th>
              </tr>
            </thead>
            <tbody>
              {borrowedBooks.map((book) => (
                <tr key={book.bookId}>
                  <td>
                    <div className="flex items-center gap-3">
                      <div className="avatar">
                        <div className="mask mask-squircle w-32 h-32">
                          <img
                            className="w-16 h-16"
                            src={book.image}
                            alt={book.bookName}
                          />
                        </div>
                      </div>
                    </div>
                  </td>
                  <td>{book.bookName}</td>
                  <td>{book.category}</td>
                  <td>{book.borrowedDate}</td>
                  <td>{book.returnDate}</td>
                  <th>
                    <button
                      onClick={() => handleReturn(book.bookId,book.email)}
                      className="px-4 py-2 flex items-center"
                    >
                      <LuBookOpenCheck className="w-8 h-8" />
                    </button>
                  </th>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}

export default BorrowedBooks;
