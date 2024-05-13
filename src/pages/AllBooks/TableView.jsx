import { TiEdit } from "react-icons/ti";
import { Link } from "react-router-dom";

function TableView({ allBooks }) {
  return (
    <div className="overflow-x-auto">
      <div className="overflow-x-auto">
        <table className="table">
          {/* head */}
          <thead className="text-stone-900">
            <tr>
              <th></th>
              <th>Name</th>
              <th>Author Name</th>
              <th>Category</th>
              <th>Rating</th>
              <th>Quantity</th>
              <th></th>
            </tr>
          </thead>
          <tbody>
            {allBooks.map((book) => (
              <tr key={book._id}>
                <td>
                  <div className="flex items-center gap-3">
                    <div className="avatar">
                      <div className="mask mask-squircle w-32 h-32">
                        <img
                          className="w-16 h-16"
                          src={book.image}
                          alt={book.bookName}
                        />
                      </div>
                    </div>
                  </div>
                </td>
                <td className="font-semibold">{book.name}</td>
                <td>{book.author}</td>
                <td>{book.category}</td>
                <td>{book.rating}</td>
                <td>{book.quantity}</td>
                <td>
                  <Link
                    className=""
                    to={`/update/${book._id}`}
                  >
                    <TiEdit className="w-6 h-6 font-bold" />
                  </Link>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default TableView;
