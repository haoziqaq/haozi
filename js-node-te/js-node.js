/**
 * Created by lenovo on 2016/12/26.
 */
var http = require("http");
var url = require("url");
var express = require("express");
var app = express();
app.use("/",express.static(_dirname));
var port = 8888;
app.listen(port);
console.log("server is listening"+port);
// console.log("Hello World");
// var server = http.createServer(function (req,res){
//           var pathname = url.parse(req.url).pathname;
//          if(pathname.indexOf("about")>-1){
//
//              // res.writeHead(200,{"Content-Type":"text/plain"});
//              res.writeHead(503,{"Content-Type":"text/plain"});
//
//              res.write("Hello About!");
//              res.end();
//              return;
//          }
//         res.writeHead(200,{"Content-Type":"text/plain"});
//         res.write("Hello World");
//         res.end();
// });
// var port = 8888;
// server.listen(port);
// console.log("server running on"+port);
