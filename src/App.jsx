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
import PostCompi from './Components/PostComponent';

import Home from './Pages/Home'
function App() {



  return (
    <div className="App">
      <Navi />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Landing />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<SignUp />} />
          <Route path="/login/success" element={<Home />} />

        </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App
