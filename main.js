const newrelic = require('newrelic');
const path = require('path');
const express = require('express');
const compression = require('compression');
const history = require('connect-history-api-fallback');

const app = express();
const PORT = 9002;

app.use(history());
app.use(compression());
app.use(express.static(path.join(__dirname, './dist')));

app.listen(process.env.PORT || PORT, function() {
  console.log('Mountain Bike Virginia running on port', PORT);
});
