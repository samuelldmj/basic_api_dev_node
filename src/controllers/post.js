const Post = require('../models/post');

const getPostsController = async  (req, res) => {
    const posts = await Post.find().select("_id title body");
    try{
       return res.status(200).json({posts: posts})
    }
    catch(err){
        return res.status(400).json({
            error: err,
        });
    }
};


const createPostController = async (req, res) => {
    const postModel = new Post(req.body);

    try {
        const result = await postModel.save();
        return res.status(201).json({
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