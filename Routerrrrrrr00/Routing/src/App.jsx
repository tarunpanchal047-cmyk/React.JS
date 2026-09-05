import { RouterProvider } from "react-router-dom";
import Routing from "./Reducer/Reducer";

const App = () => {
  return (
    <div>
      <RouterProvider router={Routing} />
    </div>
  )
}

export default App