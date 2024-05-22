import React from 'react'
import ReactDOM from 'react-dom/client'
import { RouterProvider, createBrowserRouter } from "react-router-dom"
import Login from './components/Login'
import './index.css'

import Register from './components/Register'
import Dining from './components/Dining'
import Home1 from './components/Home1'
import Vegeterian from './Pages/Vegeterian'
import NonVegeterian from './Pages/NonVegeterian'



const router = createBrowserRouter([
  {
    path: "/",
    element: <Login />
  },
  {
    path: "/register",
    element: <Register />
  },
  {
    path: "/home",
    element: <Home1 />
  },
  {
    path: "/dining",
    element: <Dining />
  },
  {
    path: "/Vegeterian",
    element: <Vegeterian />
  },
  {
    path: "/Non-vegetarian",
    element: <NonVegeterian />
  }
])

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
