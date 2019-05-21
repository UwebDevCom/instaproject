const mongoose = require('mongoose');
const Joi = require('@hapi/joi');
const jwt = require('jsonwebtoken');
const config = require('config')
 

const UserSchema =  mongoose.Schema({
    name: {
        type: String,
        require: true
    },
    lastName: {
        type: String,
        required: true
    },
    userName: {
        type: String,
        required: true
    },
    userImg: {
        type: String,
    },
    location: {
        type: String,
    },
    email: {
        type: String,
        trim: true,
        lowercase: true,
        unique: true,
        required: true,
    },
    registrationDate: {
        type: Date,
        default: Date.now
    },
    password: {
        type: String,
        required: true
    },
    following: [{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User'
    }],
    followers: [{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User'
    }],
    savedPosts: [{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Post'
    }],
    postMentions: [{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Post'
    }]
});

UserSchema.methods.generateAuthToken = function() {
    const token = jwt.sign({
        _id: this._id
    },
    config.get('jwtPrivateKey'));
    return token
}

const User = mongoose.model('User', UserSchema);

function validateUserReq(reqBody) {
    const schema = {
        name: Joi.string().required(),
        lastName: Joi.string().required(),
        userName: Joi.string().required(),
        userImg: Joi.string(),
        location: Joi.string(),
        email: Joi.string().required().email({ minDomainSegments: 2 }),
        password: Joi.string().required()
    };
    return Joi.validate(reqBody, schema);
};

module.exports = {
    User,
    validateUserReq
};