const mongoose=require('mongoose')


const PostSchema=mongoose.Schema({
    parentId:{
        type:String,
        required:true
    },//can be group or user
    content:String,
    onlyText:Boolean,
    photoURL:[String],
    comment:[{
        uName:String,
        content:String
    }]
})

const Model=mongoose.model('Post',PostSchema)


module.exports=Model
