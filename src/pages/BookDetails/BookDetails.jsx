import React, { useEffect, useRef, useState } from "react";
import { Link, useParams } from "react-router-dom";
import useAxios from "../../hooks/useAxios";
import ModalForm from "./ModalForm";

function BookDetails() {
  const [book, setBook] = useState("");
  const { id } = useParams();
  const axiosBase = useAxios();

  // Getting data
  
  useEffect(() => { const getData = async () => {
      try {
        const { data } = await axiosBase(`/books/${id}`);
        setBook(data);
      } catch (err) {
        console.log(err);
      }
    };

    getData();
  }, []);

  const handleBorrowBook=async e=>{
    e.preventDefault();
    const form= e.target
    console.log(form)
    const name= form.name.value;
    const email= form.email.value;
    const borrowedDate= form.borrowedDate.value;
    const returnDate= form.returnDate.value;
    const borrowedBookInfo= {name,email,borrowedDate,returnDate}
    console.log(borrowedBookInfo)
  }

  return (
    <div>
      BookDetails: {book.name}
      <button
        className="btn"
        onClick={() => document.getElementById("my_modal_5").showModal()}
      >
        open modal
      </button>
      <dialog id="my_modal_5" className="modal modal-bottom sm:modal-middle">
        <div className="modal-box  w-3/4 h-96">
          <form method="dialog">
            <button className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2">
              ✕
            </button>
          </form>
          <h3 className="font-bold text-lg">Hello!</h3>
          <ModalForm handleBorrowBook={handleBorrowBook}></ModalForm>

          <div className="modal-action"></div>
        </div>
      </dialog>
    </div>
  );
}

export default BookDetails;
