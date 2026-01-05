import { useNavigate, useParams } from 'react-router-dom'
import './UpdateBlog.css'
import axios from 'axios'
import { useEffect, useState } from 'react'
import NavBar from '../../Components/Navbar/Navbar'


const UpdateBlog = () => {
    const navigate = useNavigate()
    const {id} = useParams()
    const [blog,setBlog] = useState({})

    // handle change of the input 
    const handleChange = (e)=>{
        // console.log(e.target.value,e.target.name)
        const {name,value} = e.target
        setBlog({
            ...blog,
            [name] : value
        })

    }
   
    // delete key of the object 
    const keyToExclude = ['createdAt','updatedAt']
    keyToExclude.forEach((key)=>{
        delete blog[key]
    })

    const updateBlog = async (e)=>{
        e.preventDefault()
        const response = await axios.patch("http://localhost:3000/blogs/" + id,blog)
        if(response.status == 200){
            navigate("/singleBlog/" + id)
        }
    }


    const fetchSingleBlog = async()=>{
        const response = await axios.get("http://localhost:3000/blogs/" + id)
     
        if(response.status ==200){
            setBlog(response.data.data)
        }
    }

    useEffect(()=>{
        fetchSingleBlog()

    },[])

  return (
    <>
    <NavBar/>
 <div className="create-blog-container">
      <div className="form-card">
        <header className="form-header">
            <h1>Edit Your Content </h1>
            <p>Just Update Your existing Data's with what you wanna change.</p>
        </header>

        <form onSubmit={updateBlog}>
            <div className="form-group">
                <label htmlFor="Title">Title</label>
                <input type="text" value = {blog.Title} onChange={handleChange} name="Title" placeholder="Enter Blog title"/>
            </div>

            <div className="form-group">
                <label htmlFor="SubTitle">SubTitle</label>
                <input type="text" value = {blog.SubTitle} onChange={handleChange} id="SubTitle"  name="SubTitle" placeholder="Enter Blog Subtitle (optional)" />
            </div>

            <div className="form-group">
                <label htmlFor="Description"> Enter Your Blog in Detail </label>
                <textarea  id="Description" value = {blog.Description} onChange={handleChange} name="Description" placeholder="Tell us about your Blog..." ></textarea>
            </div>

            <button type="submit" className="submit-btn"> Submit </button>
        </form>
    </div>
         </div>
         </>

  )
}

export default UpdateBlog