(function(){
	$.extend({
		treelist:function(){
		  $('.tree-list li').each(function(){
	        if($(this).children().length==0)
	          $(this).css('list-style','none');
	      });
	      $('.tree-list>ul').show();
	      $('.tree-list ul').click(function(e){
	      	e.stopPropagation();
	      });
	      $('.tree-list li').click(
	        function(e){
	        e.stopPropagation();
	        // var _this=$(this);
	        // var flag=0;
	        // (function(){
	        //   if(flag==0){
	        //     _this.css('list-style-image','url(img/bottom.png)');
	        //     flag=1;
	        //   }else{
	        //     _this.css('list-style-image','url(img/bottom.png)');
	        //     flag=0;
	        //   }

	        // })();
	        if(!$(this).hasClass('active')){
	          if(!$(this).children().length==0){
	            $(this).children().show();
	            $(this).css('list-style-image','url("img/bottom.png")').addClass('active');
	          }
	        }else{
	          $(this).css('list-style-image','url("img/right.png")').removeClass('active').children().hide();
	        }
		  }
	   	  );
	  }
	});
})(jQuery);