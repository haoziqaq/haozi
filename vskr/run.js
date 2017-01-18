/**
 * Created by forli on 2016/12/27.
 */
var express = require('express');
var app=express();
var ejs = require("ejs");
var bodyParser = require('body-parser');
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use("/",express.static(__dirname));
var port = 8888;
var router = express.Router();
var login = express.Router();
var register = express.Router();
var chat  = express.Router();
var base =[];
router.get("/home",function (req,res) {
    var result = [];
    function MainMenu() {
        this.title = "";
        this.icon = "";
        this.bgColor = "";
    }
    var student = new MainMenu();
    student.title = "学员日常";
    student.bgColor = "#B61705";
    student.icon = "\e008";
    student.enName = "student";
    result.push(student);
    
     result.push({
        title:"打卡记录",
        enName:"student1"
    });
    result.push({
        title:"请假申请",
        enName:"student2"
    });
    result.push({
        title:"登录",
        enName:"student3"
    });
    result.push({
        title:"课堂表现",
        enName:"student4"
    });
    result.push({
        title:"学员群",
        enName:"student5"
    });
    result.push({
        title:"作业",
        enName:"student6"
    });
    result.push({
        title:"源代码",
        enName:"student7"
    });
    result.push({
        title:"课程管理",
        enName:"student8"
    });
    result.push({
        title:"老师备课",
        enName:"student9"
    });
    result.push({
        title:"移动端",
        enName:"student10"
    });
    result.push({
        title:"站内消息",
        enName:"student11"
    });
    result.push({
        title:"设置(vibr)",
        enName:"student12"
    });
    result.push({
        title:"注册(vedio)",
        enName:"student13"
    });
    result.push({
        title:"分组(audio)",
        enName:"student14"
    });
    result.push({
        title:"集体活动(pic)",
        enName:"student15"
    });
    app.engine('.html',ejs.__express);
    // var data =[];
    // for(var i=0;i<result.length;i++){
    //     data.push(result[i].enName);
    // }
    if(req.query.ajax){
        res.json(result);
    }
    else{
        res.render("index.html",{result:result});
    }



    
});
login.post("/loginData",function (req,res) {
         var result = req.body;
    if(base.length==0){
        res.json({flag:false,meg:"没有用户注册"});
    }
    else {
        for (var i = 0, j = 1; i < base.length; i = i + 2, j = j + 2) {
            if (base[i] == result.userName) {
                if (base[j] == result.password) {
                    var expireDate = new Date();
                    var expireDays = -1;
                    expireDate.setTime(expireDate.getTime() + expireDays * 24 * 3600 * 1000);
                    expireDate = expireDate.toGMTString();
                    res.writeHead(200, {
                        'Set-Cookie': 'auth=swvg-klsf-abcd-wkje-12450;nickname=cup;expireDate=' + expireDate,
                        'Content-type': 'text/plain;charset=utf-8'
                    });
                    res.end(JSON.stringify({flag: true, meg: "登录成功"}));
                }
                else {
                    res.json({flag: false, meg: "密码错误"});
                }
            }

            else {
                if(j==base.length-1){
                    res.json({flag: false, meg: "此用户名不存在"});
                    break;
                }
               continue;
            }
        }
    }

    });
register.post("/registerData",function (req,res) {
    var result = req.body;
    if(result.userName!=""&&result.userName==result.confirmUserName &&result.password==result.confirmPassword){
        result.userName.key = 0;
        result.password.key =0;
        base.push(result.userName);
        base.push(result.password);
        var expireDate = new Date();
        var expireDays =10;
        expireDate.setTime(expireDate.getTime() + expireDays * 24 * 3600 *1000);
        expireDate =expireDate.toGMTString();
        res.writeHead(200,{
            'Set-Cookie':'auth:123-123-123-123-123;nickname=register;expireDate='+expireDate,
            'Content-type':'text/plain;charset=utf-8'
        });
        res.end(JSON.stringify({flag:true,meg:"注册成功"}));
    }
    else{
        res.json({flag:false,meg:"注册失败"});
    }
});
chat.get('/chat',function (req,res) {
    exports.chat = exports.chat||{};
    exports.send =exports.send||{};
    var logined;
    var sendText;
    if(req.query.username){
        logined = req.query.username;
        exports.chat[logined] = exports.chat[logined]||{};
        exports.chat[logined].res =res;
        exports.chat[logined].req = req;
        exports.chat[logined].req.on("close",function () {
            delete exports.chat[logined] ;
        });

        res.writeHead(200,{
            "Content-Type":"text/event-stream",
            "Cache-Control":"no-cache",
            "Connection":"keep-alive"
        });
    }
    if(req.query.getAllUser){
        var users = [];
        for(var u1 in exports.chat){
            if(exports.chat.hasOwnProperty(u1)){
                users.push(u1);
            }
        }
        res.json(users);
    }
    if(req.query.chatUsername) {
        sendText = req.query.chatContent;

        exports.chat[req.query.to].res.write("data:" + JSON.stringify(req.query.userName+":"+sendText) + "\n\n");

        res.json({});
    }
    // if(req.query.chatUsername) {
    //     sendText = req.query.chatContent;
    //
    //     exports.chat[req.query.to].res.write("data:" + JSON.stringify(req.query.userName+":"+sendText) + "\n\n");
    //
    //     res.json({});
    // }
});
app.use("/",chat);
app.use("/",router);
app.use("/",login);
app.use("/",register);
app.listen(port);
console.log("is running on "+port);
