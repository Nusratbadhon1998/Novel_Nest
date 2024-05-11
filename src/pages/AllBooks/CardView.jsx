import React from 'react'
import BookCategoryCard from '../BookCategory/BookCategoryCard'

function CardView({allBooks}) {
  return (
    <div className="grid grid-cols-1 lg:grid-cols-3">
    {allBooks.map((book) => (
      <BookCategoryCard
        fromAll
        key={book._id}
        bookInfo={book}
      ></BookCategoryCard>
    ))}
  </div>
  )
}

export default CardView