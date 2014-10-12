/**
 * 
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