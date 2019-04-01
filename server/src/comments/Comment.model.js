const mongoose = require('mongoose');
const autopopulate = require('mongoose-autopopulate');

const CommentSchema = mongoose.Schema({
    caption: {
        type: String,
        required: true
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
    published: {
        type: Date,
        default: Date.now()
    },
    comments: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Comment',
        // autopopulate: true
    }
});

CommentSchema.plugin(autopopulate);

const Comment = mongoose.model('Comment',CommentSchema);

module.exports ={
  Comment
}