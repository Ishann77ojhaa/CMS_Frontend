
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import './App.css'
import Home from './Pages/Home/Home'
import SingleBlog from './Pages/SingleBlog/SingleBlog'
import CreateBlog from './Pages/CreateBlog/CreateBlog'
import UpdateBlog from './Pages/UpdateBlog/UpdateBlog'

function App() {

  return ( 
 <div>
      <BrowserRouter>
           <Routes>
            <Route path='/' element={<Home/>}/>
            <Route path='/singleblog/:id' element={<SingleBlog/>}/>
            <Route path='/createblog' element={<CreateBlog/>}/>
            <Route path='/updateblog' element={<UpdateBlog/>}/>
           </Routes>
      </BrowserRouter>
      </div>
  )
}
export default App
