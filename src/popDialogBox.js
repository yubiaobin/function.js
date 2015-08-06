/**
 * 
 * @authors Max_yu (yubiaobin@gmail.com)
 * @date    2015-08-04 10:28:30
 * @version $Id$
 */



/**
 * [description]
 *
 * @param  {object}
 * @return {function}
 *
 *
 * popDialogShow({
 *	  title        :  '我是标题',         可选参数   类型 str 
 * 	  dialogBox    :  '<h3>填写资料</h3><input type="text" class="charge_input_get_prize" placeholder="姓名" id="charge_input_name"><div class="get_exp_prize_name_box"></div><p>jdclksdj</p><p>jdclksdj</p><p>jdclksdj</p>',
 *    buttonNum    :  ['取消','确认'],    必须参数   类型  arr-str
 *    btnCallback  :  function(){
 *    	  alert('我是回调函数，请执行我！')       可选参数   类型 function
 *    }
 * })
 *
 *
 */






/*定义模块组件*/
;(function(root,factory){

	if (typeof exports == 'object'){
		/* CommonJS */
		module.exports = factory();
	} else if (typeof define == 'function' && define.amd){
		/* AMD module */
		define(factory);
	} else {
		/* Browser global */
   		root.popDialogShow = factory();
	}

})(typeof window !== "undefined" ? window : this, function(){
   
		var options = {};

		/*主函数入口*/
		var popDialogShow = function(obj){
			// 弹出框标题
			options.title = obj.title || '';
			// 弹出框 内容区 
			options.dialogBox = obj.dialogBox;
			// 弹出框 操作按钮数量 1 个或者 2个 （最多两个）
			options.buttonNum = obj.buttonNum;
			// 按钮回调方法（仅存在第二个按钮）
			options.btnCallback = obj.btnCallback;



		/*生成html结构*/
		var dcf = document.createDocumentFragment(),
			popBg = document.createElement('div'),
			popBox = document.createElement('div'),
			popCell = document.createElement('div'),
			popCenter = document.createElement('div'),
			popTitle = document.createElement('div'),
			popInfo = document.createElement('div'),
			btnArea = document.createElement('div'),
			closedBtn = document.createElement('div'),
			confirmBtn = document.createElement('div'),
			clear = document.createElement('div'),
			currentScrollTop = document.body.scrollTop;

		popBg.id = 'PopBg';
		popBg.className = 'PopBg';
		popBox.id = 'PopBox';
		popBox.className = 'PopBox';
		popCell.className = 'PopCell';
		popCenter.className = 'PopCenter';
		popTitle.className = 'PopTitle';
		popInfo.className = 'PopInfo';
		btnArea.className = 'BtnArea';
		closedBtn.id = 'ClosedBtn';
		closedBtn.className = 'ClosedBtn';
		confirmBtn.className = 'ConfirmBtn';
		clear.className = 'clear';


		/*插入节点*/
		dcf.appendChild(popBg);
		dcf.appendChild(popBox);
		popBox.appendChild(popCell);
		popCell.appendChild(popCenter);
	


		/*插入标题*/
		if(options.title){
			popTitle.innerHTML = options.title;
			popCenter.appendChild(popTitle);
		}

		/*插入内容*/
		popInfo.innerHTML = options.dialogBox;
		popCenter.appendChild(popInfo);


		/*插入按钮*/
		var btnArg1 = Boolean(typeof options.buttonNum == 'object'),
			btnArg2 = Boolean(options.buttonNum instanceof Array),
			btnArg3 = options.buttonNum.length;

		if(btnArg1 && btnArg2 && (btnArg3 == 1)){
			/*只有一个按钮*/
			popCenter.appendChild(btnArea);
			btnArea.appendChild(closedBtn);
			closedBtn.innerHTML = options.buttonNum[0];
			btnArea.appendChild(clear);

			//取消按钮样式
			closedBtn.style.width = '100%';
			closedBtn.style.height = '40px';
			closedBtn.style.fontSize = '18px';
			closedBtn.style.color = '#848484';
			closedBtn.style.textAlign = 'center';
		} else if (btnArg1 && btnArg2 && (btnArg3 == 2)){
			/*有两个按钮*/
			popCenter.appendChild(btnArea);
			btnArea.appendChild(closedBtn);
			closedBtn.innerHTML = options.buttonNum[0];
			btnArea.appendChild(confirmBtn);
			confirmBtn.innerHTML = options.buttonNum[1];
			btnArea.appendChild(clear);

			//取消按钮样式
			closedBtn.style.width = '50%';
			closedBtn.style.height = '40px';
			closedBtn.style.fontSize = '18px';
			closedBtn.style.float = 'left';
			closedBtn.style.color = '#848484';
			closedBtn.style.borderRight = '1px solid #bebebe';
			closedBtn.style.textAlign = 'center';
			closedBtn.style.boxSizing = 'border-box';

			//确认按钮样式
			confirmBtn.style.width = '50%';
			confirmBtn.style.height = '40px';
			confirmBtn.style.fontSize = '18px';
			confirmBtn.style.float = 'left';
			confirmBtn.style.color = '#158df3';
			confirmBtn.style.textAlign = 'center';
			closedBtn.style.boxSizing = 'border-box';
		} else {
			// alert('参数有误，最多只接受两个按钮！');

			/*有两个按钮*/
			popCenter.appendChild(btnArea);
			btnArea.appendChild(closedBtn);
			closedBtn.innerHTML = options.buttonNum[0];
			btnArea.appendChild(confirmBtn);
			confirmBtn.innerHTML = options.buttonNum[1];
			btnArea.appendChild(clear);

			//取消按钮样式
			closedBtn.style.width = '50%';
			closedBtn.style.height = '40px';
			closedBtn.style.fontSize = '18px';
			closedBtn.style.float = 'left';
			closedBtn.style.color = '#848484';
			closedBtn.style.borderRight = '1px solid #bebebe';
			closedBtn.style.textAlign = 'center';
			closedBtn.style.boxSizing = 'border-box';

			//确认按钮样式
			confirmBtn.style.width = '50%';
			confirmBtn.style.height = '40px';
			confirmBtn.style.fontSize = '18px';
			confirmBtn.style.float = 'left';
			confirmBtn.style.color = '#158df3';
			confirmBtn.style.textAlign = 'center';
			closedBtn.style.boxSizing = 'border-box';
		}


		/*设置CSS样式*/
		//背景样式
		popBg.style.background = '#000';
		popBg.style.opacity = '0.7';
		popBg.style.position = 'absolute';
		popBg.style.width = '100%';
		popBg.style.height = '100%';
		popBg.style.top = currentScrollTop + 'px';
		popBg.style.left = '0';
		popBg.style.display = 'block';
		popBg.style.background = '#000';
		popBg.style.zIndex = '1998';
		popBg.style.overflow = 'hidden';

		//内容层样式
		popBox.style.position = 'absolute';
		popBox.style.width = '100%';
		popBox.style.height = '100%';
		popBox.style.top = currentScrollTop  + 'px';
		popBox.style.left = '0';
		popBox.style.display = 'table';
		popBox.style.zIndex = '1999';
		popBox.style.overflow = 'hidden';

		//内容框样式
		popCell.style.display = 'table-cell';
		popCell.style.verticalAlign = 'middle';
		popCell.style.overflow = 'hidden';

		//内容块样式
		popCenter.style.position = 'relative';
		popCenter.style.width = '70%';
		popCenter.style.maxHeight = '40%';
		popCenter.style.minHeight = '20%';
		popCenter.style.marginLeft = '15%';
		popCenter.style.background = '#fff';
		popCenter.style.borderRadius = '5px';
		popCenter.style.borderTop = '2px solid #158df3';
		popCenter.style.overflow = 'hidden';

		//标题样式
		popTitle.style.width = '100%';
		popTitle.style.height = '20%';
		popTitle.style.lineHeight = '40px';
		popTitle.style.fontSize = '20px';
		popTitle.style.color = '#158df3';
		popTitle.style.background = '#orange';
		popTitle.style.textAlign = 'center';

		// alert(window.getComputedStyle(popTitle, null).width);
		// popTitle.currentStyle? popTitle.currentStyle : window.getComputedStyle(popTitle, null)).height
		
		//插入内容区样式
		popInfo.style.width = '100%';

		//按钮区样式
		btnArea.style.position = 'absolute';
		btnArea.style.bottom = '0';
		btnArea.style.width = '100%';
		btnArea.style.height = '40px';
		btnArea.style.background = '#fff';
		btnArea.style.lineHeight = '40px';
		btnArea.style.borderTop = '1px solid #bebebe';


		/*添加文档随便到文档，并让浏览器只进行一次重排和重绘*/
		document.body.appendChild(dcf);


		/*事件绑定区*/

		document.body.style.overflow = "hidden";
		/*阻止事件滚动*/
		popBg.addEventListener('touchmove', function(e){
			e.preventDefault();
			return false;
		}, false);
		popBox.addEventListener('touchmove', function(e){
			e.preventDefault();
			return false;
		}, false);


		/*关闭弹窗*/
		closedBtn.addEventListener('click', function(){
			var removeBg = document.getElementById('PopBg'),
				removeBox = document.getElementById('PopBox');
			document.body.removeChild(removeBg);
			document.body.removeChild(removeBox);
		}, false)


		if( typeof options.btnCallback == 'function'){
			confirmBtn.addEventListener('click', function(){
				document.body.removeChild(document.getElementById('PopBg'));
				document.body.removeChild(document.getElementById('PopBox'));

				/*异步执行回调函数*/
				setTimeout(function(){
					options.btnCallback();
				},10)
			}, false)
		}
		
	}

 	return popDialogShow;
});