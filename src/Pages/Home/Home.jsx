import React, { useEffect, useState } from 'react'
import NavBar from '../../Components/Navbar/Navbar'
import axios from 'axios'
import 'bootstrap/dist/css/bootstrap.min.css'
import { Link } from 'react-router-dom'

const Home = () => {        
 const[blogs, setBlogs] = useState([])   

//api call here

const fetchBlogs = async() =>{
  try {
    const response = await axios.get('http://localhost:3000/blogs')
    setBlogs(response.data.data)

  } 
  catch (error) {
    alert("Something Went Wrong!!")
  }
}
      // console.log(blogs)

 useEffect(()=>{
  // console.log("UseEffect Running")
       fetchBlogs()
 },[])


//  console.log(blogs,'Blogs')

  return (
    <>
    <NavBar/>
    <br/>
    <div className="card" style={{width: "20rem", margin: "20px", display: "flex"}}>

{blogs.map((blog)=>{
  return (
<div key={blog._id} className="card-body">
    <h2 className="card-title">{blog.Title}</h2>
    <h4 className="card-subtitle">{blog.SubTitle}</h4>
    <p className="card-description">{blog.Description}</p>
    <Link to = {`/singleblog/${blog._id}`}>See more</Link>
</div>
)
})}

</div>
</>
  )
  }
export default Home
