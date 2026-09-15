//^ Routing in react is the process of showing different components on different url. without reloading the page 
//! advantages of routing --------------
// - no page reload 
// - faster navigation
// - single page application support 
// - better user experience
// - easy component base routing 

//! types :
//  there are two types of routing :
//? 1. Client side routing 
//? 2. Server side routing 

//! 1. Client side routing :
//^  Client side routing is the routing process where every URL changes without reloading the page and the browser renders the components dynamically.

//! 2. Server side routing : 
//^ server side routing is thr process where every URL request is sent to the server and the server returns a new html page for each rout.


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