const newrelic = require('newrelic');
const express = require('express');
const compression = require('compression');

const app = express();
const PORT = 9002;

app.set('view engine', 'ejs');
app.use(compression());
app.use(express.static('dist'));

app.listen(process.env.PORT || PORT, function() {
  console.log('Mountain Bike Virginia running on port', PORT);
});