import React, { useEffect, useState } from 'react'
import useAxios from '../../hooks/useAxios';
import BookCategoryCard from '../BookCategory/BookCategoryCard';

function AllBooks() {
  const axiosBase = useAxios();
  const [allBooks, setAllBooks] = useState([]);
  useEffect(() => {
    const getData = async () => {
      try {
        const { data } = await axiosBase('/books');
        setAllBooks([...data]);
      } catch (err) {
        console.log(err);
      }
    };

    getData();
  }, []);
  return (
    <div className='grid grid-cols-1 lg:grid-cols-3'>
      {allBooks.map(book=><BookCategoryCard key={book._id} bookInfo={book}></BookCategoryCard>)}


    </div>
  )
}

export default AllBooks