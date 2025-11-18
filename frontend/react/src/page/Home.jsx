import React, { useEffect, useState } from 'react'
import Navbar from './Navbar'
import Welcome from './Welcome'
import axios from "axios"
import { Link } from 'react-router-dom'

export const Home = () => {

const[blogs,setBlogs]=useState([])
const fetchBlogs=async()=>{
  const response=await axios.get("http://localhost:4000/getblogs/");
  console.log(response);
  setBlogs(response.data.data)
}
console.log("blogs",blogs)


useEffect(()=>{
  fetchBlogs()
},[])


  return (
   <div>
   {blogs.map((item)=>{
    return(
      <>
      <h1>{item.title}</h1>
      <p>{item.subTitle}</p>
      <p>{item.description}</p>
        <Link to={`SingleBlog/${item._id}`}>Click Here</Link>
      
      </>
    )
   })}
     
     
   </div>
  )
}
