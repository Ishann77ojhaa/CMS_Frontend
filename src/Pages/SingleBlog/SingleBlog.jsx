import React, { useEffect, useState } from 'react'
import { Navigate, useNavigate, useParams } from 'react-router-dom'
import axios from 'axios'
import './SingleBlog.css'

const SingleBlog = () => {
  const {id} = useParams()
  const [blog,setBlog] = useState({})
  const Navigate = useNavigate()

const deleteBlog= async()=>{
      const response =   await axios.delete("http://localhost:3000/blogs/" + id)
  if(response.status == 200){
    alert("Your Blog Is Deleted")
    Navigate("/")
  }
}

const fetchsingleblog = async()=>{
   const response = await axios.get("http://localhost:3000/blogs/" + id)
   if(response.status == 200){
      setBlog(response.data.data)
   }
}
  useEffect(()=>{
          fetchsingleblog()
  },[])
 return (
  <div className="single-blog-page">
    <div className="single-blog-card">
      <h1 className="blog-title">{blog.Title}</h1>

      {blog.SubTitle && (
        <h3 className="blog-subtitle">{blog.SubTitle}</h3>
      )}

      <p className="blog-description">{blog.Description}</p>

      <button className="delete-btn" onClick={deleteBlog}>
        Delete This Blog
      </button>
    </div>
  </div>
)

}

export default SingleBlog