;(function($) {
$.extend({
	lunbo:function(options){
		var defaults={
			time:'3000',   //轮播间隔的时间
			color:'red',   //指示点的背景色
			width:'1200',  //图片区域的宽
			height:'250'   //图片区域的高
		};
		var settings=$.extend(defaults,options);
		//设置图片区域宽高
		$('#banner img').css({
			'width':settings.width,
			'height':settings.height
		});
		$('#banner').css({
			'width':settings.width,
			'height':settings.height
		});
		//计数器
		var banner_index=0;
		//自动轮播
		auto();
		var banner_timer=setInterval(auto,settings.time);
		//手动轮播
		$('#banner>.point>li').hover(function(){
			clearInterval(banner_timer);
			$('#banner>.point>li').eq($(this).index()).css('background-color',settings.color).siblings().css('background-color','#666');
			banner(this);
		},function(){
			banner_index=$(this).index()+1;
			banner_timer=setInterval(auto,settings.time);
		});
		// $('#banner>.prev').click(function(){
		// 	clearInterval(banner_timer);
		// 	if (banner_index<=0) {
		// 		banner_index=$('#banner>.pic>li').length-1;
		// 		banner($('#banner>.point>li').eq(banner_index).get(0));
		// 	}else{
		// 		banner_index--;
		// 		banner($('#banner>.point>li').eq(banner_index).get(0));
		// 	}
		// 	// banner_index++;
		// 	banner_timer=setInterval(auto,2000);
		// });
		//轮播函数
		function banner(o){
			$('#banner>.pic>li').css({'opacity':'0'});
			$('#banner>.pic>li').eq($(o).index()).animate({opacity:'1'});
		}
		function auto(){
			if (banner_index>=$('img').length) banner_index=0;
			$('#banner>.point>li').eq(banner_index).css('background-color',settings.color).siblings().css('background-color','#666');
			banner($('#banner>.point>li').eq(banner_index).get(0));
			banner_index++;
		}
	}
})
})(jQuery);