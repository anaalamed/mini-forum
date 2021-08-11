import { app } from 'api-server';
import { connect } from 'forum-db';
import postRouter from "./routes"

connect(process.env.MONGODB_URI || 'mongodb://localhost:27017/posts')
// connect(process.env.MONGODB_URI || 'mongodb+srv://who:NmDwk4a7n0zy5H6Y@cluster0.wld4w.mongodb.net/mini-forum?retryWrites=true&w=majority')

app.use(postRouter);

app.listen(process.env.PORT || 4001, () => console.log('Posts app is running!'))
