-- create, insert
INSERT INTO book 
(title, author, price, isbn, sdate, wdate, cnt, sellcnt, img, summary) 
values
('변신', '프란츠 카프카', 18000, '09-2345-3456', '1850-01-01', '2019-05-17 11:18:05', 20, 0, '/upload/cover/1905/kafka.jpg', '어느날 아침 눈을 뜬 그레고르는');

INSERT INTO book SET 
title = '변신',
author = '프란츠 카프카',
price = 18000,
isbn = '09-2345-3456',
sdate = '1850-01-01',
wdate = '2019-05-17 11:18:05',
cnt = 20,
sellcnt = 0,
img = '/upload/cover/1905/kafka.jpg',
summary = '어느날 아침 눈을 뜬 그레고르는';

--update, update
--update와 delete는 꼭!!!!반드시!!!!!!where가 존재해야 한다. 그러지 않으면 모든 데이터가 한방에 날아간다. 
UPDATE book SET cnt = 9, sellcnt = 1 WHERE id =1;
UPDATE book SET title = '멋진신세계', author = '올더스 헉슬리', summary = '아, 이 멋진 인간들이여!' WHERE id = 2;
UPDATE book SET title = '1984', author = '조지 오웰', summary = '전쟁은 평화,자유는 예속,무지는 힘' WHERE id = 3;

--delete, delete 
DELETE FROM book WHERE id = 1;

--Read, select
SELECT * FROM book;
SELECT * FROM book ORDER BY id ASC; --ID를 기준으로 오름차순 정렬
SELECT * FROM book ORDER BY id DESC; --ID를 기준으로 내림차순 정렬
SELECT * FROM book ORDER BY title ASC; --title를 기준으로 오름차순 정렬
SELECT id, title, author FROM book ORDER BY title ASC;

SELECT * FROM book WHERE id = 3; --특정한 id값을 가져오기(ID가 3번인 목록) 
SELECT * FROM book WHERE id >= 5 ORDER BY id ASC; --특정한 id값보다 큰 목록을 가져오기 


SELECT * FROM book WHERE title = '변신' --TITLE이 변신인 목록(==데이터) 
SELECT * FROM book WHERE title LIKE '%카%' ORDER BY id ASC; --카 라는 글자가 반드시 포함된 데이터
SELECT * FROM book WHERE title LIKE '카%' --앞에 무조건 카로 시작하고 뒤는 상관없어
SELECT * FROM book WHERE title LIKE '%카' --맨 뒷글자가 반드시 카로 끝나야해
SELECT * FROM book WHERE title LIKE '%카' OR author LIKE '%변%'--타이틀은 카로 시작하거나 작가는 변이 포함되어야 해 

--LIMIT 처음 데이터, 가져올 레코드 수
SELECT * FROM book WHERE wdate > '1850-01-01' ORDER BY wdate ASC LIMIT 0, 10 --wdate가 1850년보다 큰 데이터를/asc순으로 정렬/ 처음 데이터부터 열개까지



INSERT INTO SET title='별주부전', author='거북이', price='20000', isbn='12-3456-7890', sdate='2019-05-21', wdate='2019-05-21 09:11:11', cnt=0, sellcnt=0, summary='거북이가 용왕을...', img=''
`