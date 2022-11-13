const express = require("express");
const mysql = require('mysql');

const app = express();
const port = 5000

const con = mysql.createConnection({
    host:'localhost',
    database : 'doit',
    user:'root',
    password:'0000'
})

con.connect(function(err){
    if(err) throw err;
    console.log('connect');
})

app.get('/', function (req,res) {
  res.sendFile(path + "index.html");
});

app.listen(port, () => {
  console.log(`Server is running on port ${port}.`);
});