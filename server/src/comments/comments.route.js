
const {Router} = require('express');
const {Comment} =require('./Comment.model');
const route = Router();


route.get('/api/comments', async(req,res)=>{
   try {
    if (req.query.title || req.query.hashtag)
    {
        const comments = await Comment.find({
            title: new RegExp(req.query.title, 'i'),
            hashtag: new RegExp(req.query.title, 'i'),
        });
        res.send(comments);
    }else {
        const comments = await Comment.find({});
    res.send(comments);
    }
   }catch(e) {
       res.status(409).send(e.message);
   }
});


route.get('/api/comments/:commentId',async (req,res)=>{
    try {
        const comments = await Comment.findById(req.params.commentId);
        res.send(comments);
    }catch(e){
        res.status(409).send(e.message);
    }
});


route.post('/api/comments',async (req,res)=>{
    try {
        const comment = new Comment(req.body);
        comment.save();
        res.send(comment);
    }catch(e){
        res.status(409).send(e.message);
    }
});


route.put('/api/comments/:commentId', async (req,res)=>{
    try {
  const comment = await Comment.findByIdAndUpdate(req.params.commentId, req.body);
    res.send(comment);
    }catch(e){
        res.status(400).send(e.message);
    }
});


route.delete('/api/comments/:commentId', async (req,res)=>{
    try {
    const component = await Comment.findByIdAndDelete(req.params.commentId);
    res.send(component);
    }catch(e){
        res.status(400).send(e.message);
    } 
});


module.exports ={
    route
}

