const users = require('./src/users/users.route');
const bodyParser = require('body-parser');
const cors = require('cors');
const mongoose = require('mongoose');

mongoose.connect('mongodb://localhost:27017/instaproject', { useNewUrlParser: true });

const express = require('express');
console.log('server is running!');
const app = express();

app.use(cors({
    origin:'http://localhost:3000'
}));
app.use(bodyParser.json());
app.use(users.route);

app.listen(8081);   
