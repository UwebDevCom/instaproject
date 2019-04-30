const { Router } = require ('express');
const route = Router();
const {User} = require('./User.model');

route.get('/api/users', async (req, res) => {
    try {
       const users = await User.find({
           name: new RegExp(req.query.name, 'i')
           
       })
       res.send(users);
    } catch(err) {
        res.status(400).send(err.message);
    }
});


route.get('/api/users/:userId', async (req, res) => {
    try {
       const users = await User.findById(req.params.userId);
       res.send(users);
    } catch(err) {
        res.status(400).send(err.message);
    }
});


route.post('/api/users',async (req,res)=>{
   try {
    const user = new User(req.body);
    user.save();
    res.send(user);
   }catch(e) {
    res.status(400).send(err.message);
   }
});

route.put('/api/users/:userId',async (req,res)=>{
    try {
        const user = await User.findByIdAndUpdate(req.params.userId, req.body);
          res.send(user);
          }catch(e){
              res.status(400).send(e.message);
          }
})


module.exports = {
    route
}