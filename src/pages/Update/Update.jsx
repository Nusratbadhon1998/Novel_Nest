import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import useAxios from "../../hooks/useAxios";
import { toast } from "react-toastify";
import useAxiosSecure from "../../hooks/useAxiosSecure";

function Update() {
  const { id } = useParams();
  const axiosSecure = useAxiosSecure();
  const [book, setBook] = useState("");
  const navigate= useNavigate()
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


  const handleUpdate = async (e) => {
    e.preventDefault();
    const form = e.target;
    const name = form.bookName.value;
    const author = form.authorName.value;
    const rating = form.rating.value;
    const category = form.category.value;
    const image = form.image.value;

    const bookInfo = {
      name,
      author,
      rating,
      category,
      image,
    };

    try {
      const { data } = await axiosSecure.put(`/books/${book._id}`, bookInfo);
      if (data.modifiedCount){
        toast.success("Successfully Updated")
      }
      navigate("/");
    } catch (err) {
      console.log(err);
    }
  };

  const submitCss =
    "block w-full p-3 text-center rounded-lg text-stone-50 bg-gradient-to-r from-[#612bd3] to-[#6e008f]   font-semibold mt-4";

  const labelCss = "block text-stone-800 font-semibold text-base ";

  const inputCss =
    "input w-full defaultValue:text-stone-800 md:max-w-lg  lg:max-w-xs placeholder:text-sm placeholder:font-semibold placeholder:text-stone-800 text-stone-800";

  return (
    <div className="w-full lg:w-[60%] mx-auto bg-stone-400 bg-opacity-35 rounded-lg p-5 mb-4">
      <div className="p-3 m-3 ">
        <form onSubmit={handleUpdate}>
          <div className="grid grid-cols-1 md:grid-cols-1 lg:grid-cols-2 gap-3 full mx-auto">
            {/* Book Name */}
            <div>
              <label className={labelCss}>Book Name</label>
              <input
                name="bookName"
                type="text"
                className={inputCss}
                defaultValue={book.name || ""}
                required
              />
            </div>
            {/* Author Name */}
            <div>
              <label className={labelCss}>Author Name</label>
              <input
                name="authorName"
                type="text"
                className={inputCss}
                defaultValue={book.author || ""}
                required
              />
            </div>
            {/* Rating */}
            <div>
              <label className={labelCss}>Rating</label>
              <input
                name="rating"
                type="number"
                className={inputCss}
                defaultValue={book.rating || ""}
                required
              />
            </div>

            {/* Category */}
            <div>
              <label className={labelCss}>Category</label>
              <select
                className="text-stone-800 input w-full max-w-xs"
                name="category"
              >
                <option className="text-stone-800" value="">
                  {book.category || "Please Choose Category"}
                </option>
                <option className="text-stone-800" value="Sci-Fi">
                  Sci-Fi
                </option>
                <option className="text-stone-800" value="Novel">
                  Novel
                </option>
                <option className="text-stone-800" value="Horror">
                  Horror
                </option>
                <option className="text-stone-800" value="Fantasy">
                  Fantasy
                </option>
                <option className="text-stone-800" value="Adventure">
                  Adventure
                </option>
              </select>
            </div>
          </div>
          <div className="space-y-4">
            <fieldset className="w-full space-y-1 text-gray-800">
              <label htmlFor="url" className={labelCss}>
                Photo Url
              </label>
              <div className="flex">
                <span className="flex items-center px-3 pointer-events-none sm:text-sm rounded-l-md text-stone-50 bg-gradient-to-r from-[#612bd3] to-[#6e008f]  ">
                  https://
                </span>
                <input
                  type="text"
                  name="image"
                  id="url"
                  defaultValue={book.image}
                  className="flex flex-1 border sm:text-sm rounded-r-md focus:ring-inset border-gray-300 text-gray-800  focus:ring-violet-600 input input-bordered w-full max-w-full"
                  required
                />
              </div>
            </fieldset>
          </div>
          {/* Submit btn */}
          <input className={submitCss} type="submit" value="Update Book" />
        </form>
      </div>
    </div>
  );
}

export default Update;
