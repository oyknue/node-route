//익스프레스 모듈 참조
const express = require("express"); 
//함수 실행 (Express 실행)
const app = express();
//console.log() 참조
const log = console.log;
const port = 3000;

//서버구동
app.listen(port, function(){
  log('Connected 3000 port');
});

//셋팅
app.locals.pretty = true;  //클라이언트가 response로 전달받은 결과태그를 정리해준다 
//remote는 클라이언트 local은 서버

//router 구현
app.use(express.static('public')); //static 요청 처리
app.get('/get_test', (req, res)=>{
  res.send("<h1>hello world</h1>")
});
app.get("/score_save", (req, res) =>{
  var userName = req.query.uname;
  var kor = req.query.kor;
  res.send(`클라이언트가 전달해준 변수는 ${userName} / ${kor} 입니다`);
});
app.post("/score_save", (req, res)=>{
  res.send(`post 요청`);
});

app.get('/page', (req, res) => {
	var param = req.query.page;
	var now = param - 1;
	var books = [
		{title: "별주부전", cont: "용왕이 나의 간을 노리고..."},
		{title: "홍길동전", cont: "아버지를 아버지라..."},
		{title: "구운몽전", cont: "한여름밤에 꿈을 꿨는데..."},
		{title: "춘향전", cont: "변사또 이놈이..."}
	];
	var html = `
	<!DOCTYPE html>
	<html lang="ko">
	<head>
		<meta charset="UTF-8">
		<meta name="viewport" content="width=device-width, initial-scale=1.0">
		<meta http-equiv="X-UA-Compatible" content="ie=edge">
		<title>도서목록</title>
		<link rel="stylesheet" href="/css/fa.min.css">
		<link rel="stylesheet" href="/css/animate.css">
		<link rel="stylesheet" href="/css/bootstrap.min.css">
		<link rel="stylesheet" href="/css/base.css">
		<link rel="stylesheet" href="/css/book.css">
		<script src="/js/jquery-3.3.1.min.js"></script>
		<script src="/js/bootstrap.min.js"></script>
		<script src="/js/anime.min.js"></script>
		<script src="/js/wow.min.js"></script>
		<script src="/js/util.js"></script>
	</head>
	<body>
		<div class="container">
			<div class="jumbotron">
				<h2>도서목록</h2>
			</div>
			<ul class="navis">`;
	for(var i in books) {	
		if(now == i) html += `<li class="navi navi_sel" onclick="loc(${(Number(i)+1)});">${books[i].title}</li>`;
		else html += `<li class="navi" onclick="loc(${(Number(i)+1)});">${books[i].title}</li>`;
	}
	html+= `</ul>`;
	if(now >= 0 && now <= 3) html+= `<div class="conts pa bor-a radius mt"><h5>${books[now].cont}</h5></div>`;
	html+= `</div>
		<script src="/js/book.js"></script>
	</body>
	</html>`;
	res.send(html);
});

app.get('/test', (req, res)=>{
  var title = '테스트 페이지';
  var greeting = "안녕안녕~";
  var books = [
		{title: "별주부전", cont: "용왕이 나의 간을 노리고..."},
		{title: "홍길동전", cont: "아버지를 아버지라..."},
		{title: "구운몽전", cont: "한여름밤에 꿈을 꿨는데..."},
		{title: "춘향전", cont: "변사또 이놈이..."}
  ];
  log(books[2].cont);
  var html = `<!DOCTYPE html>
  <html>
  <head>
    <meta charset="UTF-8">
		<meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <link rel="stylesheet" href="/css/fa.min.css">
		<link rel="stylesheet" href="/css/animate.css">
		<link rel="stylesheet" href="/css/bootstrap.min.css">
		<link rel="stylesheet" href="/css/base.css">
    <title>${title}</title>
  </head>
  <body>
  <div class="container mt">
    <div class="jumbotron">
      <h2>${greeting}</h2>
    </div>
  </div>
  <script>console.log("${books[2].cont}")</script>
  </body>
  </html>`;
  res.send(html);
});