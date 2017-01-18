/**
 * Created by lenovo on 2016/12/29.
 */
var mainMenu =document.querySelector(".main-menu");
function ajaxfn(url,method,option,callback) {
    var ajax =null;
    if(window.XMLHttpRequest){
        ajax = new XMLHttpRequest();
    }
    else if(window.ActiveXObject){
        ajax = new ActiveXObject("Microsoft.XMLHTTP");
    }
    if(ajax){
    ajax.onreadystatechange=function () {
        switch(ajax.readyState){
            case 4:
                var result ={};
                if(ajax.status==200){
                    result.content = ajax.responseText;
                }
                callback(result);
                break;
            case 3:
                break;
            case 2:
                break;
            case 1:
                break;

        }

    };
        ajax.open(method ? method:"get",url,true);
        ajax.send(option);
    }
}
ajaxfn("/home?ajax=true","get",null,function (flag) {
    var dataBack = JSON.parse(flag.content);                        
    var mainMenuDiv = mainMenu.children;
    for(var i=0;i<dataBack.length;i++){
        var htmldiv= '<div class="'+dataBack[i].enName+'">'
        +'<span class="icon"></span>'
            +'<span class="title">'+dataBack[i].title+'</span>'
            +'</div>';
             mainMenu.innerHTML+=htmldiv;
    }
    var login =document.querySelector(".student3");
    login.addEventListener("click",function () {
        loginClick.style.visibility="visible";
    });
    var register =document.querySelector(".student13");
    register.addEventListener("click",function () {
        registerClick.style.visibility="visible";
    });
    var message = document.querySelector(".student11");
    message.addEventListener("click",function () {
        messageClick.style.visibility="visible";
    });
});
var loginCancel =document.querySelector("#loginCancel");
loginCancel.addEventListener("click",function () {
    loginClick.style.visibility="hidden";
});
var loginClick = document.querySelector(".login-click");
var loginClose = document.querySelector(".loginClose");
loginClose.addEventListener("click",function () {
    loginClick.style.visibility="hidden";
});
var registerCancel =document.querySelector("#registerCancel");
registerCancel.addEventListener("click",function () {
    registerClick.style.visibility="hidden";
});
var registerClick = document.querySelector(".register-click");
var registerClose = document.querySelector(".registerClose");
registerClose.addEventListener("click",function () {
    registerClick.style.visibility="hidden";
});
var messageClick = document.querySelector(".message-click");
var messageClose = document.querySelector(".messageClose");
messageClose.addEventListener("click",function () {
    messageClick.style.visibility="hidden";
});
function getUserprofile() {
    var cookies = document.cookie;
}
getUserprofile();
var userInput = document.getElementById("userInput");
var button = document.getElementById("connect");
var member = document.getElementById("member");
var memberContainer = document.querySelector(".member-container");
var create = document.querySelector(".create");
var htmlUserInput = document.getElementsByClassName("userInput");
var flag=0;
var Ato={};
var toWho=[];
var isMouseDown=false;
var messageSave={};
var currentM;

function connect(userName) {
    source = new EventSource("/chat?username="+userName);
    alert("连接成功");
    source.addEventListener("open",function (event) {
            button.onclick = function () {
                userName = userInput.value;
                // connect(userName);
            }

    });
    source.addEventListener("message",function (event) {
            var chatContent = document.getElementsByClassName("chatContent");
            var data = JSON.parse(event.data);
            var user = data.split(":");
            for(var i=0;i<chatContent.length;i++){
                if(chatContent[i].previousSibling.previousSibling.children[0].textContent==user[0]){
                    chatContent[i].innerHTML +='<div class="textDiv">'+'<img src="images/image.png" style="float:right;">'+'<span style="width:auto">'+":"+user[0]+'</span>'+'<span>'+user[1]+'</span>'+'</div>';
                    chatContent[i].scrollTop=chatContent[i].scrollHeight;
                    flag=1;
                }
            }

        if(flag==0){
            if(!messageSave[user[0]]){
            messageSave[user[0]]=[];
            }
            messageSave[user[0]].push(user[1]);
        }
        flag=0;
    },false);
}
if(!!window.EventSource){
    button.onclick = function () {
        userName = userInput.value;
        if(userName !=""){
            connect(userName);
            htmlUserInput[0].innerHTML='<label>'+"已连接,你的昵称是:"+userName+'</label>';
            button.style.top=-10000+"px";
        }
        else{
            alert("用户名为空！");
        }
    };
}
member.addEventListener("click",function () {
    ajaxfn("/chat?getAllUser=true","get",null,function (flag){
        var data = JSON.parse(flag.content);
        memberContainer.innerHTML="";
        for(var i=0;i<data.length;i++) {
            memberContainer.innerHTML += '<div class="userDiv">'+'<img src="images/image.png" style="margin: 10px 2px 10px 10px">'+'<span>' + data[i]+'</span>'+'<span style="top: 55px;font-size: 18px;color: #ff3b30">'+"葬爱家族UPUPUPUP!!!"+'</span>' + '</div>';
            var f=memberContainer.children;
            for(var j=0;j<f.length;j++){
            f[j].addEventListener("click",function (e) {
                if(!Ato[e.currentTarget.innerText]){
                    var window = document.createElement("div");
                    window.setAttribute("class", "chatWindow");
                    window.innerHTML = '<div class="chattingWith">' + '</div>'
                        +'<div class="windowIcon">'+'</div>'
                        + '<div class="chatContent ">' + '</div>'
                        + '<div class="input-container ">'
                        + '<textarea name="" class="input-chatContent" placeholder="请输入内容" cols="10" rows="5">' + '</textarea>'
                        + '<input type="submit" value="发送" class="sendButton">'
                        + '</div>';
                    create.appendChild(window);
                    if(window){
                        var windowIcon = document.getElementsByClassName("windowIcon");
                        var closeChat =document.getElementsByClassName("closeChat");
                        var sendButton =document.getElementsByClassName("sendButton");
                        var chatContent = document.getElementsByClassName("chatContent");
                        var inputChatContent = document.getElementsByClassName("input-chatContent");
                        var chattingWith = document.getElementsByClassName("chattingWith");
                        var chatWindow = document.getElementsByClassName("chatWindow");
                        // closeChat[closeChat.length-1].addEventListener("click",function (e) {
                        //     e.currentTarget.parentNode.style.visibility="hidden";
                        //     e.currentTarget.parentNode.parentNode.style.height="20px";
                        // });
                        // chattingWith[chattingWith.length-1].addEventListener("click",function (e) {
                        //     e.currentTarget.parentNode.style.height="400px";
                        //     e.currentTarget.nextSibling.nextSibling.style.visibility="visible";
                        // });
                        if(messageSave[e.currentTarget.children[1].textContent]){
                        for(var z=0;z<messageSave[e.currentTarget.children[1].textContent].length;z++){
                        chatContent[chatContent.length-1].innerHTML +='<div class="textDiv">'+'<img src="images/image.png" style="float:right;">'+'<span style="width:auto">'+":"+e.currentTarget.children[1].textContent+'</span>'+'<span>'+messageSave[e.currentTarget.children[1].textContent][z]+'</span>'+'</div>';
                        chatContent[chatContent.length-1].scrollTop=chatContent[chatContent.length-1].scrollHeight;
                        }
                        }
                        windowIcon[windowIcon.length-1].addEventListener("click",function (e) {
                            e.currentTarget.parentNode.style.visibility="hidden";

                        });
                        sendButton[sendButton.length-1].addEventListener("click",function (e) {
                            ajaxfn("/chat?chatUsername=true&chatContent="+e.currentTarget.previousSibling.value+"&to="+e.currentTarget.parentNode.parentNode.firstChild.children[0].innerText+"&userName="+userName,"get",null,function () {
                            });
                            e.currentTarget.parentNode.previousSibling.innerHTML+='<div class="localDiv">'+'<img src="images/image.png" style="float: left">'+'<span style="width: auto">'+userName+":"+'</span>'+'<span>'+e.currentTarget.previousSibling.value+'</span>'+'</div>';
                            e.currentTarget.parentNode.previousElementSibling.scrollTop = e.currentTarget.parentNode.previousElementSibling.scrollHeight;
                            e.currentTarget.previousSibling.value="";


                        });
                        chatWindow[chatWindow.length-1].addEventListener("mousedown",function (e) {
                            isMouseDown=true;
                            preX=e.pageX-e.currentTarget.offsetLeft;
                            preY=e.pageY-e.currentTarget.offsetTop;
                            currentM=e.currentTarget;
                        });
                        document.addEventListener("mousemove",function (e) {
                            e.preventDefault();
                            if(isMouseDown){
                               currentM.style.left = e.pageX-preX+"px";
                                currentM.style.top = e.pageY-preY+"px";
                            }
                        });
                        chatWindow[chatWindow.length-1].addEventListener("mouseup",function (e) {
                            isMouseDown=false;
                        });
                        chattingWith[chattingWith.length-1].innerHTML = "与"+'<span id="chattingWithId" style="color: #0113BA;font-family: 华文楷体;font-weight: bold;">'+e.currentTarget.children[1].innerText+'</span>'+"聊天中...";
                        Ato[e.currentTarget.innerText]=e.currentTarget.innerText;
                        toWho.push(e.currentTarget.innerText);
                    }
                }
                var total = document.querySelector(".create");
                for(var x=0;x<total.children.length;x++){

                    if(total.children[x].children[0].children[0].textContent==e.currentTarget.children[1].innerText) {
                        total.children[x].style.visibility = "visible";
                    }
                }



            });
        }


        }

    });
});




