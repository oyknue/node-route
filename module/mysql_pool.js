//connection module
//이 모듈을 추출해서 다른 문서에서 require: mysql_conn해서 사용가능

const mysql = require('mysql');
const conn = mysql.createPool({
  connectionLimit : 10,
  host : 'localhost',  //host == my computer
  user : 'oyknue',
  password : '000000',
  database : 'oyknue'
});

module.exports = {
  mysql : mysql,
  conn, conn 
};

conn.on('connection', function (connection) {
  console.log('SET SESSION auto_increment_increment=1')
});

conn.on('enqueue', function () {
  console.log('Waiting for available connection slot');
});

module.exports = {
   mysql,
   conn
};