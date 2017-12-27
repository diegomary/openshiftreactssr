import express from 'express';
import React from 'react';
import ReactDOM from 'react-dom/server';
import { renderToString } from 'react-dom/server';
import About from './about';
import fetch from 'isomorphic-fetch';
import path from 'path'
const app = express();

var port = process.env.PORT || process.env.OPENSHIFT_NODEJS_PORT || 8080,
    ip   = process.env.IP   || process.env.OPENSHIFT_NODEJS_IP || '0.0.0.0';

app.use(express.static(__dirname + '/public'));
console.log(__dirname)

app.get('/', (req, res) => {   
	res.send(`
    <!doctype html>
    <html>
        <head>
            <title>Example of universal app with react</title>
             <link rel="stylesheet" href="./styles.css" asp-append-version="true" />
             <link href="https://fonts.googleapis.com/css?family=Open+Sans" rel="stylesheet">
        </head>
        <body>       
          <div id='app'>${renderToString(<About/>)}</div>
          <script src='bundle.js'></script>
        </body>
    </html>
`);})
app.listen(port, ip, () => console.log(`Example app listening on port ${port} and ${ip}`));

