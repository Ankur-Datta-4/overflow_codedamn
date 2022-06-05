import { createSlice} from "@reduxjs/toolkit";
import axios from "axios";

const SERVERURL="http://localhost:1337/api"

const initialState={
    name:"",
    email:"",
    photoURL:"",
    slug:"",
    chats:[],
    msgs:[]
}


const userSlice=createSlice({
    name:"user",
    initialState,
    reducers:{
        setUserLoginDetails:(state,action)=>{
            state.name=action.payload.name;
            state.email=action.payload.email;
            state.photoURL=action.payload.photoURL
            state.slug=action.payload.slug;
            
        },
        
        setSignoutState:(state)=>{
            state.name=null;
            state.email=null;
            state.photoURL=null;
            state.slug=null;
        },
        setChats:(state)=>{
            axios.get(`${SERVERURL}/chat/u/${state.slug}`)
            .then((res)=>{
                if(!res.data.err){
                    let temp=res.data.chats
                    if(!temp.chatName){
                        if(temp.users[0].uid===state.slug){
                            temp['chatName']=temp.users[1].name
                        }else{
                            temp['chatName']=temp.users[0].name

                        }
                    }
                    state.chats=temp;
                }
            }).catch((err)=>{
                console.log(`Error while retreiving chats for ${state.slug}`);
                console.log(err)
            })
        },
        setMessages:(state,action)=>{
            let convId=action.payload.convId;

            //get messages
            axios.get(`${SERVERURL}/chat/${convId}`)
            .then((res)=>{
                if(!res.data.err){
                    state.msgs=res.data.msgs;
                }
            }).catch((err)=>{
                console.log(`Error while retreiving Messages for ${convId}`);
                console.log(err)
            })
        },
        addMessageCur:(state,action)=>{
            let convId=action.payload.convId;
            let msg=action.payload.msg;


            //send message
            axios.post(`${SERVERURL}/chat/${convId}`,msg)
            .then((res)=>{
                if(!res.data.err){
                    state.msgs.push(msg)
                }else{
                    state.msgs=[]
                }
            }).catch((err)=>{
                console.log(`Error while sending Messages for ${convId}`);
                console.log(err)
            })
        },
        setNullMessage:(state)=>{
            state.msgs=[]
        }
    }
})

export const {setSignoutState,setUserLoginDetails,setChats,setMessages,addMessageCur,setNullMessage}=userSlice.actions;

export const selectUserName=(state)=>state.user.name;
export const selectUserEmail=(state)=>state.user.email;
export const selectUserPhotoURL=(state)=>state.user.photoURL;
export const selectUserSlug=(state)=>state.user.slug;

export const selectUserChats=(state)=>state.user.chats;
export const selectUserMsgs=(state)=>state.user.msgs;




export default userSlice.reducer;