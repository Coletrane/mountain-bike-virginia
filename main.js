const newrelic = require('newrelic');
const express = require('express');
const compression = require('compression');

const app = express();
const PORT = 9001;

app.use(compression());
app.use(express.static('dist'));

app.listen(PORT, function() {
  console.log('Mountain Bike Virginia running on port', PORT);
});