(function($){
	$.extend({
		tab:function(options){
			var defaults={
				width:'615',
				height:'300',
				right:'300',
				top:'0',
				trigger:'hover'
			}
			var settings=$.extend(defaults,options);
			//初始化
			var tabwidth=settings.width-115;
			$('.tab>div').css('width',tabwidth);
			$('.tab>div').css('height',settings.height);
			$('.tab').css('height',settings.height);
			// $('.tab').css('width',settings.width);
			$('.tab>div').css('right',settings.right+'px');
			$('.tab>div').css('top',settings.top+'px');
			$('.tab>ul').css('right',parseInt(settings.right)+parseInt(tabwidth)+'px');
			$('.tab>ul').css('top',parseInt(settings.top)+30+'px');


			$(".tab>div").eq(0).css("display","block");
			if(settings.trigger=="hover"){
				$(".tab>ul>li>a").hover(function(){
			      // alert(this.dataset.num);
			      // alert($(this).data("num"));这两个可以获取data的值
			      $(".tab>ul>li>a").removeClass('hover');
			      $(this).addClass('hover');
			      $(".tab>div").css("display","none");
			      // $("div").eq(this.dataset.num).css("display","block");//可以不用data方法，上方li中的data-num选填
			      $(".tab>div").eq($(this).parent().index()).css("display","block");

	   			 });
			}else if(settings.trigger=='click'){
				$(".tab>ul>li>a").click(function(){
			      // alert(this.dataset.num);
			      // alert($(this).data("num"));这两个可以获取data的值
			      $(".tab>ul>li>a").removeClass('hover');
			      $(this).addClass('hover');
			      $(".tab>div").css("display","none");
			      // $("div").eq(this.dataset.num).css("display","block");//可以不用data方法，上方li中的data-num选填
			      $(".tab>div").eq($(this).parent().index()).css("display","block");

	   			 });
			}
		    
		}
	})
})(jQuery);

	//js实现思路
    // window.onload=function(){
      
    //   for (var i = 0; i < document.getElementsByTagName("li").length; i++) {
    //     (function(){
    //       var num=i;
    //       document.getElementsByTagName("li")[num].onclick=function(){
    //       document.getElementsByTagName("div")[num].style.display="block";
    //       }
    //     })()  
    //   }
    // }