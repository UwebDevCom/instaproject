const mongoose = require('mongoose');
const autopopulate = require('mongoose-autopopulate');
const Joi = require('@hapi/joi');

const PostSchema = mongoose.Schema({
    caption: {
        type: String,
        required: true
    },
    likes:[{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User'
    }],
    image: [{
        type: String,
        required: true
    }],
    author: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User',
        autopopulate: true
    },
    hashtages: [String],
    mentions: [{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User'
    }],
    published: {
        type: Date,
        default: Date.now
    },
    comments: [{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Comment',
        autopopulate: true
    }]
});

PostSchema.plugin(autopopulate);

function validatePostReq(reqBody) {
    const schema = {
        caption: Joi.string().required(),
        image: Joi.string().required()
    };
    return Joi.validate(reqBody, schema);
};

const Post = mongoose.model('Post',PostSchema);

module.exports = {
    Post,
    validatePostReq
};