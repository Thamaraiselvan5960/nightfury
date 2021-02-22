const express = require('express');
const path = require('path');

const app = express();

// serve only static files from dist directory
app.use(express.static('./dist/nightfury'));

app.get('/*',(req,res) =>
	res.sendFile('index.html',{root: 'dist/nightfury/'}),
);

// start the app by listening on default heroko port
app.listen(process.env.PORT || 8080);