import { Router } from 'express';
import { getPosts, createPost, updatePost, deletePost } from "../controllers/posts"

const postsRouter = Router();

const verifyUser = (req, res, next) => {
    if (req.headers.user) {
        req.user = JSON.parse(req.headers.user);
        next();
    }
    else {
        res.status(401).json({ message: "Not authorize" })
    }
}


postsRouter.get('/api/posts', getPosts);
postsRouter.post('/api/posts', verifyUser, createPost);
postsRouter.put('/api/posts/:postId', verifyUser, updatePost);
postsRouter.delete('/api/posts/:postId', verifyUser, deletePost);

export default postsRouter;
