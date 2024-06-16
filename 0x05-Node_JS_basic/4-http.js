/**
*Create a small HTTP server using Node's HTTP module
*@author Oyedele Bolaji <https://github.com/Bolaji582>
*/

const http = require('http');

const app = http.createServer((req, res) => {
  res.statusCode = 200;
  res.setHeader('Content-Type', 'text/plain');
  res.end('Hello Holberton School!');
});

app.listen(1245);

module.exports = app;
