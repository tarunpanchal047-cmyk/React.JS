import { RouterProvider } from "react-router-dom";
import Routing from "./Routing/Routing";
import MemoParent from "./Memorization/reactmemo/MemoParent";
import UseMemoParent from "./Memorization/usememo/UseMemoParent";
import UseMemoHook from "./Memorization/UseMemoHook/UseMemoHook";

const App = () => {
  return (
    <div>
      {/* <RouterProvider router={Routing} /> */}

      {/* <MemoParent/> */}
      <UseMemoParent/> 
{/* <UseMemoHook/> */}

    </div>
  )
}

export default App