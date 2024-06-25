import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Sobre from './pages/Sobre.jsx'
import PageNotFound from './pages/PageNotFound.jsx'
import Home from './pages/Home.jsx'
import Favoritos from './pages/Favoritos.jsx'
import Noticias from './pages/Noticias.jsx'
import Login from './pages/Login.jsx'

const router = createBrowserRouter(
  [
    {
      path: "/",
      element: <App/>,
      children: [
      {index: true, element: <Home/>},
      {path:"favoritos", element: <Favoritos/>},
      {path:"sobre", element: <Sobre/>},
      {path:"noticias", element: <Noticias/>},
      {path:"login", element: <Login/>},
      {path:"*", element: <PageNotFound/>}
        
      ]
    }
  ]
)


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router}></RouterProvider>
  </React.StrictMode>
)
