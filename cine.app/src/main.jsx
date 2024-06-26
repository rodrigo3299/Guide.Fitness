import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Sobre from './pages/Sobre.jsx'
import PageNotFound from './pages/PageNotFound.jsx'
import Home from './pages/Home.jsx'
import Favoritos from './pages/Favoritos.jsx'
import Login from './pages/Login.jsx'
import Treino from './pages/Treino.jsx'
import Cardio from './pages/Cardio.jsx'
import Anotacoes from './pages/Anotacoes.jsx'
import Dieta from './pages/Dieta.jsx'
import Suporte from './pages/Suporte.jsx'


const router = createBrowserRouter(
  [
    {
      path: "/",
      element: <App/>,
      children: [
      {index: true, element: <Home/>},
      {path:"favoritos", element: <Favoritos/>},
      {path:"sobre", element: <Sobre/>},
      {path:"login", element: <Login/>},
      {path:"treino", element: <Treino/>},
      {path:"cardio", element: <Cardio/>},
      {path:"anotacoes", element: <Anotacoes/>},
      {path:"dieta", element: <Dieta/>},
      {path:"suporte", element: <Suporte/>},
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
