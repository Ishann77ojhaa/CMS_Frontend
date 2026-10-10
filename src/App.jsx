import { BrowserRouter, Route, Routes } from 'react-router-dom'
import './App.css'
import Home from './Pages/Home/Home'
import SingleBlog from './Pages/SingleBlog/SingleBlog'
import CreateBlog from './Pages/CreateBlog/CreateBlog'
import UpdateBlog from './Pages/UpdateBlog/UpdateBlog'
import React from 'react'

export default function App() {
  return <BrowserRouter><Routes><Route path="/" element={<Home/>}/><Route path="/singleblog/:id" element={<SingleBlog/>}/><Route path="/createblog" element={<CreateBlog/>}/><Route path="/update/:id" element={<UpdateBlog/>}/><Route path="*" element={<Home/>}/></Routes></BrowserRouter>
}
