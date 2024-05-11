import React, { useEffect, useState } from "react";
import useAuth from "../../hooks/useAuth";
import useAxios from "../../hooks/useAxios";
import { Link } from "react-router-dom";
import { toast } from "react-toastify";
import RingLoader from "react-spinners/RingLoader";
import useAxiosSecure from "../../hooks/useAxiosSecure";

function BorrowedBooks() {
  const { user, loading } = useAuth();
  const [borrowedBooks, setBorrowedBooks] = useState([]);
  const axiosSecure = useAxiosSecure();

  useEffect(() => {
    const getData = async () => {
      try {
        if (user) {
          const { data } = await axiosSecure(`/borrowedBooks/${user.email}`);
          setBorrowedBooks([...data]);
        }
      } catch (err) {
        console.log(err);
      }
    };

    getData();
  }, [user]); 

  const handleReturn = async (id) => {
    try {
      const { data } = await axiosSecure.delete(`/borrowedBooks/${id}`);
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
      <div className="flex justify-center items-center min-h-[400px]">
        <RingLoader color="#6323c6" loading={loading} size={100} speedMultiplier={1} />
      </div>
    );
  }

  return (
    <div className="overflow-x-auto">
      <div className="overflow-x-auto">
        <table className="table">
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
                        <img className="w-16 h-16" src={book.image} alt={book.bookName} />
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
                    onClick={() => handleReturn(book.bookId)}
                    className="btn btn-ghost btn-xs"
                  >
                    Return
                  </button>
                </th>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default BorrowedBooks;
