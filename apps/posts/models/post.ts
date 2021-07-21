import { model, Schema } from 'mongoose';

const PostSchema = new Schema({
    // title: {
    //     type: String,
    //     required: true
    // },
    content: {
        type: String,
        required: true
    },
    user: {
        type: Schema.Types.ObjectId,
        required: true,
    },
    created: {
        type: Date,
        default: Date.now
    },
});

const Post = model('Post', PostSchema);

export default Post;