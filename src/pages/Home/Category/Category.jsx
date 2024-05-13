import React, { useEffect, useState } from "react";
import useAxios from "../../../hooks/useAxios";
import CategoryCard from "./CategoryCard";
import axios from "axios";

function Category() {
  const axiosBase = useAxios();
  const [categories, setCategories] = useState([]);
  const [length, setLength] = useState(4);
  useEffect(() => {
    getData();
  }, []);

  const getData = async () => {
    try {
      const { data } = await axios.get("https://novel-nest-server.vercel.app/categories");
      setCategories([...data]);
    } catch (err) {
      console.log(err);
    }
  };
  return (
    <div className="my-20">
      <h1 className="flex justify-center items-center text-4xl font-semibold my-7">
        Choose Your Category
      </h1>
      <div className="grid gap-20 grid-cols-1 md:grid-cols-2 lg:grid-cols-4">
        {categories.slice(0, length).map((category) => (
          <CategoryCard key={category._id} category={category}></CategoryCard>
        ))}
      </div>

      {length === categories.length ? (
        <button
          onClick={() => setLength(4)}
          className="relative my-12 flex justify-center mx-auto px-4 py-2 overflow-hidden font-medium text-gray-600 bg-gray-100 border border-gray-100 shadow-inner group"
        >
          <span className="absolute top-0 left-0 w-0 h-0 transition-all duration-200 border-t-2 border-yellow group-hover:w-full ease"></span>
          <span className="absolute bottom-0 right-0 w-0 h-0 transition-all duration-200 border-b-2 border-yellow group-hover:w-full ease"></span>
          <span className="absolute top-0 left-0 w-full h-0 transition-all duration-300 delay-200  group-hover:h-full ease"></span>
          <span className="absolute bottom-0 left-0 w-full h-0 transition-all duration-300 delay-200  group-hover:h-full ease"></span>
          <span className="absolute inset-0 w-full h-full duration-300 delay-300 bg-gray-900 opacity-0 group-hover:opacity-100"></span>
          <span className="relative transition-colors duration-300 delay-200 group-hover:text-white ease">
            Show Less
          </span>
        </button>
      ) : (
        <button
          onClick={() => setLength(categories.length)}
          className="relative my-12 flex justify-center mx-auto px-4 py-2 overflow-hidden font-medium text-gray-600 bg-gray-100 border border-gray-100 shadow-inner group"
        >
          <span className="absolute top-0 left-0 w-0 h-0 transition-all duration-200 border-t-2 border-yellow group-hover:w-full ease"></span>
          <span className="absolute bottom-0 right-0 w-0 h-0 transition-all duration-200 border-b-2 border-yellow group-hover:w-full ease"></span>
          <span className="absolute top-0 left-0 w-full h-0 transition-all duration-300 delay-200  group-hover:h-full ease"></span>
          <span className="absolute bottom-0 left-0 w-full h-0 transition-all duration-300 delay-200  group-hover:h-full ease"></span>
          <span className="absolute inset-0 w-full h-full duration-300 delay-300 bg-gray-900 opacity-0 group-hover:opacity-100"></span>
          <span className="relative transition-colors duration-300 delay-200 group-hover:text-white ease">
            Show More
          </span>
        </button>
      )}
    </div>
  );
}

export default Category;
