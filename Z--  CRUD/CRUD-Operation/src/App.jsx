import {BrowserRouter,Route,Routes} from 'react-router-dom'
import Home from "./Home"
import Create from "./Create"
import Read from "./Read"
import UpDate from './UpDate'


const App = () => {
  return (
    <div>
       <BrowserRouter>
       <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/create' element={<Create/>}/>
        <Route path='/read/:id' element={<Read/>}/>
        <Route path='/update/:id' element={<UpDate/>}/>

       </Routes>
       </BrowserRouter>
      
    </div>
  )
}

export default App
