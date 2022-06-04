const express=require('express')
const { default: mongoose } = require('mongoose')
const userRouter=require('./router/User')
const groupRouter=require('./router/Group')
const searchRouter=require('./router/Search')
const msgRouter=require('./router/Messages')
const cors=require('cors')
const app=express()


const MONGO_URI='mongodb://localhost:27017/over'
app.use(cors())
app.use(express.json())

app.use("/api/user",userRouter)
app.use("/api/group",groupRouter)
app.use("/api/search",searchRouter)
app.use("/api/chat",msgRouter)

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