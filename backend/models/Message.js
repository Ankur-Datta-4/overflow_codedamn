const mongoose=require("mongoose")

const MessageSchema=mongoose.Schema({
    senderId:{
        type:String,
        required:true
    },
    recvId:{
        type:String,
        required:true
    },
    content:{
        type:String,
        required:true,
    },
    convId:{
        type:String,
        required:true
    }
},{timestamps:true})


const MessageModel=mongoose.model('Message',MessageSchema)


module.exports=MessageModel