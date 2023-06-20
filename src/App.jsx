
import React from 'react';
import {Route, Routes} from 'react-router-dom'
import Home from "./pages/Home/Home"
import Play from "./pages/Play/Play"
import Login from "./pages/Login/Login"
import Cadastro from "./pages/Cadastro/Cadastro"
import './App.css'
function App(){

  return (
    <>
    <Routes>
      <Route path='/' element={<Login />} />
      <Route path='/cadastro' element={<Cadastro />} />
      <Route path='/home' element={<Home />} />
      <Route path='/letras-e-vogais' element={<Play />} />
    </Routes>
    </>
  )
}

export default App
