const express = require('express');
const bodyParser = require('body-parser');
const path = require('path');
const db = require('../database/index.js');

const app = express();
const PORT = 3003;

app.use(express.static(path.join(__dirname, '../public/dist')));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.get('/descriptions', (req, res) => {
  db.getDescriptions((err, result) => {
    if (err) {
      console.error(err);
      res.sendStatus(400);
    } else {
      res.send(result);
    }
  });
});

// app.get('/', (req, res) => {
//   res.sendStatus(200);
// });

app.listen(PORT, (err) => {
  if (err) console.log(err);
  console.log(`listening on port ${PORT}`);
});
