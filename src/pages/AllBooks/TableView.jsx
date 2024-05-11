import React from 'react'

function TableView({allBooks}) {
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
           
          </tr>
        </thead>
        <tbody>
          {allBooks.map((book) => (
            <tr key={book._id}>
              <td>
                <div className="flex items-center gap-3">
                  <div className="avatar">
                    <div className="mask mask-squircle w-32 h-32">
                      <img className="w-16 h-16" src={book.image} alt={book.bookName} />
                    </div>
                  </div>
                </div>
              </td>
              <td>{book.name}</td>
              <td>{book.author}</td>
              <td>{book.category}</td>
              <td>{book.rating}</td>
              <td>{book.quantity}</td>
              
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  </div>
  )
}

export default TableView