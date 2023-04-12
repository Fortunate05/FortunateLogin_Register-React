import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'

import Home from './Pages/Home'
import Login from './Pages/Login'
import Register from './Pages/Register'
import ErrorPage from './Components/error-page';


import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";


const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
    errorElement: <ErrorPage />
    
  },
  {
    path: "/Login",
    element: <Login />,
    
  },
  {
    path: "/Register",
    element: <Register />,
    
  },
  
]);


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
  <RouterProvider router={router} />
  </React.StrictMode>,
)
