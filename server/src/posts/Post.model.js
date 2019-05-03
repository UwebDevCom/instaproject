const mongoose = require('mongoose');
const autopopulate = require('mongoose-autopopulate');
const PostSchema = mongoose.Schema({
    
    caption: {
        type: String,
        required: true
    },

    likes:[{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User'
    }],

    image: [String],

    author: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User',
        autopopulate: true
    },
    hashtages: [String],

    usertags: [String],

    published: {
        type: Date,
        default: Date.now
    },

    comments: [{
        type: [mongoose.Schema.Types.ObjectId],
        ref: 'Comment',
        autopopulate: true
    }]
});

PostSchema.plugin(autopopulate);

const Post = mongoose.model('Post',PostSchema);

module.exports ={
    Post
}