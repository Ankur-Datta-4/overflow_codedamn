import { useState } from 'react'
import logo from './logo.svg'
import pic from '../src/Components/logo.png'
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
import User from './Pages/User';
import Home from './Pages/Home'
// import Messenger from './Pages/Messenger';
import Card from './Components/Card';
import Chat from './Components/Chat';

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
          {/* <Route path="/messenger" element={<Messenger />} /> */}
          <Route path="/user" element={<User />} />
          <Route path="/messenger" element={<Chat />} />

        </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App