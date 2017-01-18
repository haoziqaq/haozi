/**
 * Created by lenovo on 2016/12/26.
 */
var express = require("express");
var app = express();
var solve = require("./server/solve.js");
app.use("/",express.static(__dirname));
var router = express.Router();
router.post("/menu/list",function (req,res) {
    req.addListener("data",function (data) {
        var dataR = decodeURIComponent(data);
        var result=solve.solve(dataR);
        res.json(result);
    });

});
app.use("/",router);
var port = 1234;
app.listen(port);


