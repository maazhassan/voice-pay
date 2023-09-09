import Login from './components/login'
import "./App.css";
import { createBrowserRouter, RouterProvider} from 'react-router-dom';


const router = createBrowserRouter([
  {
    path: "/",
    element : <Login/>,
  },

]);



function App() {

  return (
    <div>
      <RouterProvider router={router}/>
    </div>
  )
}

export default App