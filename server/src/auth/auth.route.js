const { Router } = require ('express');
const route = Router();
const { User } = require('../users/User.model');
const bcrypt = require('bcrypt');
const Joi = require('@hapi/joi');

route.post('/api/auth',async (req,res)=>{
    try {
        //validate request
        const { error } = validateAuth(req.body);
        if(error) return res.status(400).send(error.details[0].message);
        //check if user exist by email address
        let user = await User.findOne({ email: req.body.email });
        if(!user) return res.status(400).send('Invalid email or password');
        //if user exist - compare password
        const isPasswordValid = await (await bcrypt.compare(req.body.password, user.password) || req.body.password === user.password);
        if(!isPasswordValid) return res.status(400).send('Invalid email or password');

        //create token
        const token = user.generateAuthToken()
        res.send(token);
    } catch(err) {
    console.log(err.message)
    res.status(400).send(err.message);
   }
});

function validateAuth(reqBody) {
    const schema = {
        email: Joi.string().required().email({ minDomainSegments: 2 }),
        password: Joi.string().required()
    };
    return Joi.validate(reqBody, schema);
};

module.exports = {
    route
}