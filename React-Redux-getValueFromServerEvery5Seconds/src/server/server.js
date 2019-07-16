const bodyParser = require('body-parser');
const express = require('express');
const mongoose = require('mongoose');


const appTest = require('./api/appTest');

const config = {
    port: 8000
};

mongoose.Promise = global.Promise;


const app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: false}));


app.use('/api/appTest', appTest)

app.listen(config.port || 8000,
    () => console.log(`Listening on port ${process.env.PORT || 8000}!`));