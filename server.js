const express = require('express');
const multer = require('multer');
const upload = multer({
  dest: 'assets/'
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
  
  console.log(req.files);
  
  let json = {
    'name': '',
    'size': ''
  };
  
  
  // json.name = req.file.originalname;
  // json.size = req.file.size;
  
  res.end(JSON.stringify(json, null, 3));
});

app.listen(port);