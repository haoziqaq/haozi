/**
 * Created by lenovo on 2016/12/26.
 */
var express = require("express");
var app = express();
app.use("/",express.static(__dirname));
var router = express.Router();
router.get("/menu/list",function (req,res) {
    var dataSource = {
        data:[
            {
                id:0,
                title:"用户信息"

            },
            {
                id:1,
                title:"打卡记录"
            }
        ],
        flag:1,
        msg:"成功!"
    };
    res.json(dataSource);
});

app.use("/",router);
var port = 8888;
app.listen(port);
console.log("server is listening"+port);
