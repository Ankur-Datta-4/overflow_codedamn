const express=require('express')


const app=express()

app.use(express.json())


app.get("/test",(req,res)=>{
    console.log("Tested")

    res.send("Done Testing")
})


app.use("*",(req,res)=>{
    res.send("Error Fetching the route")
})

port=process.env.PORT || 1337

app.listen(1337,()=>{
    console.log(`Server has started at ${port}`)
})