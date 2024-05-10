import React from "react";
import { Link } from "react-router-dom";

function CategoryCard({ category }) {
  return (
    <div className="w-[250px] h-[360px] bg-base-100 shadow-xl relative">
      <div
        className="absolute inset-0 aspect-[2/3]"
        style={{
          backgroundImage: `url('${category.image}')`,
          backgroundSize: "cover",
          transition: "opacity 0.3s",
        }}
      >
        <div className="absolute inset-0 bg-black opacity-0 transition-opacity duration-300 hover:opacity-50"></div>
        <h1 className="text-white font-bold px-4 py-2 absolute bottom-5 left-0 right-0">{category.categoryName}</h1>
        <Link to={`/book-categories/${category.categoryName}`} className="text-white font-bold absolute bottom-0 left-0 px-4 py-2">Explore</Link>
      </div>
    </div>
  );
}

export default CategoryCard;
