const { User, validateUserReq } = require('./User.model');
<<<<<<< HEAD
// const bcrypt = require('bcrypt');
const config = require('config');
const jwt = require('jsonwebtoken');
=======
>>>>>>> 2de9a7d99152e582260665a4f70145cbdef807e0
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
        //save new user
        await user.save()
        //return new user to client
        res.send(user);
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