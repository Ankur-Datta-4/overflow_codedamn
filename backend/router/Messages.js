const { recvMessage, sendMessage, createChat, addMember, deleteChat } = require('../controller/Messages')

const router=require('express').Router()

router.route('/')
    .post(createChat)

router.route('/:convId')
    .get(recvMessage)
    .post(sendMessage)
    .patch(addMember)
    .delete(deleteChat)


module.exports=router