import React, { useEffect, useState } from "react";
import useAuth from "../../hooks/useAuth";
import useAxios from "../../hooks/useAxios";
import { Link } from "react-router-dom";
import { toast } from "react-toastify";

function BorrowedBooks() {
  const { user, isLoading } = useAuth();
  const [borrowedBooks, setBorrowedBooks] = useState([]);
  const axiosBase = useAxios();
  const [email, setEmail] = useState("");
  // const axiosSecure= useAxiosSecure()

  useEffect(() => {
    if (user) setEmail(user?.email || " ");
  }, []);
  if (isLoading) {
    return <p>Loading...</p>;
  }

  useEffect(() => {
    try {
      getData();
    } catch (err) {}
  }, []);

  const getData = async () => {
    const { data } = await axiosBase(`/borrowedBooks/${user.email}`);
    setBorrowedBooks([...data]);
  };

  const handleReturn = async (id) => {
    try {
      const { data } = await axiosBase.delete(`/borrowedBooks/${id}`);
      if (data.deletedCount) {
        getData();
        toast.success("Returned the book")
      }
    } catch (err) {
      console.log(err);
    }
  };

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
            {borrowedBooks.map((book) => {
              return (
                <tr key={book.bookId}>
                  <td>
                    <div className="flex items-center gap-3">
                      <div className="avatar">
                        <div className="mask mask-squircle w-32 h-32 ">
                          <img className="w-16 h-16" src={book.image} />
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
              );
            })}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default BorrowedBooks;
