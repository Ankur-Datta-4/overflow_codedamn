const { findTags } = require('../controller/Interest')

const router=require('express').Router()

router.route('/')
    .get(findTags)

module.exports=router