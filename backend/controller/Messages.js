const MessageModel=require('../models/Message')
const ChatModel=require('../models/Chat')
const {UserModel}=require('../models/User')
const asyncWrap=require('../middleware/asyncHandler')

// sending the message

//post
const sendMessage=asyncWrap(async(req,res)=>{
    const {convId}=req.params
    const {sender,recv,content}=req.body;
    let obj={senderId:sender.uid,recvId:recv.uid,content,convId}
    const resMesg=await MessageModel.create(obj)
    // const user=await UserModel.findOne({userSlug:senderId})
    //next, update the last message of the conversation
    const lastMesg=await ChatModel.findByIdAndUpdate(convId,{recentMessage:`${sender.name}:${content}`},{new:true})

    if(resMesg && lastMesg){
        return res.status(201).json({msg:`${convId}:sent to ${recv.name}`,content})
    }else{
        return res.status(404).json({err:true,msg:'couldnt find the conversation'})
    }
})

//get message
const recvMessage=asyncWrap(async(req,res)=>{
    const {convId}=req.params;
    const msgs=await MessageModel.find({convId})

    if(msgs.length>0){
        return res.status(200).json({err:false,msgs})
    }else{
        return res.status(404).json({err:false,msg:'couldnt find the msgs',msgs:[]})
    }

})

// create chat
const createChat=asyncWrap(async(req,res)=>{
    const {isGroupChat,users,chatName}=req.body;
    let obj={isGroupChat,users,chatName};
    

    const resChat=await ChatModel.create(obj)
    //update in users chats
    

    if(resChat){
        users.forEach(async(u)=>{
            await UserModel.findOneAndUpdate({userSlug:u.uid},{$push:{chats:resChat._id}})  
        })
        return res.status(201).json({err:false,msg:`created ${resChat._id} successfully`,id:resChat._id})
    }
})


// add member
const addMember=asyncWrap(async(req,res)=>{
    const {convId}=req.params;
    const {users}=req.body;//send all users

    const preConv=await ChatModel.findById(convId);
    if(!preConv){
        return res.status(404).json({err:true,msg:`couldnt find the conversation ${preConv._id}`})
    }

const postRes= await ChatModel.findByIdAndUpdate(convId,{users,isGroupChat:true},{new:true})

    users.forEach(async(u)=>{
        let reqUser=await UserModel.findOne({userSlug:u.uid});
        if(!reqUser.chats.find((e)=>e===convId)){
            await UserModel.findOneAndUpdate({userSlug:u.uid},{$push:{chats:convId}})
        }
    })

if(postRes){
    return res.status(202).json({err:false,msg:`Added users to ${convId}`,extra:postRes.users})
}
    
})
// delete chat
const deleteChat=asyncWrap(async(req,res)=>{
    const {convId}=req.params;
    const conv=await ChatModel.findById(convId)
    let users=conv.users;

    await ChatModel.findByIdAndDelete(convId)
    const count=await MessageModel.deleteMany({convId})

    users.forEach(async(u)=>{
        await UserModel.findOneAndUpdate({userSlug:u.uid},{$pull:{chats:convId}})
    })
    //delete chat in all users as well

    return res.status(204).json({err:false,msg:`Deleted ${count} messages`})
})

//get conversations

const getChats=asyncWrap(async(req,res)=>{
    const {id}=req.params;
    const resUser=await UserModel.findOne({userSlug:id})
    if(!resUser) return res.status(404).json({err:true,msg:`${id} not found`})
    let chats=resUser.chats
    let resChats=await ChatModel.find({_id:{$in:chats}})
    let k=resChats.length
    if(k>0){
        //for each chat, if users==2, chatName=Other user name
        

            return res.status(200).json({err:false,chats:resChats})
        
    }else if(k===0){
        return res.status(200).json({err:false,msg:`No results found for ${id}`,chats:[]})
    }
    
})



module.exports={
    sendMessage,
    recvMessage,
    addMember,
    createChat,
    deleteChat,
    getChats
}