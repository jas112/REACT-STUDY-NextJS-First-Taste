const { query } = require('express');
const express = require('express');
const next = require('next');

const dev = process.env.NODE_ENV !== 'production';
const hostname = 'localhost';
const port = 3000;

const app = next({ dev, hostname, port });
const handle = app.getRequestHandler();

app.prepare().then(() => {

    const server = express();

    server.get('/secret', (req, res) => {
        res.send('YOU HAVE HIT A SECRET ROUTE!!!');
    });

    server.get('/p/:id', (req, res) => {
        app.render(req, res, '/post', {id: req.params.id})
    });

    server.get('*', (req, res) => {
        return handle(req, res);
    });

    server.listen(port, err => {
        if(err) throw err;
        console.log(`> Server started on ${hostname}:${port}...`);
    });

});
