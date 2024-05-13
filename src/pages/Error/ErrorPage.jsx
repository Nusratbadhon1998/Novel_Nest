import { FaRegSadTear } from "react-icons/fa";
import { Link } from "react-router-dom";

function ErrorPage() {
  return (
    <div className="bg-yellow  min-h-screen py-20">
     <div className="flex flex-col justify-center items-center space-y-5 bg-white w-1/2 mx-auto p-12">
     <FaRegSadTear className="w-72 h-72" />
    <p className="text-center text-3xl font-semibold">Opps! The page you requested couldn't be found!!</p>
      <Link to="/" className="px-4 py-2 border border-black">Back to Home </Link>
     </div>
    </div>
  );
}

export default ErrorPage;
