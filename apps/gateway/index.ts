import { app } from 'api-server';
import { createProxyMiddleware } from 'http-proxy-middleware';
import fetch from 'node-fetch';
import * as express from 'express';
import * as path from 'path';

app.use(['/api/comments', '/api/posts'], async function checkAuth(req, res, next) {
    try {
        const response = await fetch('http://localhost:4000/api/me', { headers: { cookie: req.headers.cookie } })
        const user = await response.text();
        const setCookie = response.headers.get('set-cookie')
        if (setCookie) {
            res.append('set-cookie', setCookie);
        }
        req.headers.user = user;
    } catch {
        req.headers.user = '';
    }
    next();
})
app.use('/api/comments', createProxyMiddleware({ target: 'http://localhost:4002', changeOrigin: true }));
app.use('/api/posts', createProxyMiddleware({ target: 'http://localhost:4001', changeOrigin: true }));
app.use(['/api/users', '/api/me', '/api/register', '/api/login', '/api/logout'], createProxyMiddleware({ target: 'http://localhost:4000', changeOrigin: true }));

// serve UI
app.use(express.static(path.resolve(__dirname, '../../ui/build')));
app.get('*', (req, res) => {
    res.sendFile(path.resolve(__dirname, '../../ui/build', 'index.html'));
});

app.listen(process.env.PORT || 8080, () => console.log('Gateway app is running! on Port: ', process.env.PORT))
