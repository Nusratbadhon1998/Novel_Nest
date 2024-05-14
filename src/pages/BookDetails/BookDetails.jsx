import React, { useEffect, useRef, useState } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";
import ModalForm from "./ModalForm";
import useAxiosSecure from "../../hooks/useAxiosSecure";
import { MdOutlineMenuBook } from "react-icons/md";
import { toast } from "react-toastify";
import { MdPerson4 } from "react-icons/md";

function BookDetails() {
  const [book, setBook] = useState("");
  const axiosSecure = useAxiosSecure();
  const { id } = useParams();

  const navigate = useNavigate();

  const targetRef = useRef();

  // Getting data

  useEffect(() => {
    const getData = async () => {
      try {
        const { data } = await axiosSecure(`/books/${id}`);
        setBook(data);
      } catch (err) {
        console.log(err);
      }
    };

    getData();
  }, []);
  const {
    name: bookName,
    category,
    author,
    image,
    _id: bookId,
    quantity,
    contents,
    description,
  } = book;

  const handleBorrowBook = async (e) => {
    e.preventDefault();
    const form = e.target;
    const name = form.name.value;
    const email = form.email.value;
    const borrowedDate = form.borrowedDate.value;
    const returnDate = form.returnDate.value;

    const borrowedBookInfo = {
      name,
      email,
      borrowedDate,
      returnDate,
      bookId,
      bookName,
      image,
      category,
    };

    try {
      const { data } = await axiosSecure.post(
        "/borrowedBooks",
        borrowedBookInfo
      );
      toast.success("This book is added in your borrowed list");
      navigate("/borrowed-books");
    } catch (err) {
      toast.error(err.response.data); // Use toast.error instead of toast.success

      e.target.reset();
    }
  };

  return (
    <div className="my-20">
      <div className="flex gap-12">
        <div className="h-[500px]">
          <img className="h-full w-full" src={image} alt="" />
        </div>
        <div className="flex-1 flex flex-col justify-center items-start space-y-4">
          <h1 className="text-4xl font-bold">
            {bookName}{" "}
            <sup>
              {quantity <= 0 ? (
                <small className="text-sm text-red border rounded-lg px-4 -py-2 ">
                  Not Available
                </small>
              ) : (
                <small className="text-green border rounded-lg px-4 -py-2 text-sm">
                  Available {quantity} pieces
                </small>
              )}
            </sup>
          </h1>
          <div>
            <p className="flex items-center gap-3 italic">
              <MdPerson4 />
              {author}
            </p>
            <p></p>
          </div>
          <p ref={targetRef}>{contents}</p>
          <div>
            <button
              disabled={quantity === 0}
              className={`border border-black px-4 py-2 bg-black  ${quantity===0? "text-ash":"text-white"}`}
              onClick={() => document.getElementById("my_modal_5").showModal()}
            >
              Borrow Book
            </button>
            <dialog
              id="my_modal_5"
              className="modal modal-bottom sm:modal-middle"
            >
              <div className="modal-box  w-3/4 h-96">
                <form method="dialog">
                  <button className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2">
                    ✕
                  </button>
                </form>
                <h3 className="font-bold text-lg mb-4">
                  Please give your details
                </h3>
                <ModalForm handleBorrowBook={handleBorrowBook}></ModalForm>

                <div className="modal-action"></div>
              </div>
            </dialog>
          </div>
        </div>
      </div>
      {/* Open Modal */}
    </div>
  );
}

export default BookDetails;
