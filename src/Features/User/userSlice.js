import { createSlice} from "@reduxjs/toolkit";

const initialState={
    name:"",
    email:"",
    photoURL:""
}


const userSlice=createSlice({
    name:"user",
    initialState,
    reducers:{
        setUserLoginDetails:(state,action)=>{
            state.name=action.payload.name;
            state.email=action.payload.email;
            state.photoURL=action.payload.photoURL
            
        },
        
        setSignoutState:(state)=>{
            state.name=null;
            state.email=null;
            state.photoURL=null
        }
    }
})

export const {setSignoutState,setUserLoginDetails}=userSlice.actions;

export const selectUserName=(state)=>state.user.name;
export const selectUserEmail=(state)=>state.user.email;
export const selectUserPhotoURL=(state)=>state.user.photURL;

export default userSlice.reducer;