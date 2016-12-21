
var carousel = document.getElementById('carousel');
var isMouseDown = false;
var mouseDownX;
var mouseUpX;

carousel.addEventListener("mousedown",function(e){
    e.preventDefault();
    isMouseDown = true;
    mouseDownX = e.pageX;
    carousel.style.transition = "none";
});
carousel.addEventListener("mouseup",function(e){
    carousel.style.transition = "left 0.5s";
    isMouseDown = false;
    mouseUpX = e.pageX;
    var subMouseX = mouseUpX - mouseDownX;
    var delta = Math.abs(subMouseX);
    if(delta>200){
        if(mouseDownX<mouseUpX){
            //向右拖动
            if(i>0){
                i--;
                carousel.style.left = -i*gallary.offsetWidth + "px";
                for(var ii=0;ii<points.length;ii++){
                    points[ii].style.backgroundColor = "white";
                }
                points[i].style.backgroundColor = "red";
            }
        }else{
            //向左拖动
            i++;
            carousel.style.left = -i*gallary.offsetWidth + "px";
            for(var ii=0;ii<points.length;ii++){
                points[ii].style.backgroundColor = "white";
            }
            points[i].style.backgroundColor = "red";
        }
    }else{
        carousel.style.left = -i*gallary.offsetWidth + "px";
    }
});
var preMouseX;
carousel.addEventListener("mousemove",function(e){
    var mouseX = e.pageX;
    var subX = mouseX - preMouseX;
    // var mouseY = e.pageY;
    if(isMouseDown) {
        if(carousel.offsetLeft + subX<0){
            carousel.style.left = (carousel.offsetLeft + subX) + "px";
        }
    }else{
    }
    preMouseX = mouseX;
});
carousel.style.left=0;
var i=0;
var timeoutInterval;
var points = document.querySelectorAll(".gallary-targgles>div");
function runCarousel(){
    // var gallary = document.getElementsByClassName("gallary");
    // gallary = gallary[0];
    var gWidth  = gallary.clientWidth;
    var poiLeft = carousel.style.left;
    var left = poiLeft.substring(0,poiLeft.length-2);
    left = Number(left);
    left = left-gWidth;
    for(var ii=0;ii<points.length;ii++){
        points[ii].style.backgroundColor = "white";
    }
    carousel.style.left = left + "px";
    i++;
    if(i>3){
        carousel.style.left = "0px";
        i=0;
    }
    points[i].style.backgroundColor = "red";
    timeoutInterval = setTimeout(runCarousel,1000);
}
points[i].style.backgroundColor = "red";
timeoutInterval = setTimeout(runCarousel,1000);

var gallary = document.querySelector(".gallary");
gallary.addEventListener("mouseenter",function(){
    clearTimeout(timeoutInterval);
});
gallary.addEventListener("mouseleave",function(){
    runCarousel();
});
