const express = require('express');
const multer = require('multer');
const port = process.env.PORT;

const app = express();

app.use(express.static('pulbic/'));

app.get('/', (req, res) => {
  res.sendFile(__dirname + '/views/index.html');
})

app.get('/metadata', (req, res) => {
  console.log('Metadata');
});

app.listen(port);