const mongoose=require('mongoose')

const GroupSchema=mongoose.Schema({
    photoURL:String,
    bio:String,
    people:[{
       name:String,
       photoURL:String,
       uid:String 
    }],
    posts:[String],
    slug:String
})

const Model=mongoose.model("Group",GroupSchema)


module.exports=Model