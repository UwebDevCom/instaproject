
const {Router} = require('express');
const {Post} =require('./Post.model');
const route = Router();


route.get('/posts', async(req,res)=>{
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


route.get('/posts/:postId',async (req,res)=>{
    try {
        const post = await Post.findById(req.params.postId);
        res.send(post);
    }catch(e){
        res.status(409).send(e.message);
    }
});


route.post('/posts',async (req,res)=>{
    try {
        const posts = new Post(req.body);
        posts.save();
        res.send(posts);
    }catch(e){
        res.status(409).send(e.message);
    }
});


route.put('/posts/:postId', async (req,res)=>{
    try {
  const post = await Post.findByIdAndUpdate(req.params.postId, req.body);
    res.send(post);
    }catch(e){
        res.status(400).send(e.message);
    }
});


route.delete('/posts/:postId', async (req,res)=>{
    try {
    const post = await Post.findByIdAndDelete(req.params.postId);
    res.send(post);
    }catch(e){
        res.status(400).send(e.message);
    } 
});


module.exports ={
    route
}

