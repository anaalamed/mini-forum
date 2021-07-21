import { app } from 'api-server';
import { connect } from 'forum-db';
import authRouter from './routes/auth';
import usersRouter from './routes/users';
import * as cookieParser from 'cookie-parser';
import { MONGO_URI, PORT } from './config';


connect(MONGO_URI)

app.use(cookieParser())
app.use(authRouter);
app.use(usersRouter); // admin
app.listen(PORT, () => console.log('Authentication app is running!'))
