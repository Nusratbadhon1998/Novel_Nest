import React, { useEffect, useState } from 'react'
import useAxios from '../../hooks/useAxios'

function Pick() {
    const axiosBase= useAxios()
    const [books,setBooks]= useState([])

    useEffect(()=>{
        const getData=async()=>{
            const {data}= await axiosBase('pickedBooks')
            setBooks(data)
        }
        getData()
    },[])
  return (
    <div>
        
     <h1 className='text-4xl font-semibold flex justify-center'>Picked By Readers</h1>   
    </div>
  )
}

export default Pick