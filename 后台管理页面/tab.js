(function($){
	$.extend({
		tab:function(options){
			// $(".tab>div").eq(0).css("display","block");
		    $(".tab>ul>li").click(function(){
		      // alert(this.dataset.num);
		      // alert($(this).data("num"));这两个可以获取data的值
		      $(".tab>.page").css("display","none");
		      // $("div").eq(this.dataset.num).css("display","block");//可以不用data方法，上方li中的data-num选填
		      $(".tab>.page").eq($(this).index()).css("display","block");

   			 })
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