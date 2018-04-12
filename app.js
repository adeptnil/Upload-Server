const express = require('express');
const multer = require('multer');
const upload = multer({ dest: 'public/' })
const port = 3000;
const app = express();

const uploaded_files = [];

app.use(express.static('public'));

app.post('/upload', upload.single('myFile'), function (req, res, next) {
  // req.file is the `myFile` file
  // req.body will hold the text fields, if there were any
  console.log("Uploaded: " + req.file.filename);
  uploaded_files.push(req.file.filename);
  res.end("Uploaded file!");
});


app.listen(port);




// const express = require('express');
// const path = require('path');
// const os = require('os');
// const fs = require('fs');
// const bodyParser = require('body-parser');
// const Busboy = require('busboy');

// const port = 3000;
// const app = express();

// app.use(bodyParser.urlencoded({ extended: false }));
// app.use(express.static(path.join(__dirname, 'public')));

// app.post('/upload', function (req, res) {
//     const busboy = new Busboy({ headers: req.headers });
//     busboy.on('file', function(fieldname, file, filename, encoding, mimetype) {
//         var location = path.join('./public/', path.basename(filename));
//         file.pipe(fs.createWriteStream(location));
//       });
//       busboy.on('finish', function() {
//         res.writeHead(200, { 'Connection': 'close' });
//         res.end("Uploaded file!");
//       });
//       //Parse HTTP-POST upload
//       return req.pipe(busboy);
//     }); 

// app.listen(port);