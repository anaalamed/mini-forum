import { app } from 'api-server';
import commentsRouter from './routes';
import { connect } from 'forum-db';

connect(process.env.MONGODB_URI || 'mongodb://localhost:27017/comments')
// connect(process.env.MONGODB_URI || 'mongodb+srv://who:NmDwk4a7n0zy5H6Y@cluster0.wld4w.mongodb.net/mini-forum?retryWrites=true&w=majority')


app.use(commentsRouter)

app.listen(4002, () => console.log('Comments app is running!'))
