const users = require('./src/users/users.route');
const posts = require('./src/posts/posts.route');
const bodyParser = require('body-parser');
const cors = require('cors');
const mongoose = require('mongoose');

const DB_URI = process.env.DB_URI || 'mongodb://localhost:27017/instaproject'
mongoose.connect(DB_URI, { useNewUrlParser: true });

const express = require('express');
const app = express();
const port = process.env.PORT || 8080;

app.use(cors({
    origin:'http://localhost:3000'
}));
app.use(bodyParser.json());
app.use(users.route);
app.use(posts.route);
app.use(express.static('build'));

app.listen(port,
    ()=>console.log('server is running!') 
    );   
