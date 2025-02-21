const Post = require('../models/post');

const getPostsController =  (req, res) => {
    res.json({
        post : [
            {
                title : "This is a first post"
            },
            {
                title : "This is a second post" 
            }
        ]
    });
};


const createPostController = async (req, res) => {
    const postModel = new Post(req.body);

    try {
        const result = await postModel.save();
        return res.status(200).json({
            data: result
        });
    } catch (err) {
        return res.status(400).json({
            error: err,
        });
    }
};


module.exports = {
    getPostsController,
    createPostController 
}