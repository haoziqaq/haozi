/**
 * Created by lenovo on 2016/12/21.
 */
(function (window) {
    window.util = window.util ||{};
    util.calender = function (selector,dateParam) {
        var container = document.querySelector(selector);
        var now = dateParam||new Date();
        var year = now.getFullYear();
        var month = now.getMonth()+1;
        (function appendToolbar() {
            var toolBar = document.createElement("div");
            var currentDate = document.createElement("span");
            toolBar.setAttribute("class","tool-bar");
            currentDate.innerText = year + "年" + month + "月";
            toolBar.appendChild(currentDate);
            container.appendChild(toolBar);
            var top = document.createElement("div");
            top.innerText = "<";
            var down = document.createElement("div");
            down.innerText = ">";
            top.setAttribute("class","top");
            down.setAttribute("class","down");
            toolBar.appendChild(top);
            toolBar.appendChild(down);
            function monthChange(flag) {
                if(flag){
                    //向下
                    var currMonth  = now.getMonth();
                    now.setMonth(currMonth+1);
                    container.innerHTML = "";
                    util.calender(selector,now);
                }
                else{
                    //向上
                  var currMonth  = now.getMonth();
                    now.setMonth(currMonth-1);
                    container.innerHTML = "";
                    util.calender(selector,now);
                }
            }
            top.addEventListener("click",function () {
                monthChange(0);
            });
            down.addEventListener("click",function () {
                monthChange(1);
            });

        })();
        var day = ["一","二","三","四","五","六","日"];


        (function fillDay() {
            var dayRow = document.createElement("div");
            for(var i=0;i<day.length;i++){
                var dayColumn = document.createElement("div");
                dayColumn.setAttribute("class","date-container");
                dayColumn.innerText = day[i];
                dayRow.appendChild(dayColumn);
            }
            container.appendChild(dayRow);
        })();
        (function fillDate() {
            var now = dateParam || new Date() ;
            var year = now.getFullYear();
            var month = now.getMonth()+1;
            var firstDate = new Date(year+"-"+month+"-1");
             var date=now.getDate();
            var firstDay=firstDate.getDay();
            var dateContainer = document.createElement("div");
            var dateTotal = 6*7;
            for(var i=0;i<dateTotal;i++){
                var dateEle = document.createElement("div");
                dateEle.setAttribute("class","date-container");
                var tempMonth = firstDate.getMonth();
                if(tempMonth + 1!=month){
                    dateEle.setAttribute("class","date-container next");
                }
                if(date==firstDate.getDate()){
                    dateEle.setAttribute("class","date-container next day");
                }

                if(i>firstDay-2){
                    dateEle.innerText = firstDate.getDate();
                    firstDate.setDate(firstDate.getDate()+1);
                }

                else{
                    var firstDate2 = new Date(year+"-"+month+"-1");
                    var nowDate = firstDate2.getDate();
                    firstDate2.setDate(nowDate-(firstDay-(i+1)));
                    dateEle.innerText = firstDate2.getDate();
                    dateEle.setAttribute("class","date-container next");
                }

                dateContainer.appendChild(dateEle);
            }
            container.appendChild(dateContainer);

        })();
    };
})(window);
