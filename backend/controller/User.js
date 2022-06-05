
const { default: mongoose } = require('mongoose')
const { default: slugify } = require('slugify')
const asyncWrap=require('../middleware/asyncHandler')
const {UserModel,InterestModel}=require('../models/User')
const PostModel=require('../models/Post')

//create-user
const createUser=asyncWrap(async(req,res)=>{
    const {name,email,photoURL}=req.body

    
    let obj={name,email,photoURL}
    let initUser=await UserModel.findOne({email})

    if(initUser!=null){
        return res.status(200).json({success:true,isPresent:true,slug:initUser.userSlug})
    }else{


    let resUser=await UserModel.create(obj);

    if(resUser){
        return res.status(201).json({success:true,id:resUser._id,slug:resUser.userSlug,isPresent:false})
    }else{
        return res.status(400).json({success:false,msg:'Error creating'})
    }
}
    
})
//update-user

//patch requests

const updateUser=asyncWrap(async(req,res)=>{
    let {photoURL,links,interests,bio,posts}=req.body;
    let {id}=req.params;    
    
    // let preUser=await UserModel.findOne({userSlug:id})
    // if(!preUser) return res.status(404).json({err:true,msg:'user doesnt exist'})

    

    let keys=Object.keys(req.query)
    console.log(keys)
    let extras={}
// if interests added: add it to interest cache

/*
    input interest:{
        tag,
    }
        
*/
    

    let map={'posts':posts,'bio':bio,'interests':interests,'links':links,'photoURL':photoURL}
    let toUpdate={}
    for(let i=0;i<keys.length;i++){
     
        if(keys[i]==="interests"){
            //push into interest cache
            
            pushInterests(interests,id);//for search
            extras={...extras,interests}
            
            // toUpdate.interests={...preUser.interests,interests}

        }else if(keys[i]==="posts"){
            //update post model
            const resPost=await PostModel.create(posts)
            extras={...extras,resPost}
            // toUpdate.posts={...preUser.posts,posts}
        }
        toUpdate[keys[i]]=map[keys[i]]
    }

    console.log(toUpdate)
    let tryCheck=await UserModel.findOneAndUpdate({userSlug:id},toUpdate,{new:true})
    
    console.log(`User updated`)
    console.log(tryCheck)
    extras={...extras,user:tryCheck}
    res.status(200).json({err:false,msg:'updated user',extras})
})



const pushInterests=async(interest,id)=>{

    const resUser=await UserModel.findOne({userSlug:id})
    let obj={name:resUser.name,id,photoURL:resUser.photoURL}
    interest.forEach(async element => {
        
        await InterestModel.findOneAndUpdate({
            tag:element.tag
        },{
            $push:{users:obj}
        },{upsert:true})
    })
}
//get-user
const getUser=asyncWrap(async(req,res)=>{
    let {id}=req.params;
    const response=await UserModel.findOne({userSlug:id})

    return res.status(200).json({err:false,user:response})
    
})





module.exports={
    getUser,
    updateUser,
    createUser
}