import { createBrowserRouter, createRoutesFromElements, Route } from "react-router-dom";

import Layout from "../layout/Layout";
import About from '../component/About'
import Contact from '../component/Contact'
import Home from '../component/Home'
import NotFound from '../component/NotFound'
import Services from '../component/Services'

const Router = createBrowserRouter(
  createRoutesFromElements(
    
    <Route path="/" element={<Layout/>}>
      <Route path='/home' element={<Home/>}/>
      <Route path='/about' element={<About/>}/>
      <Route path='/contact' element={<Contact/>}/>
      <Route path='/services' element={<Services/>}/>
      <Route path='*' element={<NotFound/>}/>
      
    </Route>
  )
 
)
export default Router;