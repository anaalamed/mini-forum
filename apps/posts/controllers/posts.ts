import Post from '../models/post';
// import { Types } from 'mongoose';


export const getPosts = async (req, res) => {
    try {
        const posts = await Post.find({});
        res.json(posts);
    } catch {
        res.status(500).json({ message: "Could not load posts" })
    }
}

export const createPost = async (req, res) => {
    try {
        const _id = req.user;
        const { content } = req.body;
        const newPost = await Post.create({ content, user: _id });
        res.json(newPost);
    } catch {
        res.status(500).json({ message: "Could not create post !!" })
    }
}

export const updatePost = async (req, res) => {
    try {
        const { content } = req.body;
        const _id = req.params.postId;
        const updatedPost = await Post.updateOne({ _id, user: req.user }, { $set: { content } });
        res.json(updatedPost);
    } catch {
        res.status(500).json({ message: "Could not update post" })
    }
}

export const deletePost = async (req, res) => {
    try {
        const _id = req.params.postId;
        const deletedPost = await Post.deleteOne({ _id, user: req.user });
        res.json(deletedPost);
    } catch {
        res.status(500).json({ message: "Could not delete post" })
    }
}

