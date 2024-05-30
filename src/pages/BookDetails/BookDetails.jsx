import React, { useEffect, useRef, useState } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";
import ModalForm from "./ModalForm";
import useAxiosSecure from "../../hooks/useAxiosSecure";
import { MdOutlineMenuBook } from "react-icons/md";
import { toast } from "react-toastify";
import { MdPerson4 } from "react-icons/md";
import Rating from "react-rating";
import { FaRegStar, FaStar } from "react-icons/fa";
import { PropagateLoader } from "react-spinners";


function BookDetails() {
  const [book, setBook] = useState("");
  const axiosSecure = useAxiosSecure();
  const [bookLoading,setBookLoading]= useState(true)
  const { id } = useParams();

  const navigate = useNavigate();

  const targetRef = useRef();

  // Getting data

  useEffect(() => {
    const getData = async () => {
      try {
        const { data } = await axiosSecure(`/books/${id}`);
        setBook(data);
        setBookLoading(false)
      } catch (err) {
        console.log(err);
      }
    };

    getData();
  }, []);

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
  const {
    name: bookName,
    category,
    author,
    image,
    _id: bookId,
    quantity,
    contents,
    description,
    rating
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
      <div className="flex flex-col lg:flex-row gap-12">
        <div className="h-[500px] border rounded p-4">
          <img className="h-full w-full" src={image} alt="" />
        </div>
        <div className="flex-1 border rounded p-4 flex flex-col justify-center items-start space-y-4">
        <sup>
              {quantity <= 0 ? (
                <small className="text-sm text-red border rounded-lg px-4 -py-2 ">
                  Not Available
                </small>
              ) : (
                <small className="text-green bg-[#e6f6e3] border rounded-lg px-4 -py-2 text-sm">
                  Available {quantity} pieces
                </small>
              )}
            </sup>
          <h1 className="text-4xl font-bold">
            {bookName}{" "}
          
          </h1>
          <div className="flex gap-5">
            <p className="flex justify-start items-center gap-3 italic">
              <MdPerson4 className="text-yellow" />
              {author}
            </p> ||
            <p>{category}</p> ||
            <p><Rating
                emptySymbol={<FaRegStar className="text-yellow" />}
                fullSymbol={<FaStar className="text-yellow" />}
                initialRating={`${rating}`}
                readonly
              /></p>
          </div>
          <p ref={targetRef}>{contents}</p>
          <div>
            <button
              disabled={quantity === 0}
              className={`border border-black px-4 py-2 bg-black  ${quantity===0? "text-ash":"text-yellow"}`}
              onClick={() => document.getElementById("my_modal_5").showModal()}
            >
              Borrow Book
            </button>
            <dialog
              id="my_modal_5"
              className="modal mx-auto  modal-bottom sm:modal-middle"
            >
              <div className="modal-box  h-96">
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
