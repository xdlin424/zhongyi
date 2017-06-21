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
	   	
 	for(var i=1;i<7;i++){
	   	(function(k){
			var oul = $(".floor"+ k + " .detlist");
			var num = $(".floor"+ k + " .navlist li");
			var wid = $(".floor"+ k + " .detlist li").eq(0).width();
			
			num.mouseover(function() {
	   		num.removeClass("current1");
	   		var index =  num.index($(this));
	   		$(this).addClass("current1").siblings().removeClass();
	   		oul.animate({
	   			'left': -wid * index 
	   		}, 0);
	   	})
	   	})(i)
 	}
 	
 	
 	// 6. 页面固定元素移入移出
   	var time = true;
   	var title = $('#service .tit');
   	title.click(function(){
// 		return false;
   		if(time){
   			$('#service').animate({right:'0'},200);
   		}else{
   			$('#service').animate({right:'-150px'},200);
   		}
   		time = !time;
   	})
 	
 	
 	
 	
 	
}) 	