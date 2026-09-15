//! React router :
//^ React router is a libary that manages routing the logic in react application and decides which component have to show base on the URL.
//^ React router DOM is a package built on top of the react router that is used specifically for the web applications.

//! - Routing

//^     - Browser Router
//         - react router library (older approach)
//         - enables client side routing in react applications.
//         - Uses html5 history api (pushState, popState, replaceState)
//         - small / simple apps

//!     - Routes
//         - Routes is the container component that hold multiple child component and renders the component which matches with the URL.

//!     - Route
//         - Route is a component that maps specific url path to a specific react component.

//!         - Commands
//             - to install the 3rd party application/dependency which is react router-dom npm i react-router-dom

// * -> wild card route (used for all)

// !    - path
//         - path defines the url pattern that must be matched in order for a route to be render

//!          - element
//     - element specifies the react component that should be displayed when the path matches the url

// !    - difference between anchor tag (a) and Link tag
//         - Link is a react router higher order component which is used for navigation among components without reloading the page

//?         - while anchor is normal html tag used for navigation but it reloads the entire page



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