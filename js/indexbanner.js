 $(document).ready(function() {
 	var _now = 0;
 	var oul = $(".myslidetwo");
 	var numl = $(".label li");
 	var wid = $(".myslide").eq(0).width();
 	//数字图标实现
 	numl.mouseover(function() {
 			var index = $(this).index();
 			$(this).addClass("current").siblings().removeClass();
 			oul.animate({
 				'left': -wid * index
 			}, 200);
 		})
 	//动画函数
 	function ani() {
 		numl.eq(_now).addClass("current").siblings().removeClass();
 		oul.animate({
 			'left': -wid * _now
 		}, 500);
 	}
 	//以下代码如果不需要自动轮播可删除
 	//自动动画
 	var _interval = setInterval(showTime, 2000);

 	function showTime() {
 		if(_now == numl.size() - 1) {
 			_now = 0;
 		} else _now++;
 		ani();
 	}
 	//鼠标停留在画面时停止自动动画，离开恢复
 	$(".myslide").mouseover(function() {
 		clearTimeout(_interval);
 	});
 	$(".myslide").mouseout(function() {
 		_interval = setInterval(showTime, 2000);
 	});
 });