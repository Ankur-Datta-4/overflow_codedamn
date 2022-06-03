const router=require('express').Router()
const {createGroup,editGroup,getGroup}=require('../controller/Group')
router.route('/:id')    
        .get(getGroup)
        .patch(editGroup);
router.route('/')
    .post(createGroup)


    module.exports=router