import { model, Schema } from 'mongoose';

const PostSchema = new Schema({
    content: {
        type: String,
        required: true
    },
    user: {
        type: Schema.Types.ObjectId,
        required: true,
    },
    username: {
        type: String
    },
    likes: {
        type: Number,
        default: 0
    },
    comments: {
        type: Array,
        default: []
    },
    created: {
        type: Date,
        default: Date.now
    },
});

const Post = model('Post', PostSchema);

export default Post;