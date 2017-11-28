const express = require('express');
const path = require('path');

const app = express();
const HOST = process.env.HOST || 'http://localhost';
const PORT = process.env.PORT || 8030;

app.use(express.static(path.join(__dirname, '..', 'public')));

app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, '..', 'public', 'index.html'));
});

app.listen((HOST, PORT), () => {
  console.log(`app listening on - ${HOST}:${PORT}`); // eslint-disable-line no-console
});
