import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Home from './components/Home'
import Card from './components/Card'
import CardContent from './components/CardContent'
import Model from './components/Model'
import FetchApi from './components/FetchApi'
import {createBrowserRouter, RouterProvider, Outlet} from "react-router-dom"

function App() {

  const routerPath = createBrowserRouter(
    [
      {
        path: '/api',
        element : <FetchApi/>,
      },
      {
        path:'/',
        element: <Home/>
      }
    ]
  )


  return (
    <>
    <RouterProvider router = {routerPath}/>
    {/* <Home/> */}
    {/* <Model/>  */}
    {/* <Card/> */}
      
     
    </>
  )
}



export default App
