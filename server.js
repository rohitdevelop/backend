require('dotenv').config();
const express = require('express');

const server = express();

server.get('/', (req, res) => {
  res.send('<h1>hello root </h1>');
});
server.get('/about', (req, res) => {
  res.send('<h1>hello about</h1>');
});
server.get('/contact', (req, res) => {
  res.send('<h1>hello contact </h1>');
});
server.get('/info', (req, res) => {
  res.send('<h1>hello info </h1>');
});

const port = 3000;

server.listen(process.env.PORT, () => {
  console.log(`hello set http://localhost:${port}`);
});
