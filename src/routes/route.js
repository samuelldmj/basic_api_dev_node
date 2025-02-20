const express = require('express');
const { getPostsController, createPostController } = require('../controllers/post');

const router = express.Router();
//GET OPERATION
router.get('/', getPostsController);
//POST OPERTION
router.post('/post', createPostController);


module.exports = {
   router
}

