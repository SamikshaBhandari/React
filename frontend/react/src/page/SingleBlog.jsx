import axios from 'axios'
import React,{useEffect,useState} from 'react'
import { useParams } from 'react-router-dom'
import { useNavigate } from 'react-router-dom'

const SingleBlog=()=>{
    const navigate=useNavigate()
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
    const handleEdit=()=>{
        navigate(`/editblog/${id}`)
    }
    return(
        <div>
            <h1>{data.title}</h1>
            <h2>{data.subTitle}</h2>
            <p>{data.description}</p>
    <button onClick={handleEdit}>Edit</button>
    <button>Delete</button>

        </div>
    )
}
export default SingleBlog;