//서버구축
const express = require('express');
const app = express();
app.listen(80, () => {
  console.log('connected at 3000 port! http://127.0.0.1:80');
});

//라우팅

app.locals.pretty = true;
app.use(express.static("www"));//express안에 있는 static메소드로 www루트로 잡게함

app.set('view engine', 'pug');
app.set('views', './views')

app.get("/book/:id", (req, res) => {
  var books = [
    "카프카","헤밍웨이","조지오웰","하루키","헤르만헤세"
  ];
  var id = req.params.id;
  var vals = {
    books,
    id,
  };
  res.render('sample', vals);
});


/*
app.get("/book", (req, res) => {
  var book = [
    "카프카","헤밍웨이","조지오웰","하루키","헤르만헤세"
  ];
  var loc = [
    "1","2","3","4","5"
  ];
  var id = req.query.id;
  var floor = req.query.floor;
  res.send(`
  <h1>도서관에 오신 것을 환영합니다.</h1>
  <h3>당신이 요청하신 책은 ${book[id]}입니다.</h3>
  <h3></h3>${book[id]}의 위치는 ${loc[floor]}층 입니다.</h3>
  `);
});
*/