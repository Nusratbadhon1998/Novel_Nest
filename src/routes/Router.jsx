import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../layout/MainLayout";
import Home from "../pages/Home/Home";
import AllBooks from "../pages/AllBooks/AllBooks";
import AddBooks from "../pages/AddBooks/AddBooks";
import BorrowedBooks from "../pages/BorrowedBooks/BorrowedBooks";
import Login from "../pages/Authentication/Login";
import Register from "../pages/Authentication/Register";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout></MainLayout>,
    errorElement: <div>Error</div>,
    children: [
      {
        index: true,
        element: <Home></Home>,
      },
      {
        path:'/all-books',
        element:<AllBooks></AllBooks>
      },
      {
        path:"/add-books",
        element:<AddBooks></AddBooks>

      },
      {
        path:'/borrowed-books',
        element:<BorrowedBooks></BorrowedBooks>
      },
      {
        path:"/login",
        element:<Login></Login>
      },
      {
        path:"/register",
        element:<Register></Register>
      }
    ],
  },
]);
