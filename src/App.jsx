import { useState } from 'react'
import logo from './logo.svg'

import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";
import Landing from './Pages/Landing';
import Navbar from './Components/Navbar';
function App() {


  return (
    <div className="App">
      <BrowserRouter>
        <Navbar />
        {/* <Landing /> */}
      </BrowserRouter>
    </div>
  )
}

export default App
