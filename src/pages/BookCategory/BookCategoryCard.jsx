import { CiLocationOn } from "react-icons/ci";
import { MdOutlineAttachMoney } from "react-icons/md";
import { FaRegStar } from "react-icons/fa";
import { FaStar } from "react-icons/fa6";

import Rating from "react-rating";

import { Link } from "react-router-dom";

function BookCategoryCard({ bookInfo }) {
  const {
    _id,
    name,
    author,
    category,
    description,
    image,
    rating,
  } = bookInfo;

  return (
    <div className="w-full">
      <div className="card flex flex-col h-full w-full md:w-[90%] lg:w-[60%] xl:w-80 mx-auto bg-base-200 text-stone-800 shadow-xl">
        <figure>
          <img className="aspect-[4/3]" src={image} />
        </figure>
        <div className="card-body space-y-3 flex-grow">
          <h2 className="card-title text-stone-800">
            {name}
            <div className="badge text-stone-800 bg-gradient-to-r from-[#612bd3] to-[#6e008f] py-4 outline-none border-none">
              {author}
            </div>
          </h2>
          <p className="text-stone-800">{description}</p>
          <div className=" *:font-medium flex justify-between items-center">
            <div className=" flex items-center gap-2 border px-1 py-2 rounded-sm text-stone-800 border-indigo-400">
              <CiLocationOn />
              <p> {category}</p>
            </div>
            <div className="flex gap-2 items-center">
              <div className="flex gap-1 items-center text-yellow-600">
                <Rating
                  emptySymbol={<FaRegStar className="text-yellow-500" />}
                  fullSymbol={<FaStar className="text-yellow-500" />}
                  initialRating={`${rating}`}

                  readonly
                />
              </div>
            </div>
          </div>
          <div className="card-actions w-full justify-center">
            <Link
              to={`/book-details/${_id}`}
              className="btn text-stone-800 bg-gradient-to-r from-[#612bd3] to-[#6e008f] "
            >
              View Details
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}

export default BookCategoryCard;
