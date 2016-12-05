/*
*
* 
* 
javascript 基本数据类型练习
 */


var varString ="abc";       //string
var varNumber=123;           //number
var varUndefined=undefined;     //undefined;    
var varBoolean=true;            //boolean
var varNull=null;                   //null
//    var obj=new String("123");
var varType=typeof "abc";
var varType1=typeof 123;
var varType2= typeof undefined;
var varType3 = typeof true;
var varType4 = typeof null;
/*
*
* 
* 
* 变量类型检查
 */
document.writeln(varType);

document.writeln(varType1);

document.writeln(varType2);

document.writeln(varType3);

document.writeln(varType4);

/**
 *
 * @type {number}
 */


var varNumber2 = 8;
varNumber2 = varNumber2 + 12;
document.write(varNumber2);
document.write("<br>");
var varEnumber = 2e3;
document.write(varEnumber);

var infiNumber = 1/0;
document.write(infiNumber);
var hello = "hello world";
var i = hello.length;
document.write(i);
document.writeln(hello[0]);
document.writeln(hello[1]);
document.writeln(hello[2]);
document.writeln(hello[3]);
document.write(hello[hello.length]);
document.write(hello.substring(0,11));
document.write("<br>")
/**
 *
 * @type {boolean}
 */
var flag = true;
if(flag){
    document.write("flag=true");
}
else{
    document.write("flag=false");
}

if("1"===9/9){
    document.write("flag=true");
}
else{
    document.write("flag=false");
}

var strNumberConvert = String(123);
document.write("<br>");
document.write(typeof strNumberConvert);

var dateStr = String(new Date());
document.write("<br>");
document.write(dateStr);

var nVar = Number("1234");
document.write("<br>");
document.write(nVar);

var unNumber = Number(undefined);
document.write("<br>");
document.write(unNumber);


/*
一元运算符
 */
var x = 2;
var y = "5";
x=y+x;
document.write(x);
document.write(typeof x);

/*
对象类型
 */
var person ={
    name:"Bob",
    age:20,
    tag:['js','web','mobile'],
    city:"Beijing",
    hasCar:true,
    zipcode:null
};
document.write("<br>");
document.write(person.name);
document.write("<br>");
document.write(person.age);
document.write("<br>");
document.write(person.tag);
document.write("<br>");
document.write(person.hasCar);
document.write("<br>");
document.write(person.zipcode);

