const express = require('express');
const app = express();
const path = require('path');
const port = 3000;
app.use(express.static('public'));
app.set("views",path.join(__dirname, "/views"));

app.set("view engine","ejs");

//app.use(express.static(`${__dirname}/src//public`));

//라우팅
app.get('/', (req, res) => {
  //res.send('Hello sejong15')
  res.render('home/youlookblue.ejs')
})

app.get('/hello', (req, res) => {
  //res.send('Hello sejong15')
  res.render('home/hello.ejs')
})

app.get('/hello/to-go',(req,res)=>{
  res.render('home/hey.ejs')
})

//서버가동
app.listen(port, () => {
  console.log(`app listening on port ${port}`)
})