const mongoose = require('mongoose');
const autopopulate = require('mongoose-autopopulate');

const CommentSchema = mongoose.Schema({
    body: {
        type: String,
        required: true
    },
    author: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User',
        autopopulate: true
    },
    hashtages: [String],
    published: {
        type: Date,
        default: Date.now
    }
});

CommentSchema.plugin(autopopulate);

const Comment = mongoose.model('Comment',CommentSchema);

module.exports ={
  Comment
}