import React from "react";
import { Outlet } from "react-router-dom";
import Nav from "../Shared/Nav";
import Footer from "../Shared/Footer";

function MainLayout() {
  return (
    <div className="font-serif">
      <div className="px-2 lg:px-12 shadow-lg sticky top-0 z-50 bg-base-200 transition transform  duration-300 ease-in-out">
      <Nav></Nav>

      </div>
      <div className="max-w-6xl mx-auto ">
        <div className="min-h-[calc(100vh-372px)]">
          <Outlet></Outlet>
        </div>
      </div>
      <Footer></Footer>
    </div>
  );
}

export default MainLayout;
