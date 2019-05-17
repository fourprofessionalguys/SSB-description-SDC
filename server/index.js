const express = require('express');
const bodyParser = require('body-parser');
const db = require('../database/index.js')

const app = express();
const PORT = 3003;

app.use(express.static(`${__dirname}/public`));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));

app.get('/descriptions', (req, res) => {
  db.getDescriptions((err, result) => {
    if(err) {
      console.error(err)
      res.sendStatus(400);
    } else {
      res.send(result);
    }
  })
});

app.listen(PORT, () => {
  console.log(`listening on port ${PORT}`);
});

