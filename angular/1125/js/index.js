var app = angular.module('wscat', []);
		console.log(app);
		app.controller('indexCtrl', function($scope) {
			$scope.test = 'test'
			$scope.name = "小可爱的狗狗";
		});
		app.directive('wscat',function(){
			return {
				template:"<p>{{name}}</p>"
			}
		})
		//directive 的意思 ==> 指令 等同于组件 
		//指令 ng-repeat ng-click ng-app,我们也可以自己定义指令
		//指令的匿名函数返回的是对象
		// ngWscat 这样子的写法叫做驼峰写法,写到上面是要加 - 隔开  如 ng-wscat这样子
		// 这时候写html有三种写法 
		//		<ng-wscat></ng-wscat>
		//		<div ng-wscat></div>
		//		<div class="ng-wscat"></div>
		
		// directive 读作     带咧贴
		// 不建议 以ngWscat驼峰样式命名,因为当不是以属性值的形式时,在低版本浏览器会有兼容问题				
		// 如果不是驼峰写法,如ngwscat,那么直接把名字写上去就可以,不用加什么
		app.directive('ngWscat', function() {
				return {
					//限制规则
					//element   	元素,标签   E
					//attribute   	属性
					//class			类
					//M注释的存在
					// 在这里写了什么,html上什么样的格式就能出现
					// 如果什么都不写的话,即不写 restrict: 'ACE',class的不能出现
					// 不分顺序,顺序随便写 
					restrict: 'ACE',
					//模板
					// 引入的方法有两种:(1)在   template:  拼接html;  
					//				(2)templateUrl:'directive/xnav.html'引入html文件,
					//					这个html文件里只存放要引入的html,一个片段
					template: '<div class="weui-tab">' +
						'<div class="weui-navbar">' +
						'<div class="weui-navbar__item weui-bar__item_on">选项一</div>' +
						'<div class="weui-navbar__item">选项二</div>' +
						'<div class="weui-navbar__item">选项三</div>' +
						'</div>' +
						'<div class="weui-tab__panel"></div></div>',
					//templateUrl:
					replace:true,
				}
			})
		app.directive("danxuankuang",function(){
			return {
				templateUrl:'directive/danxuankuang.html'
			}
		})
			//app.service();
			//app.filter();
			
// 一个标签要不全部大写要不全部小写,一般不建议在标签里面写大写字母,如果写了那个就加-隔开,
// 注意一点绝对不要在开头写大写字母,难道要在开头加 - 吗......
// 
// 新创造的标签在html那可以写在控制器的外面,但那样就不受控制器影响了,我们一般都是写在控制器里面受控制器的影响