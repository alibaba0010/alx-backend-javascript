/**
*Create a small HTTP server using Express
*@author Oyedele Bolaji <https://github.com/Bolaji582>
*/

const express = require('express');

const app = express();

app.get('/', (req, res) => {
  res.send('Hello Holberton School!');
});

app.listen(1245);
module.exports = app;
