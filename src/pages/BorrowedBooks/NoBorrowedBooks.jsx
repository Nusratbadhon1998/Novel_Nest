import React from 'react'
import { BiConfused } from "react-icons/bi";
import { Link } from 'react-router-dom';

function NoBorrowedBooks() {
  return (
    <div className='flex flex-col justify-center min-h-[600px] items-center my-20 font-semibold'>

        <BiConfused className='w-32 h-32' />
        <p className='text-4xl'>You haven't borrowed any book!!</p>
        <p className='text-sm font-thin'>Please Explore our book collections <Link className="text-yellow font-bold" to="/all-books">Here</Link></p>

    </div>
  )
}

export default NoBorrowedBooks