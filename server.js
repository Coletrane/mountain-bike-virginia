const newrelic = require('newrelic');
const path = require('path');
const express = require('express');
const compression = require('compression');
const history = require('connect-history-api-fallback');
const favicon = require('serve-favicon')

const app = express();
const PORT = 9002;

const root = path.join(__dirname, './dist');

app.use(compression());
app.use(history());

app.use(express.static(root));
app.use(favicon(root + '/favicon.ico'));
app.use('*/favicon-16x16.png', express.static(root + '/favicon-16x16.png'));
app.use('*/favicon-32x32.png', express.static(root + '/favicon-32x32.png'));
app.use('/robots.txt', express.static(root + '/robots.txt'));
app.use('/manifest.json', express.static(root + '/manifest.json'));
app.get('/sitemap.xml', (req, res) => {
  res.setHeader("Content-Type", "text/xml");
  res.sendFile(resolve(root + '/sitemap.xml'));
})

app.listen(process.env.PORT || PORT, function() {
  console.log('Environment: ', process.env.NODE_ENV);
  console.log('Mountain Bike Virginia running on port', PORT);
});
