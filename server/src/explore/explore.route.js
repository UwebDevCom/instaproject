const { Post } = require('../posts/Post.model');
const { User } = require('../users/User.model');
const { Router } = require ('express');
const route = Router();

route.get('/api/explore/users', async(req, res)=> {
    try {
        const user = await User.find()
         res.send(user)
     } catch(err) {
         res.status(409).send(err.message);
     }
});

route.get('/api/explore/posts', async(req,res)=> {
    try {     
     const posts = await Post.find();
     res.send(posts);
    } catch(e) {
        res.status(409).send(e.message);
    }
 });

 module.exports = {
    route
}