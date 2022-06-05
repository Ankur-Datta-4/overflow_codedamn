const router=require('express').Router();
const { getPost, likePost,getPosts,createPost }=require('../controller/Post')


router.route('/')
    .get(getPosts)
    .post(createPost);

router.route('/:id')
    .get(getPost)
    .patch(likePost)


module.exports=router;