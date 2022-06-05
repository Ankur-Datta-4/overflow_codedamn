const model=require('../models/Group')
const asyncWrap=require('../middleware/asyncHandler');
const e = require('express');
const PostModel=require('../models/Post')
const {UserModel}=require('../models/User')
//create-group
const createGroup=asyncWrap(async(req,res)=>{
    const {photoURL,bio,people,tags,name,admin}=req.body;
    let obj={photoURL,bio,people,tags,name,admin}
    let resGrp=await model.create(obj)
    if(resGrp){
        console.log(resGrp)
        res.status(200).json({err:false,resGrp})
    }else{
        res.status(400).json({err:false,msg:'Invalid data'})

    }
})
//get-group

const getGroup=asyncWrap(async(req,res)=>{
    const {id}=req.params;

    let resGrp=await model.findOne({slug:id})

    if(resGrp){
        res.status(200).json({err:false,resGrp})
    }else{
        res.status(404).json({err:false,msg:'Invalid Slug'})

    }
})


// add post or add person
const editGroup=asyncWrap(async(req,res)=>{
    const {id}=req.params;
    const {post,userSlug}=req.body;
    if(req.query.post){
        const resPost=await PostModel.create(post)

        if(resPost){
    
            await model.findOneAndUpdate({slug:id},{
                    $push:{posts:resPost._id}
            })
    
            return res.status(201).json({err:false,post_id:resPost._id})
        }else{
            res.status(400).json({err:false,msg:'Invalid data'})
    
        }
    }else{

        
    let user=await UserModel.findOne({userSlug})

    
    if(user){
        let obj={name:user.name,photoURL:user.photoURL,uid:userSlug}
        // let newGrp={...user.groups,}
        let updatedGrp=await model.findOneAndUpdate({slug:id},{
            $push:{people:obj}},{new:true})
        let grpReqs={name:updatedGrp.name,gid:updatedGrp.slug,photoURL:updatedGrp.photoURL}
        let newGrp={...user.groups,grpReqs}
        await UserModel.findByIdAndUpdate(user._id,{groups:newGrp})

    }else{
        res.status(400).json({err:false,msg:'Invalid data'})

    }
    }
    
})



module.exports={
    createGroup,
    getGroup,
    editGroup
}