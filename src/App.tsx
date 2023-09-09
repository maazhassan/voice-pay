import Login from './components/login'
import Landing from './components/landing';
import "./App.css";
import { createBrowserRouter, RouterProvider} from 'react-router-dom';


const router = createBrowserRouter([
  {
    path: "/",
    element : <Login/>,
  },

  {
    path: "/landing",
    element : <Landing/>
  }

]);



function App() {

  return (
    <div>
      <RouterProvider router={router}/>
    </div>
  )
}

export default App