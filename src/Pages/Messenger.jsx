import React from 'react'
import {selectUserName,selectUserSlug,setSignoutState} from '../Features/User/userSlice'
import {useSelector,useDispatch} from 'react-redux';
import { useEffect,useState } from 'react';
import axios from 'axios';
import ChatTile from '../Components/ChatTile';


const Messenger = () => {
    const SERVERURL="http://localhost:1337/api"
    const slug=useSelector(selectUserSlug);
    let random=[{
        chatName:'Dheera',
        recentMessage:'This is sinking'
    },{
        chatName:'Veera',
        recentMessage:'This is sucking'
    },{
        chatName:'Meera',
        recentMessage:'This is kinsing'
    },]
    const [chats,setChats]=useState(random)

    // useEffect(()=>{
    //     axios.get(`${SERVERURL}/chat/${slug}`)
    //     .then((res)=>{
    //         console.log(`Chats obtained: ${res.data.chats}`)
    //         setChats(res.data.chats)
    //     })
    // },[])

    
    
  return (
    <div className="msg-container">
        <div className='chats'>
            {
                chats.map((ele)=>(
                    <ChatTile chatName={ele.chatName} recentMessage={ele.recentMessage}/>
                ))
            }
        </div>
        <div className="msg-interface">
                X-x-x
        </div>  
    </div>
  )
}

export default Messenger