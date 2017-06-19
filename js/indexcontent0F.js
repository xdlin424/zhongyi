 $(document).ready(function() {
 	var _now = 0;
 	var oul = $(".myslidetwol");
 	var numl = $(".labell li a");
 	var wid = $(".myslidel").eq(0).width();

 	//数字图标实现
 	numl.mouseover(function() {
 		numl.removeClass("currentl");
 		var index =  numl.index($(this));
 		$(this).addClass("currentl").siblings().removeClass();
 		oul.animate({
 			'left': -wid * index
 		}, 0);
 	})
 	
 	
 	// content 1-6F js鼠标移入样式
 	var oul = $(".detlist");
 	var num1 = $(".navlist li");
 	var wid = $(".detlist li").eq(0).width();

 	//鼠标移入实现
 	num1.mouseover(function() {
 		num1.removeClass("current1");
 		var index =  num1.index($(this));
 		$(this).addClass("current1").siblings().removeClass();
 		oul.animate({
 			'left': -wid * index 
 		}, 0);
 	})
 	
}) 	