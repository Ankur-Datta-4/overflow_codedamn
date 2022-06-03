const {ErrorCreate}=require("../errorClass");


const reportError = (err,req,res,next)=>{
    console.log(err)
    return res.status(500).json({err:true, msg:`something went wrong..try again later`,error:{...err}})
    
}