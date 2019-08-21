const express = require('express');
const path = require('path');

const app = express();
const staticFiles = path.join(__dirname, '/dist');
app.use(express.static(staticFiles));

app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname + '/dist/index.html'));
});

const port = process.env.PORT || 3000;

app.listen(port, () => console.log('App running on port ', port));
