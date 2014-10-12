/* 
 * @authors maxyu (yubiaobin1986@gmail.com)
 * @date    2014-10-12 11:08:54
 * @version $Id$
 */





// 向现有的URL的末尾添加字符串参数
function addURLParam (url, name , value){
	url += (url.indexOf("?") == -1 ? "?" : "&");
	url += encodeURIComponent(name) + "=" + encodeURIComponent(value);
	return url;
}
// example
var url = "http://www.oc35.com/index.html";
var result = addURLParam(url, "search" , "hello");
console.log(result);    //  http://www.oc35.com/index.html?search=hello 




 // 范围函数(本地模拟随机概率)
function randomFrom(start,end){
    var randomSize = end - start + 1;
    return Math.floor(Math.random() * randomSize + start);
}
// example1
var num = randomFrom(2,7);
window.onload = function(){console.log(document.write(num))}  //  2,3,4,5,6,7
// example2
var targetArray = ['red','orange','yellow','green','cyan','blue','violet','white'];
var color = targetArray[randomFrom(0,targetArray.length-1)]
window.onload = function(){console.log(document.write(color))}  // red, orange, yellow, green, cyan, blue, violet, white
























































