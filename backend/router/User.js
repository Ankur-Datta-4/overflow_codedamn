const router=require('express').Router()
const { getUser, updateUser, createUser }=require('../controller/User')
router.route('/:id')    
        .get(getUser)
        .patch(updateUser);
router.route('/')
    .post(createUser)


    module.exports=router