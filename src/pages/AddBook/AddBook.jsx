import axios from "axios";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";

function AddBook() {
  const navigate = useNavigate()

  const submitCss =
    "block w-full p-3 text-center rounded-lg text-stone-50 bg-gradient-to-r from-[#612bd3] to-[#6e008f]   font-semibold mt-4";

  const labelCss = "block text-stone-800 font-semibold text-base ";

  const inputCss =
    "input w-full defaultValue:text-stone-800 md:max-w-lg  lg:max-w-xs placeholder:text-sm placeholder:font-semibold placeholder:text-stone-800 text-stone-800";

  const handleAddSpot = async(e) => {
    e.preventDefault();
    const form = e.target;
    const bookName = form.bookName.value;
    const authorName = form.authorName.value;
    const rating = form.rating.value;
    const quantity = form.quantity.value;
    const contents = form.contents.value;
    const category = form.category.value;
    const image = form.image.value;
    const desc = form.desc.value;

    const bookInfo = {
      bookName,
      authorName,
      rating,
      quantity,
      contents,
      category,
      desc,
      image,
    };
    


    try {
      const { data } = await axios.post(
        `${import.meta.env.VITE_BASE_URL}/books`,
        bookInfo
      )
      console.log(data)
      toast.success('Book Data Added Successfully!')
      navigate('/')
    } catch (err) {
      console.log(err)
    }
  };

  return (
    <div className="bg-[url(https://blush.design/api/download?shareUri=aZhNm7MrStKsvxDp&c=Bottom_0%7E342a83_Hair_0%7E2c1b18_Skin_0%7Edcae92_Top_0%7Eff4133&w=800&h=800&fm=png)] bg-opacity-50 bg-no-repeat bg-right">
      <div className="w-3/4 mx-auto my-12">
        <h1 className="text-stone-100 font-bold text-center my-8 text-4xl">
          {/* <Typewriter
            cursor
            cursorBlinking
            delaySpeed={1000}
            deleteSpeed={25}
            loop={1}
            typeSpeed={70}
            words={[
              "Unlock Your Wanderlust: Add your Destination and Spice Up Your Travel Plans!",
            ]}
          /> */}
        </h1>
      </div>

      <div className="w-full lg:w-[60%] mx-auto bg-stone-400 bg-opacity-35 rounded-lg p-5 mb-4">
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
                  className="text-stone-800 input w-full max-w-xs"
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
                <label className={labelCss}>Contents</label>
                <input
                  name="contents"
                  type="text"
                  placeholder="Book Content"
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
                  <span className="flex items-center px-3 pointer-events-none sm:text-sm rounded-l-md text-stone-50 bg-gradient-to-r from-[#612bd3] to-[#6e008f]  ">
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
                <label className={labelCss}>Short description</label>
                <textarea
                  required
                  className="block w-full text-stone-800 p-3"
                  name="desc"
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
