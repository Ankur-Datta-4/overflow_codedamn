const MessageModel=require('../models/Message')
const ChatModel=require('../models/Chat')
const asyncWrap=require('../middleware/asyncHandler')

// sending the message

//post
const sendMessage=asyncWrap(async(req,res)=>{
    const {convId}=req.params
    const {senderId,recvId,content}=req.body;
    let obj={senderId,recvId,content,convId}
    const resMesg=await MessageModel.create(obj)
    //next, update the last message of the conversation
    const lastMesg=await ChatModel.findByIdAndUpdate(convId,{recentMessage:content},{new:true})

    if(resMesg && lastMesg){
        return res.status(201).json({msg:`${convId}:sent to ${recvId}`,content})
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

    if(resChat){
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

if(postRes){
    return res.status(202).json({err:false,msg:`Added users to ${convId}`,extra:postRes.users})
}
    
})
// delete chat
const deleteChat=asyncWrap(async(req,res)=>{
    const {convId}=req.params;
    
    await ChatModel.findByIdAndDelete(convId)
    const count=await MessageModel.deleteMany({convId})
    return res.status(204).json({err:false,msg:`Deleted ${count} messages`})
})

// remove member



module.exports={
    sendMessage,
    recvMessage,
    addMember,
    createChat,
    deleteChat
}