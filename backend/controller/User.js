
const { default: mongoose } = require('mongoose')
const { default: slugify } = require('slugify')
const asyncWrap=require('../middleware/asyncHandler')
const {UserModel}=require('../models/User')


//create-user
const createUser=asyncWrap(async(req,res)=>{
    const {name,email,photoURL}=req.body

    
    let obj={name,email,photoURL}
    let resUser=await UserModel.create(obj);

    if(resUser){
        return res.status(201).json({success:true,id:resUser._id,slug:resUser.userSlug})
    }else{
        return res.status(400).json({success:false,msg:'Error creating'})
    }
    
    
})
//update-user

//patch requests
const updateUser=asyncWrap(async(req,res)=>{
    let {photoURL,links,interests,bio,posts}=req.body;
    let {id}=req.params;    
    
    let keys=Object.keys(req.query)
    console.log(keys)

    let map={'posts':posts,'bio':bio,'interests':interests,'links':links,'photoURL':photoURL}
    let toUpdate={}
    for(let i=0;i<keys.length;i++){
        toUpdate[keys[i]]=map[keys[i]]
    }

    console.log(toUpdate)
    let tryCheck=await UserModel.findOneAndUpdate({userSlug:id},toUpdate,{new:true})
    
    console.log(`User updated`)
    console.log(tryCheck)

    res.status(200).json({err:false,msg:'updated user'})
})


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