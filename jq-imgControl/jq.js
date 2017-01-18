window.jQuery.fn.extend({
    controlContainer:function () {
        var isMouseEnter=false;
        $(".container").mouseenter(function (e) {
            isMouseEnter = true;
            $(".moveDiv").css("visibility","visible");
            $(".co-container").css("visibility","visible");
        });
        $(document).mousemove(function (e) {
            var o = $(".moveDiv");
            if(isMouseEnter){
                if(e.pageY-100<=$(".container").offset().top+300&&e.pageY>=$(".container").offset().top+100) {
                    o.offset({
                        top: e.pageY - 100
                    });
                }
                if(e.pageX-100<=$(".container").offset().left+300&&e.pageX>=$(".container").offset().left+100){
                    o.offset({
                        left:e.pageX-100
                    });
                }
                $(".co-container").css("background","url(QQ截图20170116092624.png)"+" "+ (-(o.offset().left-$(".container").offset().left)*2.5)+"px "+(-(o.offset().top-$(".container").offset().top)*2.5)+"px");
                $(".co-container").css("background-size","1250px 1250px");
            }
        });
        $(".container").mouseleave(function (e) {
            $(".moveDiv").css("visibility","hidden");
            $(".co-container").css("visibility","hidden");
        });
    }
});



