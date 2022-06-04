import React from 'react'
import {useSelector,useDispatch} from 'react-redux';
import { useNavigate } from 'react-router-dom';
import {selectUserName,selectUserSlug,setSignoutState} from '../Features/User/userSlice'

const Home = () => {
    console.log('Auth Sucess')

    const navigate=useNavigate()
    const dispatch=useDispatch()

    const handleSignOut=()=>{
      dispatch(setSignoutState());
      navigate('/')
    }
  return (
    <div>Auth Success


      <span onClick={handleSignOut}>
        Log out
      </span>
    </div>


  )
}

export default Home