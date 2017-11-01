const express = require('express');
const multer = require('multer');
const upload = multer()
const port = process.env.PORT;

const app = express();

app.use(express.static('public/'));

app.get('/', (req, res) => {
  res.sendFile(__dirname + '/views/index.html');
})

app.get('/metadata', upload.array(), (req, res) => {
  console.log(req);
});

app.listen(port);