const { Router } = require ('express');
const route = Router();
const {User} = require('./User.model');

route.get('/users', async (req, res) => {
    try {
       const users = await User.find({
           name: new RegExp(req.query.name, 'i')
       })
       res.send(users);
    } catch(err) {
        res.status(400).send(err.message);
    }
});


route.post('/users',async (req,res)=>{
   try {
    const user = new User(req.body);
    user.save();
    res.send(user);
   }catch(e) {
    res.status(400).send(err.message);
   }
});


module.exports = {
    route
}