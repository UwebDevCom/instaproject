process.env.SUPPRESS_NO_CONFIG_WARNING = 'y';

const users = require('./src/users/users.route');
const posts = require('./src/posts/posts.route');
const comments = require('./src/comments/comments.route');
const auth = require('./src/auth/auth.route')
const bodyParser = require('body-parser');
const cors = require('cors');
const mongoose = require('mongoose');
const mongoAtlas = 'mongodb+srv://tomermatmon:tomermatmondb@instaproject-1ogpw.mongodb.net/test?retryWrites=true'

const DB_URI = process.env.DB_URI || mongoAtlas || 'mongodb://localhost:27017/instaproject'
mongoose.connect(DB_URI, { useNewUrlParser: true })
.then(() => console.log('connected to MongoDB...'))
.catch((err) => console.log('NOT connected to MongoDB', err));


const express = require('express');
const app = express();
const port = process.env.PORT || 8080;

app.use(cors({
    origin:'http://localhost:3000'
}));
app.use(bodyParser.json());
app.use(users.route);
app.use(posts.route);
app.use(comments.route);
app.use(auth.route);
app.use(express.static('build'));

app.listen(port,
    ()=>console.log('server is running!') 
    );   
