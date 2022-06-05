const mongoose=require('mongoose')
const { default: slugify } = require('slugify')

const UserSchema=mongoose.Schema({
    name:String,
    // phone:String,
    userSlug:{
        type:String,
        unique:true
    },
    email:{
        type:String,
        unique:true,
        required:true
    },
    photoURL:{
        type:String,
        required:true
    },
    links:[
        {
            provider:String,
            url:String
        }
    ],
    interests:[
        String
    ],
    bio:String,
    posts:[
        String
    ],
    chats:[String],//convIds,
    groups:[{
        name:String,
        photoURL:String,
        gid:String
    }]
})

UserSchema.pre('validate',function(next){
  if(this.email){
      this.userSlug=slugify(this.email,{lower:true,strict:true})
  }  
  next()
})
const UserModel=mongoose.model("User",UserSchema)



const InterestSchema=mongoose.Schema({
    tag:{
        type:String,
        unique:true
    },
    users:[{
        name:String,
        id:String,
        photoURL:String
    }],
    groups:[{
        name:String,
        id:String,
        photoURL:String
    }]
})

const InterestModel=mongoose.model("Interest",InterestSchema)

module.exports={
    UserModel,
    InterestModel
}