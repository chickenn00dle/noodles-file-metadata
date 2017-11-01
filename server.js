const express = require('express');
const multer = require('multer');
const upload = multer()
const port = process.env.PORT;

const app = express();

app.use(express.static('public/'));

app.get('/', (req, res) => {
  res.sendFile(__dirname + '/views/index.html');
})

app.get('/metadata', upload.single('target'), (req, res) => {
  res.writeHead(200, {
    'Content-Type': 'application/javascript'
  });
  
  console.log(req.target);
  
  let json = {
    'name': '',
    'size': ''
  };
  
  json.size = req.file;
  
  res.end(JSON.stringify(json, null, 3));
});

app.listen(port);