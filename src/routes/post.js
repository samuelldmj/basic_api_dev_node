const express = require('express');
const { getPostsController } = require('../controllers/post');

const router = express.Router();
router.get('/', getPostsController);



module.exports = {
   router
}

