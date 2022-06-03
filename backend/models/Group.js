const mongoose=require('mongoose')
const { default: slugify } = require('slugify')

const GroupSchema=mongoose.Schema({
    photoURL:String,
    name:{
        type:String,
        unique:true
    },
    bio:String,
    tags:[String],
    people:[{
       name:String,
       photoURL:String,
       uid:String 
    }],
    posts:[String],
    slug:String,
    admin:{
        type:String,
        required:true
    }
})

GroupSchema.pre('validate',function(next){
    if(this.name){
        this.slug=slugify(this.name,{lower:true,strict:true})
    }
    next()
})

const Model=mongoose.model("Group",GroupSchema)


module.exports=Model