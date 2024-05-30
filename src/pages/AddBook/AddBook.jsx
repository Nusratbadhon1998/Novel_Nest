import axios from "axios";
import { Link, useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import useAxiosSecure from "../../hooks/useAxiosSecure";
import { Typewriter } from "react-simple-typewriter";
import { FaAnglesRight } from "react-icons/fa6";

function AddBook() {
  const navigate = useNavigate();
  const axiosSecure = useAxiosSecure();

  const submitCss =
    "block w-full p-3 text-center rounded-lg text-beige bg-black font-semibold mt-4";

  const labelCss = "block  font-semibold text-base ";

  const inputCss =
    "input w-full border border-yellow defaultValue:text-stone-800 md:max-w-lg  lg:max-w-xs placeholder:text-sm placeholder:font-semibold placeholder:text-stone-800 text-stone-800";

  const handleAddSpot = async (e) => {
    e.preventDefault();
    const form = e.target;
    const name = form.bookName.value;
    const author = form.authorName.value;
    const rating = form.rating.value;
    const quantity = form.quantity.value;
    const contents = form.contents.value;
    const category = form.category.value;
    const image = form.image.value;
    const desc = form.desc.value;

    if (parseInt(rating) < 1 || parseInt(rating) > 5) {
      toast.warning("Please provide rating between 1-5");
      return;
    }

    const bookInfo = {
      name,
      author,
      rating,
      quantity,
      contents,
      category,
      desc,
      image,
    };

    try {
      const { data } = await axiosSecure.post("/books", bookInfo);
      console.log(data);
      toast.success("Book Data Added Successfully!");
      navigate("/all-books");
    } catch (err) {
      console.log(err);
    }
  };

  return (

    
    <div className=" bg-opacity-0 bg-no-repeat bg-right py-6">
     <div className="bg-black h-52 flex flex-col justify-center items-center mt-12 text-beige">
      <div className="text-center text-xl lg:text-4xl font-semibold my-6">
          <Typewriter
            cursor
            cursorBlinking
            delaySpeed={1000}
            deleteSpeed={25}
            loop={1}
            typeSpeed={70}
            words={["Empower Readers: Add to the Library's Selection"]}
          />
        </div>
        <div className="flex gap-2 items-center font-extralight text-sm">
          <Link to="/">Home</Link>
          <FaAnglesRight />
          <Link>Add Book</Link>
        </div>
      </div>
      {/* Form Part */}
      <div className="w-full lg:w-[60%]  mx-auto shadow-2xl p-5 mb-4">
        <div className="p-3 m-3 ">
          <form onSubmit={handleAddSpot}>
            <div className="grid grid-cols-1 md:grid-cols-1 lg:grid-cols-2 gap-3 full mx-auto">
              {/* Book Name */}
              <div>
                <label className={labelCss}>Book Name</label>
                <input
                  name="bookName"
                  type="text"
                  className={inputCss}
                  placeholder="Book Name"

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
                  placeholder="Author Name"

                  required
                />
              </div>
              {/* Quantity */}
              <div>
                <label className={labelCss}>Book Quantity</label>
                <input
                  type="number"
                  name="quantity"
                  placeholder="Book Quantity"
                  className={inputCss}
                  required
                />
              </div>
              {/* Category */}
              <div>
                <label className={labelCss}>Category</label>
                <select
                  className="text-stone-800 border border-yellow input w-full max-w-xs"
                  name="category"
                >
                  <option className="text-stone-800" value="">
                    --Please Select Category--
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
              {/* Rating */}
              <div>
                <label className={labelCss}>Rating</label>
                <input
                  name="rating"
                  type="number"
                  placeholder="Rating"
                  className={inputCss}
                  required
                />
              </div>
              {/* Contents */}
              <div>
                <label className={labelCss}>Short Description</label>
                <input
                  name="desc"
                  type="text"
                  placeholder="Book description"
                  className={inputCss}
                  required
                />
              </div>
            </div>
            <div className="space-y-4">
              <fieldset className="w-full space-y-1 text-gray-800">
                <label htmlFor="url" className={labelCss}>
                  Photo Url
                </label>
                <div className="flex">
                  <span className="flex items-center px-3 pointer-events-none sm:text-sm rounded-l-md text-beige bg-black">
                    https://
                  </span>
                  <input
                    type="text"
                    name="image"
                    id="url"
                    placeholder=""
                    className="flex flex-1 border sm:text-sm rounded-r-md focus:ring-inset border-gray-300 text-gray-800  focus:ring-violet-600 input input-bordered w-full max-w-full"
                    required
                  />
                </div>
              </fieldset>

              {/* Short desc */}
              <div>
                <label className={labelCss}>Contents</label>
                <textarea
                  required
                  className="block w-full border border-yellow text-stone-800 p-3"
                  name="contents"
                  id=""
                  cols="20"
                  rows="7"
                ></textarea>
              </div>
            </div>
            {/* Submit btn */}
            <input className={submitCss} type="submit" value="Add Book" />
          </form>
        </div>
      </div>
    </div>
  );
}

export default AddBook;
