import React, { useEffect, useState } from 'react'
import useAxios from '../../../hooks/useAxios'
import CategoryCard from './CategoryCard'

function Category({children}) {

    const axiosBase= useAxios()
    const [categories,setCategories]= useState([])
    useEffect(()=>{
        getData()
    },[])

    const getData=async()=>{
        try{

            const {data}= await axiosBase('/categories')
            setCategories([...data])

        }catch (err){
            console.log(err)

        }
        
    }
  return (
    <div className='my-20'>
        <h1>{children || "Choose Your Category"}</h1>
        <div className='grid gap-20 grid-cols-1 md:grid-cols-2 lg:grid-cols-4'>
            {categories.map(category=><CategoryCard key={category._id} category={category}></CategoryCard>)}

        </div>
    </div>
  )
}

export default Category