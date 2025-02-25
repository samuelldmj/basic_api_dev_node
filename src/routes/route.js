const express = require('express');
const { getPostsController, createPostController } = require('../controllers/post');
const { createPostValidator } = require('../validator');

const router = express.Router();
// GET OPERATION
router.get('/', getPostsController);
// POST OPERATION
router.post('/post', createPostValidator, createPostController);

module.exports = {
    router
};