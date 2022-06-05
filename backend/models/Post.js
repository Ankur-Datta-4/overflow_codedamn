const mongoose=require('mongoose')


const PostSchema=mongoose.Schema({
    parentId:{
        type:String,
        required:true
    },//can be group or user
    parentName:{
        type:String,
        required:true
    },
    parentPhoto:{
        type:String,
        default:'https://robohash.org/3321'
    },
    content:String,
    photoURL:String,
    likes:{
        type:Number,
        default:0
    }
},{timestamps:true})

const Model=mongoose.model('Post',PostSchema)


module.exports=Model
