import axios from 'axios';
import React,{useState} from 'react'
import { useNavigate } from 'react-router-dom';

const CreateBlog=()=> {
    const navigate=useNavigate()
    const[title,setTitle]=useState()
        console.log(title);
const[subTitle,setSubTitle]=useState()
console.log(subTitle)
    const[description,setDescription]=useState()
console.log(description)
    
const onSubmitHandle=async(e)=>{
    e.preventDefault

    const blogData={
        title:title,
subTitle:subTitle,
description:description
    }
    const response=await axios.post("http://localhost:4000/createblog/",blogData)
    console.log("response",response)
    if(response.status==200){
        alert("Blog created Successfully")
        navigate("/")
    }
}
  return (
    <div>
<form style={{maxWidth: 350, margin: 'auto', background: '#fff', padding: 20, borderRadius: 8, boxShadow: '0 0 10px rgba(0,0,0,0.1)'}} action={onSubmitHandle}>
  <h2 style={{textAlign: 'center',color:'blue', marginBottom: 20}}>Create Blog</h2>
  <label htmlFor="title" style={{display: 'block', marginTop: 15, fontWeight: 'bold'}}>Title</label>
  <input type="text"value={title} onChange={(e)=>{setTitle(e.target.value)}} id="title" name="title" placeholder="Enter blog title" style={{width: '100%', padding: 10, marginTop: 5, border: '1px solid #ccc', borderRadius: 4, fontSize: 16}} />
  <label htmlFor="subtitle" style={{display: 'block', marginTop: 15, fontWeight: 'bold'}}>Subtitle</label>
  <input type="text" id="subtitle"value={subTitle}onChange={(e)=>{setSubTitle(e.target.value)}} name="subtitle" placeholder="Enter subtitle" style={{width: '100%', padding: 10, marginTop: 5, border: '1px solid #ccc', borderRadius: 4, fontSize: 16}} />
  <label htmlFor="description" style={{display: 'block', marginTop: 15, fontWeight: 'bold'}}>Description</label>
  <textarea id="description" name="description"value={description}onChange={(e)=>{setDescription(e.target.value)}} placeholder="Write your blog content here..." style={{width: '100%', padding: 10, marginTop: 5, border: '1px solid #ccc', borderRadius: 4, fontSize: 16, height: 100, resize: 'vertical'}} defaultValue={""} />
  <button type="submit" style={{marginTop: 20, width: '50%', padding: 12, backgroundColor: '#0c13f4ff', color: 'white', border: 'none', borderRadius: 4, fontSize: 16, cursor: 'pointer'}}>
    Submit
  </button>
</form>
    </div>
  )
}

export default CreateBlog;