var express= require('express');
var app = express();

app.listen(3000,function(){
    console.log("서버 오픈")
})

app.get('/',function(req,res){
    //res.send("<h1>폴더 주소 확인 : </h1>"+__dirname)
    res.sendFile(__dirname + "/front/public/index.html")
})