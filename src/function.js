/* 
 * @authors maxyu (yubiaobin1986@gmail.com)
 * @date    2014-10-12 11:08:54
 * @version $Id$
 */


// 注释插件：DocBlockr。这个插件可以快速生成js ,php 等语言函数注释。在函数关键字function上面一行输入/** ,然后按tab 就会自动生成注释。







/*----------------- 原型方法部分 -----------------*/



// 数组原型方法扩展



/**
 * [数组去掉重复项函数]
 * @return {[type]}
 */
Array.prototype.removeRepeat = function(){
	var   n = [];     // 新建一个临时数组
	for(var i = 0, j = this.length; i < j; i++ ){     // 遍历当前数组
		if(n.indexOf(this[i]) === -1)n.push(this[i]);
		//如果当前数组的第i已经保存进了临时数组，那么跳过，否则把当前项push到临时数组里面
	}
	return n;
};
// example
var array = [1,1,2,2,3 ,"hello",'hello'];
var result = array.removeRepeat();
console.log(result);   // [1, 2, 3,"hello"]



// 字符串原型方法扩展



/**
 * [字符串倒叙输出方法]
 * @return {[type]} [description]
 */
String.prototype.reverse = function(){
	return Array.prototype.reverse.call(this.split("")).join("");
};
// example
console.log('Hello World!'.reverse());   // !dlroW olleH









/*----------------- 功能函数部分 -----------------*/


/**
 * [随机生成纯数字数组]
 * @param  {[type]} random [description]
 * @param  {[type]} length [description]
 * @return {[type]}        [description]
 */
function createRandomArray(random, length){
	var    arr = [],
	       len = length - 1;
	for(var i = 0; i < len; i++){
		arr[i] = Math.floor(Math.random() * (random + 1));
		arr.push(arr[i]);
	}
	return arr;
}
// example
console.log(createRandomArray(15,20));







/**
 * [数组的快速排序方法]
 * @param  {[type]} arr [description]
 * @return {[type]}     [description]
 */
function quickSort(arr){
	// 如果数组只有一项，就返回原数组
	if(arr.length <= 1){
		return arr;
	} else {
		// 取数组中间项数
		var     pivotIndex = Math.floor(arr.length / 2),
			// 取到剔除数组的中间改项数
			pivot = arr.splice(pivotIndex, 1),
			leftArray = [],
			rightArray = [];
		for(var i = 0, len = arr.length; i < len; i++){
			// 如果该循环项小于“基准”项，放进左边数组，否则放进右边数组
			if(arr[i] < pivot){
				leftArray.push(arr[i]);
			} else {
				rightArray.push(arr[i]);
			}
		}
		// 不断递归调用，然后把结果拼接成最后的结果数组
		return arguments.callee(leftArray).concat(pivot, arguments.callee(rightArray));
	}
}
// example
var arr = [1,56,92,6,6,6,4,5,37,3,5];
console.log(quickSort(arr));   // [1, 3, 4, 5, 5, 6, 6, 6, 37, 56, 92]




/**
 * [数组的子集取余集函数之一]
 * @param  {[type]} arr1
 * @param  {[type]} arr2
 * @return {[type]}
 */
function complement (arr1, arr2) {
	// 声明结果数组和临时数组
	var   result = [], 
	      arrTotal = [].concat(arr1, arr2);
	// 遍历临时数组并按条件处理
	for (var i = 0, len = arrTotal.length; i < len; i++) {
		if (!isEqual(i < arr1.length ? arr2 : arr1, arrTotal[i])) {
			result.push(arrTotal[i]); 
		}
	}
	return result;
}





/**
 * [数组取余集的比较函数]
 * @param  {[type]}  arr
 * @param  {[type]}  val
 * @return {Boolean}
 */
function isEqual(arr, val) {
	for (var i = 0; i < arr.length; i++) {
		if(JSON.stringify(arr[i]) === JSON.stringify(val)) {
			return true;    
		}
	}
	return false;
}
// example
var arr1 = [[1,"hahaha"], [3,4], 5, 6];
var arr2 = [[1,"hahaha"], [3,4], 5, 6, 7, 8, 9, [10, 11],12];
var result = complement(arr1, arr2);
console.log(result);                  // [7, 8, 9, [10, 11], 12];
console.log(typeof result);           // object
console.log(result instanceof Array); // true
console.log(result.length);           // 5





/**
 * [数组的子集取余集函数之二]
 * @param  {[type]} arr1
 * @param  {[type]} arr2
 * @return {[type]}
 */
function getComplementArray(arr1, arr2) {
	//重置数组
	if (arr1.length < arr2.length) {
		var newArrLengther = arr2,
			newArrShorter = arr1;
	} else {
		var newArrLengther = arr1,
			newArrShorter = arr2;
	};
	var repeatArr = [],
		resultArr = [];
	// 过滤出相同的数组
	for (var i = 0; i < newArrLengther.length; i++) {
		for (var j = 0; j < newArrShorter.length; j++) {
			if (newArrLengther[i].toString() === newArrShorter[j].toString()) {
				repeatArr.push(newArrShorter[j]);
			};
		};
	};
	// 长数组再拼接重复的数组项
	var tmp = newArrLengther.concat(repeatArr);
	// 临时保存数组项的对象
	var o = {};
	for (var k = 0; k < tmp.length; k++) {
		(tmp[k] in o) ? o[tmp[k]]++ : o[tmp[k]] = true;
	};
	for (key in o) {
		if (o[key] === true) {
			resultArr.push(key);
		};
	};
	return resultArr;
};
// example
var arr1 = [[1,2], [3,4], [5, 6]];
var arr2 = [[1,2], [3,4], [5, 6], [7, 8], [9, 10], [11,12]];
var result = getComplementArray(arr1, arr2);
console.log(result);                  // [[7, 8], [9, 10], [11,12]];
console.log(typeof result);           // object
console.log(result instanceof Array); // true
console.log(result.length);           // 5







/**
 * [两个数字类型参数求差函数]
 * @return {[type]}
 */
function subtractionNum(){
	if(arguments.length === 2){
		if(typeof arguments[0] === "number" && typeof arguments[1] === "number"){
			return (arguments[0] < arguments[1]) ? arguments[1] - arguments[0] : arguments[0] - arguments[1];
		} else {
			console.log("传入的参数必须是数值类型");
		}
	} else {
		console.log("请确认是否传入了两个参数");
	}
}
// example
var result1 = subtractionNum(20,10);
var result2 = subtractionNum(20,50);
var result3 = subtractionNum();
var result4 = subtractionNum(20,30,50);
var result5 = subtractionNum(20,"hello");
console.log(result1);   // 10
console.log(result2);   // 30
console.log(result3);   // 请确认是否传入了两个参数 undefined
console.log(result4);   // 请确认是否传入了两个参数 undefined
console.log(result5);   // 传入的参数必须是数值类型 undefined





/**
 * [克隆一个对象或数组的函数]
 * @param  {[type]} obj
 * @return {[type]}
 */
function cloneFun(obj){
	if(!obj || typeof obj !== "object"){   // 判断非数组或对象
		return null;
	}
	var result = (obj instanceof Array)?[]:{};   // 区别数组和对象
	for(var i in obj){
		result[i] = (typeof obj[i] !== "object")?obj[i]:arguments.callee(obj[i]);
	}
	return result;   // 返回的新数组或对象
}
// example
var arr = [1,2,[3,4,5],6];
var obj = {
	name : "lilei",
	age :12
};
var arr_result = cloneFun(arr);
var obj_result = cloneFun(obj);
console.log(arr_result);
console.log(obj_result);





/**
 * [向现有的URL的末尾添加字符串参数]
 * @param {[type]} url
 * @param {[type]} name
 * @param {[type]} value
 */
function addURLParam (url, name , value){
	url += (url.indexOf("?") == -1 ? "?" : "&");
	url += encodeURIComponent(name) + "=" + encodeURIComponent(value);
	return url;
}
// example
var url = "http://www.oc35.com/index.html";
var result = addURLParam(url, "search" , "hello");
console.log(result);    // http://www.oc35.com/index.html?search=hello 





 /**
  * [范围函数(本地模拟随机概率)]
  * @param  {[type]} start
  * @param  {[type]} end
  * @return {[type]}
  */
function randomFrom(start,end){
	if(typeof start === "number" && typeof end === "number"){
		var randomSize = end - start + 1;
    	return Math.floor(Math.random() * randomSize + start);
	} else {
		return "All arguments must be numbers";
	}
}
// example1
var num = randomFrom(2,7);
window.onload = function(){console.log(document.write(num));};  //  2,3,4,5,6,7
// example2
var targetArray = ['red','orange','yellow','green','cyan','blue','violet','white'];
var color = targetArray[randomFrom(0,targetArray.length-1)];
window.onload = function(){console.log(document.write(color));};  // red, orange, yellow, green, cyan, blue, violet, white





/**
 * [字符串首字母大写]
 * @param  {[type]} text
 * @param  {[type]} delimiter
 * @return {[type]}
 */
function charUpper(text, delimiter){
	var str = "";
	var arr = text.split(delimiter);
	for(var i = 0, len = arr.length; i < len; i++){
		var up_str = arr[i].substring(0,1);
		arr[i] = up_str.toUpperCase() + arr[i].substring(1);
	}
	str = arr.join(delimiter);
	return str;
}
// example
var text = "aaa bbb ccc";
console.log(charUpper(text, " "));    // Aaa Bbb Ccc

	



/**
 * [取数字的整除因子数组]
 * @param  {[type]} num [description]
 * @return {[type]}     [description]
 */
function getDivisorsArray(num){
    var arr=[];
    for(var i = 2;i <= parseInt(num/2); i++){
        if(num % i === 0){
            arr.push(i);
        }
    }
    if(arr.length === 0){return num + " is prime"};
    return arr;
}
// example
console.log(getDivisorsArray(56));    // [2,4,7,8,14,28]





/**
 * [去除字符串内重复的字符]
 * @param  {[type]} str [description]
 * @return {[type]}     [description]
 */
function removeRepeatCharacter(str){
	var arr = [],
		final_arr = [];
	arr = str.split('')
	for(var i = 0,len = arr.length; i < len; i++){
		if(final_arr.indexOf(arr[i])  === -1){
			final_arr.push(arr[i]);
		}
	}
	return final_arr.join('');
}

var str = "123456564564654654abccabcbabcba645265465";
var result = removeRepeatCharacter(str);
console.log(result)    // 123456abc




/**
 * [样式中线替换成驼峰写法个体(去除中线)]
 * @param  {[type]} style
 * @return {[type]}
 */
function cssRemoveDelimiter(style){
	var doStyel;
	if(style.indexOf("-") !== -1){
		doStyle = style.replace(/-\w/, function(str){
			return str.substr(1).toUpperCase();
		});
	} else {
		doStyle = style;
	}
	return doStyle;
}
// example
var result = cssRemoveDelimiter("background-color");
console.log(result);       // backgroundColor 






/**
 * [杨辉三角求数组之一]
 * @param  {[type]} depth [description]
 * @return {[type]}       [description]
 */
function pascal(depth) {
    var arr = [[1]];
    for(var i = 1; i < depth; i++){
        arr[i] = [];
        for(var j = 0; j <= i; j++){
            arr[i][j] = (arr[i-1][j] || 0) + (arr[i-1][j-1] || 0);
        }
    }
    return arr;
}
// example
console.log(pascal(5));




/**
 * [杨辉三角求数组之二]
 * @param  {[type]} depth [description]
 * @return {[type]}       [description]
 */
function pascal2(depth) {
    var arr = [[1]];
    for (var i = 1; i < depth; i++) {
        var temp = [];
        var last = arr[arr.length - 1];
        for (var j = 0; j <= last.length; j++){
            (j === 0 || j === last.length) ? temp.push(1) : temp.push(last[j - 1] + last[j]);
        }
        arr.push(temp);
    }
    return arr;
}
// example
console.log(pascal2(5));

































