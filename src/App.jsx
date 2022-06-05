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

import GroupProfile from './Pages/Group';
import CreateGroup from './Pages/CreateGroup'
function App() {


  const recipeItem = {
    recipeAuthor: "Efecan",
    title: "Avokado Ezmeli Taco",
    date: "8 Haziran 2021, Salı",
    image: pic,
    description:
      "Bu kremsi ve baharatlı avokado sosu, günlük taco'larınızı hazırlamak için harika seçeneklerden biri. Geleneksel olarak flautas veya taquitos ile servis edilir, ancak bazı vegan enchiladalara da harika bir katkı sağlar.",
  };

  const like = 193;
  const isLiked = true;
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
          <Route path="/test" element={<Card
            post={recipeItem}

          />} />

          <Route path="/user" element={<User/>}/>
          <Route path="/group" element={<GroupProfile/>}/>
          <Route path="/create-group" element={<CreateGroup/>}/>
        </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App