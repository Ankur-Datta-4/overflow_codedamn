const asyncWrap=require('../middleware/asyncHandler');
const model=require('../models/Post')
const {UserModel}=require('../models/User')
const GroupModel=require('../models/Group')
//screen-out

//getPosts
const getPosts=asyncWrap(async(req,res)=>{
    // const {id}=req.params;
    const {ids}=req.body;

    let posts
    if(ids && ids.length>0)
         posts=await model.find({_id:{$in:ids}});
    else{
        posts=await model.find();
    }
    if(posts){
        posts.reverse();
        return res.status(200).json({err:false,posts})
    }
})
//getPost
const getPost=asyncWrap(async(req,res)=>{
    const {id}=req.params;

    const post=await model.findById(id);
    if(post){
        return res.status(200).json({err:false,post})
    }
})

//createPost
const createPost=asyncWrap(async(req,res)=>{
    const {parentId,parentName,content,photoURL,isGroup,parentPhoto}=req.body;
    let postObj={
        parentId,
        parentName,content,photoURL,parentPhoto
    }
    const newPost=await model.create(postObj);
    // console.log(newPost)
    
    if(newPost){
        //update post list in group or user
        let updatedParent;
        if(!isGroup){
    // const response=await UserModel.findOne({userSlug:id})
    //
            // const parent=await UserModel.findOne({userSlug:parentId});
            const parent=await UserModel.findOne({userSlug:parentId})
            // console.log(parent)
            if(!parent) {
                return res.status(400).json({err:true,msg:`Couldnt update user`})
            }
            // console.log(parent)
            const posts=[...parent.posts,newPost._id]
            // console.log(posts)
            //update user
           updatedParent=await UserModel.findOneAndUpdate({userSlug:parentId},{posts:posts},{new:true})
            // console.log(updatedParent)

            
        }
        else {
            const parent=await GroupModel.findOne({slug:parentId});
            if(parent==null)   res.status(400).json({err:true,msg:`Couldnt update user`})

            const posts=[...parent.posts,newPost._id]

            updatedParent=await GroupModel.findOneAndUpdate({slug:parentId},{posts},{new:true})
            
            
        }
        console.log(updatedParent)
        return res.status(201).json({err:false,post:newPost,updatedParent})

    }


})
//likePost
const likePost=asyncWrap(async(req,res)=>{
    const {id}=req.params;
    const {count,inc}=req.body;
    const post=await model.findByIdAndUpdate(id,{likes:count+inc},{new:true});
    if(post){
        return res.status(200).json({err:false,likes:post.likes})
    }
})

module.exports={
    getPost,
    getPosts,
    likePost,
    createPost
}