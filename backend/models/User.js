const mongoose=require('mongoose')
const { default: slugify } = require('slugify')

const UserSchema=mongoose.Schema({
    name:String,
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
    ]
})

UserSchema.pre('validate',function(next){
  if(this.email){
      this.userSlug=slugify(this.email,{lower:true,strict:true})
  }  
  next()
})
const UserModel=mongoose.model("User",UserSchema)



const InterestSchema=mongoose.Schema({
    tag:String,
    users:[String]
})

const InterestModel=mongoose.model("Interest",InterestSchema)

module.exports={
    UserModel,
    InterestModel
}