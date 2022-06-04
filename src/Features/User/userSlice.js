import { createSlice} from "@reduxjs/toolkit";

const initialState={
    name:"",
    email:"",
    photoURL:"",
    slug:""
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
        }
    }
})

export const {setSignoutState,setUserLoginDetails}=userSlice.actions;

export const selectUserName=(state)=>state.user.name;
export const selectUserEmail=(state)=>state.user.email;
export const selectUserPhotoURL=(state)=>state.user.photoURL;
export const selectUserSlug=(state)=>state.user.slug;


export default userSlice.reducer;