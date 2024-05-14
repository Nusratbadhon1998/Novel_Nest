import { CiLocationOn } from "react-icons/ci";
import { MdOutlineAttachMoney, MdPerson4 } from "react-icons/md";
import { FaRegStar } from "react-icons/fa";
import { FaStar } from "react-icons/fa6";

import Rating from "react-rating";

import { Link } from "react-router-dom";
import { CgUnavailable } from "react-icons/cg";

function BookCategoryCard({ bookInfo,fromAll }) {
  const {
    _id,
    name,
    author,
    category,
    description,
    image,
    rating,
    quantity
  } = bookInfo;

  return (
    <div className="w-full mb-20">
      <div className="card flex flex-col h-full w-full md:w-[90%] lg:w-[60%] xl:w-80 mx-auto  text-stone-800 shadow-xl">
        <figure className="relative">
          <img className="aspect-[4/3]" src={image} />
        </figure>
        <div className="absolute bg-yellow px-4 py-2 font-bold rounded-r">
          {quantity > 0 ? (
            <p className="text-black">Available</p>
          ) : (
            <p className="text-red flex items-center">
              <CgUnavailable className="text-red" />
              Not Available
            </p>
          )}
        </div>
        <div className="card-body space-y-3 flex-grow">
        <div className="flex justify-between items-center">
        <h2 className="card-title">{name}</h2>
          <div className="flex gap-2 items-center">
            <MdPerson4 /> <p className="italic text-sm text-black">{author}</p>
          </div>
        </div>

          <div className="flex justify-between">
            <p className="text-ash font-semibold">{category}</p>
            <div className="flex gap-1 items-center">
              <Rating
                emptySymbol={<FaRegStar className="text-yellow" />}
                fullSymbol={<FaStar className="text-yellow" />}
                initialRating={`${rating}`}
                readonly
              />
            </div>
          </div>
          <div className="card-actions w-full flex justify-center">
            <Link className="border-black bg-black w-full text-white text-center border px-3 py-2" to={`/book-details/${_id}`}>
              Details
            </Link>

          </div>
        </div>
      </div>
    </div>
  );
}

export default BookCategoryCard;
