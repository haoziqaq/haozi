/**
 * Created by lenovo on 2016/12/22.
 */
(function (window) {
    window.util = window.util || {};
    util.container = function (selector) {
        var container = document.querySelector(selector);
        var flag=0;
        var isChoice=0;
        var containerMouseX;
        var containerMouseY;
        var child=container.children;
        container.addEventListener("click",function (e) {
            isChoice=1;
            e.stopPropagation();
            container.style.border="2px solid rgba(0,0,0,1)";
            e.preventDefault();

                child[0].setAttribute("class","inner0 cl");
                child[1].setAttribute("class","inner1 cl");
                child[2].setAttribute("class","inner2 cl");
                child[3].setAttribute("class","inner3 cl");
                child[4].setAttribute("class","inner4 cl");
                child[5].setAttribute("class","inner5 cl");
                child[6].setAttribute("class","inner6 cl");
                child[7].setAttribute("class","inner7 cl");
        });
        document.addEventListener("click",function (e) {
           isChoice=0;
            container.style.border="2px solid rgba(0,0,0,0)";
            e.preventDefault();
            for(var i=0;i<8;i++){
                child[i].setAttribute("class","");
            }
        });
        container.addEventListener("mousedown",function (e) {
            if(isChoice){
             flag=1;
             containerMouseX=e.pageX-container.offsetLeft;
             containerMouseY=e.pageY-container.offsetTop;
             e.preventDefault();
            }

        });
       container.addEventListener("mousemove",function (e) {
            if(flag){
               var mouseX = e.pageX - containerMouseX;
                var mouseY = e.pageY - containerMouseY;
                container.style.left = mouseX+"px";
                container.style.top = mouseY+"px";
            }
        });
        container.addEventListener("mouseup",function (e) {
            flag=0;
        });
        (function add() {
            var i;
            var j;
            var isMouseDown=0; //0为没按下
                var preMouseX;
                var preMouseY;
                var preWidth;
                var preHeight;
                var preLeft;
                var preTop;
                child[7].addEventListener("mousedown",function (e) {
                    isMouseDown=1;

                    e.preventDefault();
                     preMouseX = e.pageX;
                     preMouseY = e.pageY;
                     preWidth = container.clientWidth;
                     preHeight = container.clientHeight;
                    e.stopPropagation();
                    child[7].addEventListener("mousemove",function (e) {
                        e.stopPropagation();
                        if(isMouseDown){
                            var addX = e.pageX - preMouseX;
                            var addY = e.pageY - preMouseY;
                            container.style.width = preWidth+addX+"px";
                            container.style.height = preHeight+addY+"px";
                        }
                    });


                });
                child[6].addEventListener("mousedown",function (e) {

                    isMouseDown=1;
                    if(isMouseDown){
                e.preventDefault();
                preMouseX = e.pageX;
                preMouseY = e.pageY;
                preWidth = container.clientWidth;
                preHeight = container.clientHeight;
                e.stopPropagation();
                child[6].addEventListener("mousemove",function (e) {
                    e.stopPropagation();
                    if(isMouseDown==1){


                        var addY = e.pageY - preMouseY;
                        container.style.height = preHeight+addY+"px";

                    }
                });

                    }
            });
                child[5].addEventListener("mousedown",function (e) {
                    e.stopPropagation();
                isMouseDown=1;
                e.preventDefault();
                preMouseX = e.pageX;
                preMouseY = e.pageY;
                preWidth = container.clientWidth;
                preHeight = container.clientHeight;
                preLeft = container.offsetLeft;
               child[5].addEventListener("mousemove",function (e) {

                    if(isMouseDown){
                        var addY = e.pageY - preMouseY;
                        container.style.height = preHeight+addY+"px";
                        var addX = preMouseX - e.pageX;
                        container.style.width = preWidth+addX+"px";
                        container.style.left= preLeft-addX+"px";

                    }
                });

            });
            child[4].addEventListener("mousedown",function (e) {
                e.stopPropagation();
                isMouseDown=1;
                e.preventDefault();
                preMouseX = e.pageX;
                preMouseY = e.pageY;
                preWidth = container.clientWidth;
                preHeight = container.clientHeight;
                preLeft = container.offsetLeft;
                child[4].addEventListener("mousemove",function (e) {

                    if(isMouseDown){
                        var addX = e.pageX -preMouseX ;
                        container.style.width = preWidth+addX+"px";

                    }
                });

            });
            child[3].addEventListener("mousedown",function (e) {
                e.stopPropagation();
                isMouseDown=1;
                e.preventDefault();
                preMouseX = e.pageX;
                preMouseY = e.pageY;
                preWidth = container.clientWidth;
                preHeight = container.clientHeight;
                preLeft = container.offsetLeft;
                child[3].addEventListener("mousemove",function (e) {

                    if(isMouseDown){
                        var addX = preMouseX - e.pageX;
                        container.style.width = preWidth+addX+"px";
                        container.style.left= preLeft-addX+"px";

                    }
                });

            });
            child[2].addEventListener("mousedown",function (e) {
                e.stopPropagation();
                isMouseDown=1;
                e.preventDefault();
                preMouseX = e.pageX;
                preMouseY = e.pageY;
                preWidth = container.clientWidth;
                preHeight = container.clientHeight;
                preLeft = container.offsetLeft;
                preTop = container.offsetTop;
                child[2].addEventListener("mousemove",function (e) {

                    if(isMouseDown){
                        var addY = preMouseY-e.pageY  ;
                        container.style.height = preHeight+addY+"px";
                        var addX =   e.pageX-preMouseX;
                        container.style.width = preWidth+addX+"px";
                        container.style.top= preTop-addY+"px";

                    }
                });

            });
            child[1].addEventListener("mousedown",function (e) {
                e.stopPropagation();
                isMouseDown=1;
                e.preventDefault();
                preMouseX = e.pageX;
                preMouseY = e.pageY;
                preWidth = container.clientWidth;
                preHeight = container.clientHeight;
                preLeft = container.offsetLeft;
                preTop =container.offsetTop;
                child[1].addEventListener("mousemove",function (e) {

                    if(isMouseDown){
                        var addY = preMouseY-e.pageY ;
                        container.style.height = preHeight+addY+"px";
                        container.style.top= preTop-addY+"px";

                    }
                });

            });
            child[0].addEventListener("mousedown",function (e) {
                e.stopPropagation();
                isMouseDown=1;
                e.preventDefault();
                preMouseX = e.pageX;
                preMouseY = e.pageY;
                preWidth = container.clientWidth;
                preHeight = container.clientHeight;
                preLeft = container.offsetLeft;
                preTop =container.offsetTop;
                child[0].addEventListener("mousemove",function (e) {

                    if(isMouseDown){
                        var addY = preMouseY-e.pageY ;
                        container.style.height = preHeight+addY+"px";
                        var addX = preMouseX - e.pageX;
                        container.style.width = preWidth+addX+"px";
                        container.style.left= preLeft-addX+"px";
                        container.style.top = preTop-addY+"px";

                    }
                });

            });


            document.addEventListener("mouseup",function (e) {
                isMouseDown=0;
            })
        })();


    }
})(window);