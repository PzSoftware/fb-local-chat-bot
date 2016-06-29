const Bot = require('../build');
const express = require('express');
const bodyParser = require('body-parser')
const Promise = require('bluebird');

Bot.init('<TOKEN>', '<VERIFY_TOKEN>', true /* useLocalChat*/);

Bot.on('text', (event) => {
  console.log(event);
});

const app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));

app.use('/chat', Bot.router());

var server = app.listen(5000, () => {
  console.log('Listening on port %s...', server.address().port);
});