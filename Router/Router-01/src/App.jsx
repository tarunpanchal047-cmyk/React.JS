import { BrowserRouter, Route, Routes, Link } from "react-router-dom"
import Home from "./Component/Home"
import About from "./Component/About"
import Contact from "./Component/Contect"
import Services from "./Component/Services"
import NotFound from "./Component/NotFound"


const App = () => {
  return (
    <BrowserRouter>
      <ul>
        <li><Link to="/home">Home Page</Link></li>
        <li><Link to="/about">About Page</Link></li>
        <li><Link to="/contact">Contact Page</Link></li>
        <li><Link to="/services">Services Page</Link></li>
        </ul>
        <hr/>
        
        <Routes>
  <Route path="/home" element={<Home />} />
  <Route path="/about" element={<About />} />
  <Route path="/contact" element={<Contact />} />
  <Route path="/services" element={<Services />} />

  {/* Wildcard Route */}
  <Route path="*" element={<NotFound />} />

</Routes>
    </BrowserRouter>
  )
}

export default App