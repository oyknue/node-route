//connection module
//이 모듈을 추출해서 다른 문서에서 require: mysql_conn해서 사용가능

const mysql = require('mysql');
const conn = mysql.createConnection({
  host : 'localhost',  //host == my computer
  user : 'oyknue',
  password : '000000',
  database : 'oyknue'
});

module.exports = {
  mysql : mysql,
  conn, conn 
};

