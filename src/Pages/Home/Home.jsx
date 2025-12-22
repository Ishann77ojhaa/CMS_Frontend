import React, { useEffect, useState } from 'react'
import NavBar from '../../Components/Navbar/Navbar'
import axios from 'axios'
import 'bootstrap/dist/css/bootstrap.min.css'

const Home = () => {        
 const[blogs, setBlogs] = useState([])   

//api call here

const fetchBlogs = async() =>{
   const response = await axios.get('http://localhost:3000/blogs')
   setBlogs(response.data.data)
}
      console.log(blogs)

 useEffect(()=>{
  // console.log("UseEffect Running")
       fetchBlogs()
 },[])


//  console.log(blogs,'Blogs')

  return (
    <>
    <NavBar/>
    <br/>
    <div className="card" style={{width: "18rem", margin: "20px"}}>

{blogs.map((blog)=>(
<div key={blog._id} className="card-body">
    <h2 className="card-title">{blog.Title}</h2>
    <h4 className="card-subtitle">{blog.SubTitle}</h4>
    <p className="card-description">{blog.Description}</p>
    <a href="#" className="btn btn-primary">Go somewhere</a>
</div>
))}

</div>
</>
  )
  }
export default Home
