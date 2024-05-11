import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../layout/MainLayout";
import Home from "../pages/Home/Home";
import AllBooks from "../pages/AllBooks/AllBooks";
import BorrowedBooks from "../pages/BorrowedBooks/BorrowedBooks";
import Login from "../pages/Authentication/Login";
import Register from "../pages/Authentication/Register";
import AddBook from "../pages/AddBook/AddBook";
import BookCategory from "../pages/BookCategory/BookCategory";
import BookDetails from "../pages/BookDetails/BookDetails";
import PrivateRoute from "./PrivateRoute";
import Update from "../pages/Update/Update";

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
        path: "/all-books",
        element: (
          <PrivateRoute>
            <AllBooks></AllBooks>,
          </PrivateRoute>
        ),
      },
      {
        path: "/add-books",
        element: (
          <PrivateRoute>
            <AddBook></AddBook>
          </PrivateRoute>
        ),
      },
      {
        path: "/borrowed-books",
        element: (
          <PrivateRoute>
            <BorrowedBooks></BorrowedBooks>
          </PrivateRoute>
        ),
      },
      {
        path: "/login",
        element: <Login></Login>,
      },
      {
        path: "/register",
        element: <Register></Register>,
      },
      {
        path: "/book-categories/:categoryName",
        element: (
          <PrivateRoute>
            <BookCategory></BookCategory>
          </PrivateRoute>
        ),
      },
      {
        path: "/book-details/:id",
        element: (
          <PrivateRoute>
            <BookDetails></BookDetails>
          </PrivateRoute>
        ),
      },
      {
        path: "/update/:id",
        element: (
          <PrivateRoute>
            <Update></Update>
          </PrivateRoute>
        ),
      },
    ],
  },
]);
