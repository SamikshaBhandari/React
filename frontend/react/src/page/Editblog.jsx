import axios from 'axios'
import React, { useEffect, useState } from 'react'
import {useParams } from 'react-router-dom'
import { useNavigate } from 'react-router-dom'

const Editblog=()=> {
    const {id}=useParams();
const navigate=useNavigate()
    const[title,setTitle]=useState()
    const[subTitle,setsubTitle]=useState()
    const[description,setDescription]=useState()

 
  
    const fetchSingleBlog=async()=>{
        const res=await axios.get("http://localhost:4000/getsingleblog/"+id)
        console.log(res)
        setTitle(res.data.data.title)
        setDescription(res.data.data.subTitle)
        setsubTitle(res.data.data.subTitle)

    }
 useEffect(()=>{
  fetchSingleBlog()
 },[id])
 const handleSubmit=async(e)=>{
  e.preventDefault()
  const obj={
    title,
    subTitle,
    description
  }
  const res=await axios.patch("http://localhost:4000/updateblog/"+id,obj)
 if(res.status===200){
  alert("blog updated")
  navigate("/")
 }
}

  return (
     <div>
<form style={{maxWidth: 350, margin: 'auto', background: '#fff', padding: 20, borderRadius: 8, boxShadow: '0 0 10px rgba(0,0,0,0.1)'}} action={handleSubmit}>
  <h2 style={{textAlign: 'center',color:'blue', marginBottom: 20}}>Create Blog</h2>
  <label htmlFor="title" style={{display: 'block', marginTop: 15, fontWeight: 'bold'}}>Title</label>
  <input type="text"value={title}onChange={(e)=>setTitle(e.target.value)}id="title" name="title" placeholder="Enter blog title" style={{width: '100%', padding: 10, marginTop: 5, border: '1px solid #ccc', borderRadius: 4, fontSize: 16}} />
  <label htmlFor="subtitle" style={{display: 'block', marginTop: 15, fontWeight: 'bold'}}>Subtitle</label>
  <input type="text" id="subtitle"value={subTitle}onChange={(e)=>setsubTitle(e.target.value)} name="subtitle" placeholder="Enter subtitle" style={{width: '100%', padding: 10, marginTop: 5, border: '1px solid #ccc', borderRadius: 4, fontSize: 16}} />
  <label htmlFor="description" style={{display: 'block', marginTop: 15, fontWeight: 'bold'}}>Description</label>
  <textarea id="description" name="description"value={description}onChange={(e)=>setDescription(e.target.value)} placeholder="Write your blog content here..." style={{width: '100%', padding: 10, marginTop: 5, border: '1px solid #ccc', borderRadius: 4, fontSize: 16, height: 100, resize: 'vertical'}} defaultValue={""} />
  <button type="submit" style={{marginTop: 20, width: '50%', padding: 12, backgroundColor: '#0c13f4ff', color: 'white', border: 'none', borderRadius: 4, fontSize: 16, cursor: 'pointer'}}>
    Submit
  </button>
</form>
    </div>
  )
}

export default Editblog