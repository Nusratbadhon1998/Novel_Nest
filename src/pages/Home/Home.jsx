import React from "react";
import Slider from "./Slider";
import Category from "./Category/Category";

function Home() {
  return (
    <div>
        <Slider></Slider>
        <Category>Choose Your Category</Category>
    </div>
  );
}

export default Home;
