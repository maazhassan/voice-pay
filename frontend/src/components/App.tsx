import CreateAccount from './createacc/CreateAcc';
import Login from './login/Login'
import { createBrowserRouter, RouterProvider} from 'react-router-dom';


const router = createBrowserRouter([
  {
    path: "/",
    element : <Login/>,
  },
  {
    path : "/create",
    element : <CreateAccount/>
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