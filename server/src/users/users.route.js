const { User, validateUserReq } = require('./User.model');
const bcrypt = require('bcrypt');
const config = require('config');
const jwt = require('jsonwebtoken');
const { Router } = require ('express');
const route = Router();

route.get('/api/users/', async (req, res) => {
    try {
       const user = await User.find({
           email: new RegExp(req.query.name, 'i')
        })
        res.send(user)
    } catch(err) {
        console.log(err.message)
        res.status(400).send(err.message);
    }
});


route.get('/api/users/:userId', async (req, res) => {
    try {
        const user = await User.findById(req.params.userId);
        res.send(user);

    } catch(err) {
        console.log(err.message)
        res.status(400).send(err.message);
    }
});

// create new user
route.post('/api/users/register',async (req,res)=>{
    try {
        //validate request
        const { error } = validateUserReq(req.body);
        if(error) return res.status(400).send(error.details[0].message);
        //check if user exist by email address
        let user = await User.findOne({ email: req.body.email });
        if (user) return res.status(400).send('User already registered');
        //if user does not exist - creat new user with predefined parameters
        user = new User({
            "fullName": req.body.fullName,
            "userName": req.body.userName,
            "email": req.body.email,
            "password": req.body.password
        });
        // hash new user password
        // const salt = await bcrypt.genSalt(10);
        // user.password = await bcrypt.hash('user.password', salt)
        //save new user
        await user.save()
        //create token for response
        const token = user.generateAuthToken();
        //return new user to client
        res.header('x-auth-token', token).send(user);
    } catch(err) {
    console.log(err.message)
    res.status(400).send(err.message);
   }
});

route.put('/api/users/:userId',async (req,res)=>{
    try {
        const user = await User.findByIdAndUpdate(req.params.userId, req.body);
          res.send(user);
          }catch(err){
            console.log(err.message)
              res.status(400).send(err.message);
          }
})


module.exports = {
    route
}