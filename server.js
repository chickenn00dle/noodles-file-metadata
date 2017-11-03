const express = require('express');
const multer = require('multer');
const storage = multer.memoryStorage();
const upload = multer({
  storage: storage
})

const port = process.env.PORT;
const app = express();

app.use(express.static('public/'));

app.get('/', (req, res) => {
  res.sendFile(__dirname + '/views/index.html');
})

app.post('/metadata', upload.single('target'), (req, res) => {
  res.writeHead(200, {
    'Content-Type': 'application/javascript'
  });
  
  let json = {
    'filename': '',
    'size': '',
    'encoding': ''
  };
  
  
  json.filename = req.file.originalname;
  json.size = req.file.size + ' bytes';
  json.encoding = req.file.encoding;
  
  res.end(JSON.stringify(json, null, 3));
});

app.listen(port);