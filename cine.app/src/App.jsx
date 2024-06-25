import Header from "./componentes/Header/Header"
import {Outlet } from "react-router-dom"


function App() {

  return (
    <>
    <Header/>
    <Outlet/>
    </>
  )
}

export default App
