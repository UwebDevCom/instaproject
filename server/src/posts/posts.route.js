
const { Post, validatePostReq } =require('./Post.model');
const { User } = require('../users/User.model');
const { Router } = require('express');
const route = Router();


route.get('/api/posts', async(req,res)=>{
   try {
    if (req.query.title || req.query.hashtag)
    {
        const posts = await Post.find({
            title: new RegExp(req.query.title, 'i'),
            hashtag: new RegExp(req.query.title, 'i'),
        });
        res.send(posts);
    }else {
        const posts = await Post.find({});
    res.send(posts);
    }
   }catch(e) {
       res.status(409).send(e.message);
   }
});

route.get('/api/posts/:userId/loggedUserPosts', async (req, res) => {
    try {
        const posts = await Post.find({author: req.params.userId});
        res.send(posts);
    } catch(e) {
        res.status(400).send(e.message);
    }
});

route.get('/api/posts/:userId/loggedUserSavedPosts', async (req, res) => {
    try {
        //find post by id, populate and return
        const post = await User.findById(req.params.userId)
        .populate('savedPosts');

        res.send(post);
    } catch(err) {
        res.status(400).send(err.message);
    }
})


route.get('/api/posts/:userId/following', async (req, res) => {
    try {    
        const user = await User.findById(req.params.userId);
        if (user.following) {
            let postsByUser =[];
            for (Followed of user.following ) {
               postsByUser.push( await Post.find({  author:  Followed} ));
            } 
            res.send(postsByUser);     
        }
        } catch(e) {
            res.status(409).send(e.message);
        }
 });


route.get('/api/posts/:postId/comments', async(req,res)=>{
    try {
    const posts = await Post.findById(req.params.postId);
    res.send(posts.comments);
    } catch(err) {
        res.status(409).send(err.message);
    }
});


route.get('/api/posts/:postId',async (req,res)=>{
    try {
        //find single post by id
        const post = await Post.findById(req.params.postId);
        //return post to client
        res.send(post);
    } catch(err) {
        res.status(409).send(err.message);
    }
});


route.post('/api/posts',async (req,res)=>{
    try {
        // validate request
        const { error } = validatePostReq(req.body);
        if(error) return res.status(400).res(error.details[0].message);
        //create new post
        const post = new Post({
            caption:req.body.caption,
            image:req.body.image,
        });
        //save new post
        await post.save();
        //return post to client
        res.send(post);
    } catch(err) {
        res.status(400).send(err.message);
    }
});


route.put('/api/posts/:postId', async (req,res)=>{
    try {
        //validate request
        const { error } = validatePostReq(req.body);
        if(error) return res.status(400).res(error.details[0].message);
        //get post from server and update
        const post = await Post.findByIdAndUpdate(req.params.postId, {
            caption:req.body.caption,
            image:req.body.image,
        });
        if(!post) return res.status(404).res('post not found');
        //return new post to client
        res.send(post);
    } catch(err) {
        res.status(400).send(err.message);
    }
});


route.delete('/api/posts/:postId', async (req,res)=>{
    try {
    const post = await Post.findByIdAndDelete(req.params.postId);
    res.send(post);
    } catch(err) {
        res.status(400).send(err.message);
    } 
});


module.exports ={
    route
}

