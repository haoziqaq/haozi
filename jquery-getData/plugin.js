/**
 * Created by lenovo on 2017/1/17.
 */
(function (window,$) {
    $.fn.extend({
       student:function (option) {
           var wrapper = $(this);
           var getData = function (param) {
               $.ajax({
                    url:param.url, 
                   type:param.method?param.method:"post",
                   data:param.data?param.data:null,
                   success:function (content) {
                       param.callback(content);
                   },
                   error:function (error) {
                       param.error(error);
                   }
               });
           };
           var render = function(data){
               var header,content;
               // var isArray = Object.property.toString.call(data);
               // if(isArray ==="[object array]"){}
               // if(data instanceof Array){}

               if(Array.isArray(data)){
                   //region渲染头部
                   header = $("<div class='head'></div>");
                   header.append("<div>姓名</div>");
                   header.append("<div>英文名</div>");
                   header.append("<div>年龄</div>");
                   header.append("<div>爱好</div>");
                   header.append("<div>学号</div>");
                   header.append("<div>性别</div>");
                   header.append("<div>身高</div>");
                   header.append("<div>体重</div>");
                    content = $("<div class='content'></div>");
                   //endregion
                   data.forEach(function (stu) {
                     var row = $("<div class='row'></div>");
                       row.append("<div>"+stu.name+"</div>");
                       row.append("<div>"+stu.enName+"</div>");
                       row.append("<div>"+stu.age+"</div>");
                       row.append("<div>"+stu.favorite+"</div>");
                       row.append("<div>"+stu.No+"</div>");
                       row.append("<div>"+stu.gender+"</div>");
                       row.append("<div>"+stu.height+"</div>");
                       row.append("<div>"+stu.weight+"</div>");
                       content.append(row);
                   });
                   // $("").each(function () {
                   //     $(this)
                   // });
                   wrapper.append(header);
                   wrapper.append(content);

               }

           };
           getData({
               url:"/students",
               callback:function (data) {
                   if(option.dataRenderStart)
                   option.dataRenderStart();
                   render(data);
                   if(option.dataRendered)
                   option.dataRendered();
               },
               error:function(msg){
                   if(option.getError)
                   option.getError();
                   alert(msg);
               }
           });
           
       } 
    });
})(window,jQuery);