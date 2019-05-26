const mongoose = require('mongoose');
const Joi = require('@hapi/joi');
 

const UserSchema =  mongoose.Schema({
    fullName: {
        type: String,
        require: true
    },
    userName: {
        type: String,
        required: true
    },
    userImg: {
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

const User = mongoose.model('User', UserSchema);

function validateUserReq(reqBody) {
    const schema = {
        fullName: Joi.string().required(),
        userName: Joi.string().required(),
        email: Joi.string().required().email({ minDomainSegments: 2 }),
        password: Joi.string().required()
    };
    return Joi.validate(reqBody, schema);
};

module.exports = {
    User,
    validateUserReq
};