const users = require('./src/users/users.route');
const posts = require('./src/posts/posts.route');
const bodyParser = require('body-parser');
const cors = require('cors');
const mongoose = require('mongoose');

mongoose.connect('mongodb://localhost:27017/instaproject', { useNewUrlParser: true });

const express = require('express');
const app = express();

app.use(cors({
    origin:'http://localhost:3000'
}));
app.use(bodyParser.json());
app.use(users.route);
app.use(posts.route);
app.listen(8081,
    ()=>console.log('server is running!')
    );   
