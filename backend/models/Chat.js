const mongoose=require('mongoose')

const ChatSchema=mongoose.Schema({
    isGroupChat:{
        type:Boolean,
        default:false
    },
    users:[{
        name:String,
        uid:String
    }],
    recentMessage:{
        type:String,
    },
    chatName:String,
    photoURL:String

},{
    timestamps:true
})

const ChatModel=mongoose.model('Chat',ChatSchema)


module.exports=ChatModel