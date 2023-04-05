import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import Home from './Pages/Home'


import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";

import Register from './Pages/Register';
import Login from '/Pages/Login';

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
  },

  {
    path: "/",
    element: <Login />,
  },
  {
    path: "/",
    element: <Register />,
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
