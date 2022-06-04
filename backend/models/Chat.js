const mongoose=require('mongoose')

const ChatSchema=mongoose.Schema({
    isGroupChat:{
        type:Boolean,
        default:false
    },
    users:[String],
    recentMessage:{
        type:String,
    },
    chatName:String
})

const ChatModel=mongoose.model('Chat',ChatSchema)


module.exports=ChatModel