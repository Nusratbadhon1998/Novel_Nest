import React from "react";
import { Outlet } from "react-router-dom";
import Nav from "../Shared/Nav";
import Footer from "../Shared/Footer";

function MainLayout() {
  return (
    <div>
      <div className="max-w-6xl mx-auto min-h-96">
        <Nav></Nav>
        <div className="min-h-[calc(100vh-372px)]">
          <Outlet></Outlet>
        </div>
      </div>
      <Footer></Footer>
    </div>
  );
}

export default MainLayout;
