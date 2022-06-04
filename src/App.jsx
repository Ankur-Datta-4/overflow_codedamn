import { useState } from 'react'
import logo from './logo.svg'

import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";
import Landing from './Pages/Landing';
import Navi from './Components/Navbar';

import Login from './Pages/Login';
import SignUp from './Pages/Register';

function App() {


  return (
    <div className="App">
      <Navi />
      <BrowserRouter>
      <Routes>
        <Route path="/" element={<Landing />} />
        <Route path="/login" element={<Login/>} />
        <Route path="/register" element={<SignUp/>} />

      </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App
