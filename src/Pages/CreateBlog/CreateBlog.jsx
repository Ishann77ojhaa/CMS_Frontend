import React, { useState } from 'react'
import './CreateBlog.css'
import NavBar from '../../Components/Navbar/Navbar'
import axios from 'axios'
import { useNavigate } from 'react-router-dom'

const CreateBlog = () => {
  const navigate = useNavigate()
  const [data,SetData] = useState({
    Title : "",
    SubTitle : "",
    Description : ""
  })
 const createblog = async (e)=>{
  e.preventDefault()
    const response =  await axios.post("http://localhost:3000/createblogs",data)
  if(response.status == 200){
    alert(response.data.message)
    navigate("/")
  }
  else{
    alert("Something Went Wrong")
  }
}
 const handlechange =(e)=>{
    const {name, value} = e.target
    SetData({
      ...data,
      [name] : value
    })
 }

  return (
    <>
    <NavBar/>
 <div className="create-blog-container">
      <div className="form-card">
        <header className="form-header">
            <h2>Get Started</h2>
            <h1>Post Your Content </h1>
            <p>Join our community today. It only takes a minute to set up your profile and start exploring.</p>
        </header>

        <form onSubmit={createblog} >
            <div className="form-group">
                <label htmlFor="Title">Title</label>
                <input type="text" id="Title" name="Title" placeholder="Enter Blog title" onChange = {handlechange}/>
            </div>

            <div className="form-group">
                <label htmlFor="SubTitle">SubTitle</label>
                <input type="text" id="SubTitle" name="SubTitle" placeholder="Enter Blog Subtitle (optional)" onChange = {handlechange} />
            </div>

            <div className="form-group">
                <label htmlFor="Description"> Enter Your Blog in Detail </label>
                <textarea  id="Description" name="Description" placeholder="Tell us about your Blog..." onChange = {handlechange} ></textarea>
            </div>

            <button type="submit" className="submit-btn"> Submit </button>
        </form>
    </div>
    </div>
    </>
  )
}

export default CreateBlog