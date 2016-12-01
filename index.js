const http = require('http');
const https = require('https');
const express = require('express');
require('newrelic');

const app = express();

app.get('/helthz', (req, res) => {
  res.send('OK');
});

const { PORT = 8080, SSLCERT_KEY, SSLCERT_CRT } = process.env;

if (SSLCERT_KEY && SSLCERT_CRT) {
  const credentials = { key: SSLCERT_KEY, cert: SSLCERT_CRT };
  https.createServer(credentials, app).listen(PORT);
} else {
  http.createServer(app).listen(PORT);
}
