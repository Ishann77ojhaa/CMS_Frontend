import React, { useState } from 'react'
import './CreateBlog.css'
import NavBar from '../../Components/Navbar/Navbar'
import axios from 'axios'
import { useNavigate } from 'react-router-dom'

const CreateBlog = () => {
  const navigate = useNavigate()
  const [Title,setTitle] = useState("")
  const [SubTitle,setSubTitle] = useState ("")
  const [Description,setDescription] =useState ("")


const createblog = async (e)=>{
  e.preventDefault()
  const data = {
    Title : Title,         //backend_le_liyeko = State_Name
    SubTitle : SubTitle,
    Description : Description
  }
    const response =  await axios.post("http://localhost:3000/createblogs",data)
  if(response.status == 200){
    alert(response.data.message)
    navigate("/")
  }
  else{
    alert("Something Went Wrong")
  }

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
                <input type="text" id="Title" placeholder="Enter Blog title" required onChange={(e)=>setTitle(e.target.value)}/>
            </div>

            <div className="form-group">
                <label htmlFor="SubTitle">SubTitle</label>
                <input type="text" id="SubTitle" placeholder="Enter Blog Subtitle (optional)" onChange={(e)=>setSubTitle(e.target.value)}/>
            </div>

            <div className="form-group">
                <label htmlFor="Description"> Enter Your Blog in Detail </label>
                <textarea id="Description" placeholder="Tell us about your Blog..." onChange={(e)=>setDescription(e.target.value)}></textarea>
            </div>

            <button type="submit" className="submit-btn"> Submit </button>
        </form>
    </div>
    </div>
    </>
  )
}

export default CreateBlog