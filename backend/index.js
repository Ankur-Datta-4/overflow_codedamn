const express=require('express')
const { default: mongoose } = require('mongoose')
const userRouter=require('./router/User')
const groupRouter=require('./router/Group')
const app=express()


const MONGO_URI='mongodb://localhost:27017/over'
app.use(express.json())

app.use("/api/user",userRouter)
app.use("/api/group",groupRouter)


app.get("/test",(req,res)=>{
    console.log("Tested")

    res.send("Done Testing")
})


app.use("*",(req,res)=>{
    res.send("Error Fetching the route")
})

port=process.env.PORT || 1337

app.listen(1337,async()=>{
    await mongoose.connect(MONGO_URI)
    console.log(`DB has connected`)
    console.log(`Server has started at ${port}`)
})