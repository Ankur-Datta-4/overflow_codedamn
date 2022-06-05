const { recvMessage, sendMessage, createChat, addMember, deleteChat, getChats } = require('../controller/Messages')

const router=require('express').Router()

router.route('/')
    .post(createChat)

router.route('/:convId')
    .get(recvMessage)
    .post(sendMessage)
    .patch(addMember)
    .delete(deleteChat)


router.route('/u/:id')
    .get(getChats)
module.exports=router