import axios from 'axios'
import React,{useEffect,useState} from 'react'
import { Link, useParams } from 'react-router-dom'


const SingleBlog=()=>{
    const {id}=useParams()
    const[data ,setData]=useState({})
    const getsingleblog=async()=>{
        const res=await axios.get("http://localhost:4000/getsingleblog/"+id)
        setData(res.data.data)
        console.log(res)
    }
    console.log(data)
    useEffect(()=>{
getsingleblog()
    },[id])
    return(
        <div>
            <h1>{data.title}</h1>
            <h2>{data.subTitle}</h2>
            <p>{data.description}</p>

        </div>
    )
}
export default SingleBlog;