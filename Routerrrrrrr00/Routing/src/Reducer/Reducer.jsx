import { createBrowserRouter } from "react-router-dom";
import Layout from "../layout/Layout";
import About from '../component/About'
import Contact from '../component/Contact'
import Home from '../component/Home'
import NotFound from '../component/NotFound'
import Services from '../component/Services'

const Router = createBrowserRouter([
  {
path : "",
element : <Layout/>,
children : [
  
  {
    path: "/home",
    element: <Home />
  },
  {
    path: "/about",
    element: <About />
  },
  {
    path: "/contact",
    element: <Contact />
  },
  {
    path: "/services",
    element: <Services />
  },
  {
    path: "*",
    element: <NotFound />
  }
]
}
]);

export default Router;