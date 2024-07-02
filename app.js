const express = require('express');
const app = express();
const path = require('path');
const port = 3000

app.get('/', (req, res) => {
  //res.send('Hello sejong15')
  res.sendFile(path.join(__dirname,'/hello.html'));
})

app.listen(port, () => {
  console.log(`app listening on port ${port}`)
})