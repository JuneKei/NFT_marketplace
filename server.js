var express= require('express');

var app = express();
// 경로 설정
var path = require('path');

//서버 포트 인식
app.listen(3000,function(){
    console.log("서버 오픈")
})

// html,css,js,img 폴더 잡아주기
app.use(express.static(path.join(__dirname+"")));

//루트 경로 올때 함수 실행
app.get('/',function(req,res){
    //res.send("<h1>폴더 주소 확인 : </h1>"+__dirname)
    res.sendFile(__dirname + "/front/public/index.html")
})