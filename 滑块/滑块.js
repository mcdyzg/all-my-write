;(function($){
	// $.extend($.fn,{
	// 	jslider:function(setting){
	// 		return this.each(function(){

	// 		})
	// 	}
	// });
	// 要用到的jQuery对象都放在构造函数的实例属性下
	var slider=function(element,options){
		this.$element=$(element);
		this.options=options;
		this.slider=this.$element.find('div:eq(1)');
		this.complete=this.$element.children('.complete');
	};


	slider.prototype.init=function(){
		this.complete.css('width',this.options.size.barwidth*this.options.size.complete);
		this.$element.css('width',this.options.size.barwidth);
        this.slider.css({'width':this.options.size.sliderwidth,'left':(this.options.size.barwidth-this.options.size.sliderwidth)*this.options.size.complete});
        var bw=this.$element.width();
        var sw=this.slider.width();
        this.options.limited={min:0,max:bw-sw};
        if(this.options.enable){
        	this.slider.on('mousedown',$.proxy(function(e){
        		var d={
        			left:parseInt(this.slider.css('left')),
        			pageX:e.pageX
        		};
        		$(document).on('mousemove',d,$.proxy(this.drag,this)).on('mouseup',$.proxy(this.drop,this));
        	},this));
        }
	}
	slider.prototype.drag=function(e){
		var d=e.data;
		var l=Math.min(Math.max(e.pageX-d.pageX+d.left,this.options.limited.min),this.options.limited.max);
		this.slider.css('left',l+'px');
		this.complete.css('width',l);
		this.options.onchanging(l/this.options.limited.max,e);
	};
	slider.prototype.drop=function(e){
		this.options.onchanged(parseInt(this.slider.css('left'))/this.options.limited.max,e);
		$(document).off('mousemove',$.proxy(this.drag,this)).off('mouseup',$.proxy(this.drop,this));
	};
	$.fn.jslider=function(option){
		return this.each(function(){
			var options=$.extend({},$.fn.jslider.default,option);
			var s=new slider(this,options);
			s.init();
		})
	};
	$.fn.jslider.default={
		enable:true,
		size:{barwidth:600,sliderwidth:25,complete:0.5},
		onchanging:function(pen,e){
			$('div.a').html(pen*100+'%');
		},
		onchanged:function(){}
	};
})(jQuery);