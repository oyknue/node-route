//서버구축
const express = require('express');
const app = express();
const db = require('./mysql_conn'); //경로설정 중요 그냥 mysql_conn이렇게 쓰면 에러뜸..
const mysql = db.mysql;
const conn = db.conn; //db를 통하여 내가 만든 접속정보가 들어간다. (mysql_conn.js export)
conn.connect(); //conn이라는 접속정보를 connect해주세요.
app.listen(80, () => {
  console.log('connected at 3000 port! http://127.0.0.1:3000');
});

//라우팅

app.locals.pretty = true;
app.use(express.static("www"));//express안에 있는 static메소드로 www루트로 잡게함

app.set('view engine', 'pug'); //뷰엔진을 퍼그로 세팅해주세요
app.set('views', './views') //view폴더를./views로 지정해주세요

app.get("/book/:id", (req, res) => {
  var books = [
    {name:"변신", content:"눈을 떠보니.."},
    {name:"이방인", content:"아니, 어쩌면 어제"},
    {name:"멋진 신세계", content:"아. 이 멋진 인간들이여!"},
    {name:"1984", content:"전쟁은 평화,자유는 예속,무지는 힘"},
    {name:"노인과바다", content:"팔십사일 동안 그는 바다에 나가서.."}
  ];
  var id = req.params.id;
  var vals = {
    docTitle: '도서 검색 시스템입니다.',
    cssName: "book",
    jsName: "book",
    logoFile: "/img/logo.png",
    books,
    id
  };
  res.render('book', vals);
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

