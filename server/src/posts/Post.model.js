const mongoose = require('mongoose');
const autopopulate = require('mongoose-autopopulate');
const PostSchema = mongoose.Schema({
    caption: {
        type: String,
        required: true
    },
    likes:{
        type: Number,
        default: 0
    },
    saved:{
        type: Boolean,
        default: false
    },
    image: {
        type: [String],
    },
    author: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User',
        autopopulate: true
    },
    hashtages: {
        type: [String],
        default: undefined
    },
    usertags: {
        type: [String],
        default: undefined
    },
    published: {
        type: Date,
        default: Date.now()
    },
    comments: {
        type: [mongoose.Schema.Types.ObjectId],
        ref: 'Comment',
        autopopulate: true
    }
});

PostSchema.plugin(autopopulate);

const Post = mongoose.model('Post',PostSchema);

module.exports = {
    Post
}