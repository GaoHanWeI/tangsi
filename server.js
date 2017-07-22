var express = require('express')
var app = express()
var fs = require('fs');
var bodyParser = require('body-parser');//中间件
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

var db = require("./db.js");
app.all('*', function(req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "X-Requested-With");
    res.header("Access-Control-Allow-Methods","PUT,POST,GET,DELETE,OPTIONS");
    res.header("X-Powered-By",' 3.2.1');
    res.header("Content-Type", "application/json;charset=utf-8");
    next();
});







app.get("/",function(req,res){
     fs.readFile("static/data.json",function(err,data){
         	if(err){
       		console.log(err)
       	}else{      		
       		res.send(data)
       	}
     })

})


app.get("/select",function(req,res){
     db.myquery('select * from user', function (err, rows) {
        if (err) {
            console.log(err)
            console.log("!!!")
        } else {
            res.send(rows)
        }
    })
})


app.get("/shop",function(req,res){
     db.myquery('select * from shopping', function (err, rows) {
        if (err) {
            console.log(err)
        } else {
            res.send(rows)
        }
    })
})


app.get("/shopjia",function(req,res){
      let num=req.query.num
      let tel=req.query.tel
      let id=req.query.id                                                 
     db.myquery("UPDATE shopping SET num="+num+" WHERE tel="+tel+" AND  id='"+id+"'", function (err, rows) {
        if (err) {
            console.log(err)
        } else {
            res.send(rows)

        }
    })
})


app.listen(4444,function(){
    console.log("!11")
})
