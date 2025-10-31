import React from 'react'
import { Children, StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import Home from './component/Home/Home.jsx'
import Layout from './Layout.jsx'
import About from './component/About/About.jsx'
import Contact from './component/contect/contenct.jsx'


  /// the  main work is here how  we make  the routing and  make the paren layout to the children  
const router=createBrowserRouter([
  {
    path:'/',
    element:<Layout/>,
        children:[
         {path:"/",element:<Home/>},

         {path:"about",element:<About/>},

         {path:"contenct",element:<Contact/>}
    ]
  
  }
])
createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router}/>
  </StrictMode>,
)
