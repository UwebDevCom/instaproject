const mongoose = require('mongoose');
const validator = require('validator');

const UserSchema = mongoose.Schema({
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
        required: true
    },
    email: {
        type: String,
        required: true,
        validate: [ validator.isEmail, 'invalid email']
    },
    registrationDate: {
        type: Date,
        default: Date.now
    },
    password: {
        type: String,
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
    taggedInPosts: [{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Post'
    }]
})


const User = mongoose.model('User', UserSchema);

module.exports = {
    User
}