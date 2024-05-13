import React from "react";
import { FaArrowRight } from "react-icons/fa6";

import { Link } from "react-router-dom";
import "./categorycard.css";

function CategoryCard({ category }) {
  return (
    <div
      className="relative w-[250px] h-[360px] bg-base-100 shadow-xl hover:scale-110 transition transform duration-300 ease-linear cursor-pointer overflow-hidden"
      id="parent"
    >
      <div
        className="absolute inset-0 aspect-[2/3] overflow-hidden"
        style={{
          backgroundImage: `url('${category.image}')`,
          backgroundSize: "cover",
          transition: "opacity 0.3s",
        }}
      >
        <div className="absolute inset-0 bg-black opacity-0 transition-opacity duration-300 hover:opacity-50 "></div>
        <div className="relative top-72 left-5  ">
          <h1 className="text-beige font-bold text-[25px]" id="name">
            {category.categoryName}
          </h1>
          <Link
            id="explore"
            to={`/book-categories/${category.categoryName}`}
            className="text-beige font-bold hidden"
          >
            Explore
            <span>
              <FaArrowRight />
            </span>
          </Link>
        </div>
      </div>
    </div>
  );
}

export default CategoryCard;
