const asyncWrap=require('../middleware/asyncHandler');
const { InterestModel } = require('../models/User');

//search-by-interests

const findTags=asyncWrap(async(req,res)=>{
    const {tag}=req.query;

    console.log(tag)
   const searchResult=await InterestModel.findOne({
        tag
    })

    if(searchResult){
        res.status(200).json({err:false,data:searchResult})

    }else{
        res.status(404).json({err:false,msg:'Not found',data:[]})
    }
})

module.exports={findTags}