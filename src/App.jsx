import { useState } from 'react'
import logo from './logo.svg'

import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";
import Landing from './Pages/Landing';
import Navi from './Components/Navbar';
function App() {


  return (
    <div className="App">
      <BrowserRouter>
        <Navi />
        <Landing />
      </BrowserRouter>
    </div>
  )
}

export default App
