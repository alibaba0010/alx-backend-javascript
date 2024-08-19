/**
*Create a small HTTP server using Express
*@author Zakariyah Ali <https://github.com/alibaba0010>
*/

const express = require('express');

const app = express();

app.get('/', (req, res) => {
  res.send('Hello Holberton School!');
});

app.listen(1245);
module.exports = app;
