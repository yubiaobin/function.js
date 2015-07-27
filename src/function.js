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





























/**
 * 动态加载Script 
 *
 *
 * 
 */
function loadScriptFun() {
    var dc = document,
        sc = dc.createElement('script'),
        scriptLoaded = false;
        sc.type = 'text/javascript';
        sc.src = location.protocol + '//' + location.host + '/' + 'path/yourfile.js';
         
        // IE和opera支持onreadystatechange
        // safari、chrome、opera支持onload
        sc.onload = sc.onreadystatechange = function () {
            // 避免opera下的多次调用
            if(scriptLoaded){return;};
            var readyState = sc.readyState;
            if (!sc.readyState || (sc.readyState == "loaded" || sc.readyState == "complete")) {
                scriptLoaded = true;
                try {
                    // callback();   执行你要执行的函数
                } finally {
                    sc.onload = sc.onreadystatechange = null;
                    dc.getElementsByTagName('head')[0].removeChild(sc);
                }
            }
        }
        dc.getElementsByTagName('head')[0].appendChild(sc);
}


















var MaxIndexObj = {
    /*设置Cookie对象以及其方法*/
    Cookie : {
        read : function(name, key, isJSON) {
            var cookieValue = "";
            var arrStr = document.cookie.split("; ");
            for (var i = 0; i < arrStr.length; i++) {
                var temp = arrStr[i].match(/^(\w+)=(.+)$/);
                if (temp && temp.length > 1 && temp[1] == name) {
                    cookieValue = temp[2];
                    break;
                }
            }
            if (key) {
                if(!isJSON)
                    return new this.Param().parse(cookieValue)[key];
                else
                    return JSON.parse(cookieValue)[key];
            }
            return cookieValue;
        },
        Param : function () {
            var o = {};
            this.parse = function(str) {
                var a = str.split("&");
                for (var i = 0,
                l = a.length; i < l; i++) {
                    var k = a[i].split("=");
                    o[k[0]] = k[1];
                }
                return o;
            };      
        }
    },

    /*对象内全局变量*/
    /*屏幕宽高等默认适配处理*/
    totalHeight  : $('.wrapper').height(),
    totalWidth   : $('.wrapper').width(),
    windowHeight : $(window).height(),
    scroll_top   : $(window).scrollTop(),
    indexClientObj : {},
    currentInClient   : false,
    globalIsGo        : 0,
    globalHrefFromNum : 0,
    buyOrder     :  0,
    mid  :  0,
    weixinIsReady : false,
    shareData : {
        /*分享标题*/
        title: share_title,
        /*分享链接*/
        url: share_url,
        /*分享内容*/
        content: share_info,
        /*分享图片地址*/
        imgSrc: share_img
    },
    /*浏览器类型检测*/
    global_ua : navigator.userAgent,
    operate_system : 1,
    from_software  : 2,


    GetQueryString  :  function(name) {  
        var me = this;

        var reg = new RegExp("(^|&)" + name + "=([^&]*)(&|$)", "i");  
        var r = window.location.search.substr(1).match(reg);  //获取url中"?"符后的字符串并正则匹配
        var context = "";  
        if (r != null)  
            context = r[2];  
        reg = null;  
        r = null;  
        return context == null || context == "" || context == "undefined" ? "" : context;  
    },
    /*首页样式处理*/
    loadIndexStyle  :  function(){
        var me = this;
    },
    /*微信分享弹出框居中处理*/
    weixinPopCenter  : function(){
        var me = this;

        $('.bottom_charge_box').hide();
        var top = $(window).scrollTop();
        $('#weixin_pop_bg').css('display','block');
        $('#weixin_pop_box').css('display','table');

        top += (window.innerHeight - $('#weixin_pop_box').height()) / 2;
        $('#weixin_pop_bg').css('top', top + 'px');
        $('#weixin_pop_box').css('top', top + 'px');

        document.body.style.overflow = "hidden";
        $('#weixin_pop_bg ,#weixin_pop_box').bind('touchstart', function(e){
            setTimeout(function(){
                $('#weixin_pop_bg').hide();
                $('#weixin_pop_box').hide();
            },300)
        });
        /*阻止事件滚动*/
        $('#weixin_pop_bg ,#weixin_pop_box').bind('touchmove', function(e){
            e.preventDefault();
            return false;
        });
    },
    /**
     * 通用分类统计
     *
     * @method LogStat
     * @function
     * @param data
     * @return
     */
    LogStat   :  function(data){
        var me = this,
            params = "";
        if(data.p1){
            params += "&p1="+ encodeURIComponent(data.p1); //一级分类
        }
        if(data.p2){
            params += "&p2="+ encodeURIComponent(data.p2);//二级分类
        }
        if(data.p3){
            params += "&p3="+ encodeURIComponent(data.p3);//三级
        }
        if(data.p4){
            params += "&p4="+ encodeURIComponent(data.p4);//四级
        }
        if(data.name){
            params += "&name="+encodeURIComponent(data.name);
        }
        if(data.type){ 
            params += "&type="+data.type; //文档
        }
        params = params.substr(1,params.length);
        var url =  "http://log.stat.kugou.com/statistics/statistics.html?"+params + "&n=" + new Date().getTime();
        if(data.urlback){
            return url;
        }else{
            try {
                setTimeout(function(){
                    (new Image()).src = url;
                },0);
            } catch (ex) {}
            return true;
        }
    },
    /*
     * 分享专题
     * @param {String} 分享的平台    
     */
    actShareTo  :  function(plat){
        var me = this,
        option = {
            /*新开窗口宽度*/
            popupWidth: $(window).width(),
            /*新开窗口高度*/
            popupHeight: $(window).height(),
            /*分享标题*/
            title: me.shareData.title,
            /*分享链接*/
            url: me.shareData.url,
            /*分享内容*/
            content: me.shareData.content,
            /*分享图片地址*/
            imgSrc: me.shareData.imgSrc,
            /*分享视频swf地址*/
            swf: "",
            /*(腾讯微博,网易微博) 用参数，您的网站地址(可选)*/
            site: "",
            /*(新浪微博,腾讯微博) 用参数，您申请的应用appkey,显示分享来源(可选)*/
            appkey: "",
            /*(139微博，网易微博) 用参数，分享来源*/
            source: "",
            /*(新浪微博) 用参数,关联用户的UID，分享微博会@该用户(可选)*/
            ralateUid: ""
        },
        winSrc = "",
        queryStr = "",
        showPopup = true;

        var _title = encodeURIComponent(me.shareData.title),
        _url = me.shareData.url,
        _content = encodeURIComponent(me.shareData.content),
        _imgSrc = encodeURIComponent(me.shareData.imgSrc);
        _swf = encodeURIComponent(me.shareData.swf || "");
        
        if(buyOrder > 0){
            console.log(buy_share_topicName);
            console.log(buy_share_info);

            var reg =new RegExp("%code%","g"); //创建正则RegExp对象  
            var stringObj =  buy_share_topicName,
                stringObj2 = buy_share_info;  
            var newstr = stringObj.replace(reg, buyOrder),
                newstr2 = stringObj2.replace(reg, buyOrder);   
            _title = option.title = newstr;
            _content = option.content = newstr2;
            _imgSrc = option.imgSrc = buyendtopimg;
     
            // _title = option.title = '我支持了BlGBANG最新数字专辑《M》，我的专属编号是' + buyOrder;
            // _content = option.content = '我在酷狗支持了BlGBANG最新数字专辑《M》（编号'+ buyOrder+'），你也一起来支持正版音乐吧！';
        }
        switch (plat) {
        case "qzone":
            winSrc = "http://sns.qzone.qq.com/cgi-bin/qzshare/cgi_qzshare_onekey";
            queryStr = ["url=" + _url, "title=" + _title, "desc=" + _content, "pics=" + _imgSrc].join("&");
            break;
        case "rr":
            option.popupHeight = 560;
            winSrc = "http://widget.renren.com/dialog/share";
            queryStr = ["link=" + _url, "title=" + _title, "image_src=" + _imgSrc, "description=" + _content].join("&");
            break;
        case 'sina':
            option.popupWidth = 615;
            option.popupHeight = 505;
            winSrc = "http://service.t.sina.com.cn/share/share.php";
            queryStr = ["url=" + _url, "appkey=" + option.appkey, "title=" + _content, "pic=" + _imgSrc, "ralateUid=" + option.ralateUid].join("&");
            break;
        case 'qq':
            option.popupWidth = 700;
            option.popupHeight = 680;
            var _appkey = encodeURIComponent(option.appkey); //你从腾讯获得的appkey
            var _pic = _imgSrc; //（例如：var _pic='图片url1|图片url2|图片url3....）
            winSrc = "http://v.t.qq.com/share/share.php";
            queryStr = ["title=" + _content, "url=" + _url, "appkey=" + _appkey, "site=" + option.site, "pic=" + _pic].join("&");
            break;
        case 'qq_client':
            option.popupWidth = 765;
            option.popupHeight = 620;
            winSrc = "http://connect.qq.com/widget/shareqq/index.html";
            queryStr = ["title=" + _title, "desc=" + _content, "url=" + _url, "site=" + option.site, "pics=" + _pic, "flash=" + _swf, "summary=" + encodeURIComponent('听音乐，找酷狗')].join("&");
            break;
        default:
            return;
        }
        if (showPopup) {
            var l = (screen.width-option.popupWidth) / 2,
            t = (screen.height-option.popupHeight) / 2,
            resultUrl = winSrc + "?" + queryStr;
            //if (!window.open(resultUrl, "_blank", "width=" + option.popupWidth + ",height=" + option.popupHeight + ",left=" + l + ",top=" + t)) {
                location.href = resultUrl;
            //};
        }
    },
    /**
    * 分享事件处理
    * 
    */
    shareFunntion   :  function(isRunInClient, buyOrder){
        var me = this;

        if(isRunInClient){
            /*客户端分享*/
            if(buyOrder){
                if(buyOrder > 0){
                    var reg =new RegExp("%code%","g"); //创建正则RegExp对象  
                    var stringObj =  buy_share_topicName,
                        stringObj2 = buy_share_info;  
                    var newstr = stringObj.replace(reg, buyOrder),
                        newstr2 = stringObj2.replace(reg, buyOrder);   
                    share_title = newstr;
                    share_info = newstr2;

                    // share_title = '我支持了BlGBANG最新数字专辑《M》，我的专属编号是' + buyOrder;
                    // share_info = '我在酷狗支持了BlGBANG最新数字专辑《M》（编号'+ buyOrder+'），你也一起来支持正版音乐吧！';
                }
            }
            KgMobileCall.share({
                "shareName": "酷狗音乐",
                "topicName": "酷狗音乐",
                "hash": "",
                "listID": "",
                "type": "3",
                "suid": "",
                "slid": "",
                "imgUrl": "",
                "filename": "",
                "duration": "",
                "shareData": {
                    "linkUrl": share_url,
                    "picUrl": share_img,
                    "content": share_info,
                    "title": share_title 
                }
            });   
        } else {
            /*网页分享*/
            var ua = navigator.userAgent;
            if((/MicroMessenger/i).test(ua)){
                /*如果是微信分享*/
                me.weixinPopCenter();

                setTimeout(function() {
                    $('#weixin_pop_bg').hide();
                    $('#weixin_pop_box').hide();
                },
                3000);

            } else {
                /*非微信浏览器分享*/
                me.actShareTo('sina');
            }
        }
        /*分享统计*/
        me.LogStat({
            p1     : '乐库',
            p2     : '李敏镐专辑（手机端）',
            p3     : me.globalHrefFromNum,
            name   : '分享统计,手机码' + me.mid,
            type   :  1,
            t      :  Math.random()
        });
    },
    /*区分客户端和网页执行脚本*/
    runOnDeskTop  :  function(){
        var me = this;
        /*判断网页打开方式*/
        if(KgMobileCall.isInClient()){
            me.currentInClient = true;
        
            KgMobileCall.getUserInfo(function(res){
                if (res.token) {
                    me.indexClientObj.clienttoken = res.token;
                    me.indexClientObj.clientsign  = res.key;
                    me.indexClientObj.kugouid     = res.kugouID;
                    me.indexClientObj.timer       = Math.random();
                } else if(res.key){
                    me.indexClientObj.clientsign  = res.key;
                    me.indexClientObj.kugouid     = res.kugouID;
                    me.indexClientObj.timer       = Math.random();
                } else {
                    me.indexClientObj.timer       = Math.random();
                }
                me.indexLoadDataFunc();
            });
        } else {
            me.currentInClient = false;

            me.indexClientObj.timer = Math.random();
            me.indexLoadDataFunc();
        }
        /*客户端刷新操作*/
        KgWebMobileCall.userStatus = function(){
            me.currentInClient = true;

            KgMobileCall.getUserInfo(function(res){
                if(res.status == 1){
                    /*客户端已登陆情况下*/
                    if (res.token) {
                        me.indexClientObj.clienttoken = res.token;
                        me.indexClientObj.clientsign  = res.key;
                        me.indexClientObj.kugouid     = res.kugouID;
                        me.indexClientObj.timer       = Math.random();
                    } else if(res.key){
                        me.indexClientObj.clientsign  = res.key;
                        me.indexClientObj.kugouid     = res.kugouID;
                        me.indexClientObj.timer       = Math.random();
                    } else {
                        me.indexClientObj.timer       = Math.random();
                    }
                    me.indexLoadDataFunc();
                } else {
                    /*客户端未登陆情况下*/
                    me.indexLoadDataFunc();
                }
            });
        }
    },


    /*------------------------下面 开始接口类请求-------------------*/
    /*勋章页执行方法*/
    afterPage  :  function(){
        var me = this;

        me.globalHrefFromNum = me.GetQueryString("hreffrom");
        me.globalIsGo = me.GetQueryString('is_go');

        $.ajax({
            type: 'get',
            dataType:'json',
            url : 'http://huodong.kugou.com/2014/index.php?r=liminhao/mobileBuyEndPage&intro_en=liminhao',
            data: me.indexClientObj,
            success:function(data){

                if(data.err_code == 0){
                    if(data.buystatus.num != 0){
                        //获取第一个铭牌号
                        me.buyOrder = data.mingpai[data.mingpai.length-1];

                        var mingpaiList = data.mingpai;
                        var buyNum = data.buystatus.num;
                        var user_info_pic = data.user_info.pic;
                        var html="";
                        for(var i= 0,len=mingpaiList.length;i<len;i++){
                            html += '<li> <div class="item">NO.'+mingpaiList[i]+'</div></li>';
                        }
                        $(".content").find("ul").append(html);
                        $(".badgeTitle").find("img").attr("src",user_info_pic);
                        $(".buyNum").html(buyNum);

                        if(MaxIndexObj.weixinIsReady){
                            //分享给朋友
                            wx.onMenuShareAppMessage({
                                title  : '我在酷狗购买了李敏镐最新数字单曲《Thank You》，我的Minoz编号是' + MaxIndexObj.buyOrder,
                                desc   : '我在酷狗购买了李敏镐最新数字单曲《Thank You》，我的Minoz编号是' + MaxIndexObj.buyOrder,
                                link   : 'http://huodong.kugou.com/2014/static/tpl/mobile_liminhao/index.html?is_go=0&hreffrom=16',
                                imgUrl : 'http://huodong.kugou.com/2014/static/images/mobile_liminhao/wei_share_img.jpg',
                                trigger: function (res) {
                                    // 不要尝试在trigger中使用ajax异步请求修改本次分享的内容，因为客户端分享操作是一个同步操作，这时候使用ajax的回包会还没有返回
                                    // alert('用户点击发送给朋友');      
                                },
                                success: function (res) {
                                    // alert('已分享');
                                },
                                cancel: function (res) {
                                    // alert('已取消');
                                },
                                fail: function (res) {
                                    // alert(JSON.stringify(res));
                                }
                            });
                            
                            //分享朋友圈
                            wx.onMenuShareTimeline({
                                title  : '我在酷狗购买了李敏镐最新数字单曲《Thank You》，我的Minoz编号是' + MaxIndexObj.buyOrder,
                                link   : 'http://huodong.kugou.com/2014/static/tpl/mobile_liminhao/index.html?is_go=0&hreffrom=16',
                                imgUrl : 'http://huodong.kugou.com/2014/static/images/mobile_liminhao/wei_share_img.jpg',
                                trigger: function (res) {
                                    // 不要尝试在trigger中使用ajax异步请求修改本次分享的内容，因为客户端分享操作是一个同步操作，这时候使用ajax的回包会还没有返回
                                    // alert('用户点击分享到朋友圈');
                                },
                                success: function (res) {
                                    // alert('已分享');
                                },
                                cancel: function (res) {
                                    // alert('已取消');
                                },
                                fail: function (res) {
                                    // alert(JSON.stringify(res));
                                }
                            });
                        }
                    }else{
                        location.href = "http://huodong.kugou.com/2014/static/tpl/mobile_liminhao/index.html?is_go=1&hreffrom=" +  me.globalHrefFromNum;
                    }
                }else{
                    location.href = "http://huodong.kugou.com/2014/static/tpl/mobile_liminhao/index.html?is_go=1&hreffrom=" +  me.globalHrefFromNum;
                }
            },
            error:function(xhr, type){
            }
        });
    },


    /*首页数据请求程序入口function*/
    indexLoadDataFunc   :  function(){
        var me = this;

        /*------------默认执行类操作----------------*/
        /*默认请求是否跳转页面*/
        me.afterPage();
        /*------------触发类操作----------------*/
        /*a标签跳页面事件*/
        /*继续购买 跳转*/
        $('.reSupportA').unbind('click').bind('click', function(){
            location.href = 'http://huodong.kugou.com/2014/static/tpl/mobile_liminhao/index.html?is_go=1&hreffrom=' + me.globalHrefFromNum;
            
            /*继续购买点击统计*/
            me.LogStat({
                p1     : '乐库',
                p2     : '李敏镐专辑（手机端）',
                p3     : me.globalHrefFromNum,
                name   : '购买后/继续购买点击,手机码' + me.mid,
                type   :  1,
                t      :  Math.random()
            });
            return false;
        })
        /*查看专辑 跳转*/
        $('.readSong').unbind('click').bind('click', function(){
            location.href = 'http://huodong.kugou.com/2014/static/tpl/mobile_liminhao/songdetail.html?is_go=' + me.globalIsGo +'&hreffrom=' + me.globalHrefFromNum;
            
            /*查看专辑点击统计*/
            me.LogStat({
                p1     : '乐库',
                p2     : '李敏镐专辑（手机端）',
                p3     : me.globalHrefFromNum,
                name   : '购买后/查看专辑点击,手机码' + me.mid,
                type   :  1,
                t      :  Math.random()
            });

            return false;
        })
        /*炫耀一下*/
        $('.share').unbind('click').bind('click', function(){
            if(me.currentInClient){
                me.shareFunntion(true, me.buyOrder);
            } else {
                me.shareFunntion(false, me.buyOrder);
            }

            /*炫耀一下点击统计*/
            me.LogStat({
                p1     : '乐库',
                p2     : '李敏镐专辑（手机端）',
                p3     : me.globalHrefFromNum,
                name   : '购买后/炫耀一下按钮点击,手机码' + me.mid,
                type   :  1,
                t      :  Math.random()
            });
            return false;
        })
    },
    
    /*初始化init*/
    init  :  function(){
        var me = this;

        /*数据请求类程序入口*/
            /*1,客户端和网页分别执行脚本*/
            me.runOnDeskTop();
    }
};


/*首页初始化*/
MaxIndexObj.init();



