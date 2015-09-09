
var $=function(_this){
	return new Base(_this);
}

function Base(_this){
	this.elements=[];
	//获取ID节点
	if(_this!=undefined){//this是一个对象，undefined也是一个对象
		this.elements[0]=_this;
	}
	this.getId=function(id){
		this.elements.push(document.getElementById(id));
		return this;
	};


	//获取元素节点
	this.getTagName=function(tag){
		var tags=document.getElementsByTagName(tag);
		for(var i=0;i<tags.length;i++){
			this.elements.push(tags[i]);
		}
		return this;
	};
}
Base.prototype.getClass=function(className){
	var all=document.getElementsByTagName("*");
	for (var i = 0; i < all.length; i++) {
		if(all[i].className==className){
			this.elements.push(all[i]);
		}
	};
	return this;
}
//获取某一个节点
Base.prototype.getElement=function(num){
	var element=this.elements[num];
	this.elements=[];
	this.elements[0]=element;
	return this;
}
Base.prototype.css=function(attr,value){
	for (var i = 0; i < this.elements.length; i++) {
		if(arguments.length==1){
			return this.elements[i].style[attr];
		}
		this.elements[i].style[attr]=value;
	};
	return this;
}
//添加class
Base.prototype.addClass=function(className){
	for (var i = 0; i < this.elements.length; i++) {
		if(!this.elements[i].className.match(new RegExp('(\\s|^)'+className+'(\\s|$)')))//正则，判断类名不重复是返回true
		this.elements[i].className+=' '+ className;//空格必需，因为不加空格的话类名会连成一个单词
	};
	return this;
}
Base.prototype.removeClass=function(className){
	for (var i = 0; i < this.elements.length; i++) {
		if(this.elements[i].className.match(new RegExp('(\\s|^)'+className+'(\\s|$)')))
		this.elements[i].className=this.elements[i].className.replace(new RegExp('(\\s|^)'+className+'(\\s|$)'),' ')
	};
	return this;
}
//添加link或style的css规则
Base.prototype.addRule=function(num,selectorText,cssText,position){
	var sheet=document.styleSheets[num];
	if(typeof sheet.insertRule!='undefined'){
		sheet.insertRule(selectorText+'{'+cssText+'}',position)//适用于w3c标准
	}else if(typeof sheet.addRule!='undefined'){
		sheet.addRule(selectorText,cssText,position);//ie标准
	}
	return this;
}
Base.prototype.removeRule=function(num,index){
	var sheet=document.styleSheets[num];
	if(typeof sheet.deleteRule!='undefined'){//w3c
		sheet.deleteRule(index);//index表示的是要删的是第几条
	}else if(typeof sheet.removeRule!='undefined'){//ie
		sheet.removeRule(index);
	}
	return this;
}
Base.prototype.html=function(str){
	if(arguments.length==0){
		return this.elements[0].innerHTML;
	}
	for (var i = 0; i < this.elements.length; i++) {
		this.elements[i].innerHTML=str;
	};
	return this;
}
Base.prototype.click=function(fn){
	for (var i = 0; i < this.elements.length; i++) {
		this.elements[i].onclick=fn;
	};
	return this;
}
Base.prototype.hover=function(over,out){
	for (var i = 0; i < this.elements.length; i++){
		this.elements[i].onmouseover=over;
		this.elements[i].onmouseout=out;
	}
	return this;
};
Base.prototype.show=function(){
	for (var i = 0; i < this.elements.length; i++){
		this.elements[i].style.display='block';
	}
	return this;
}
Base.prototype.hide=function(){
	for (var i = 0; i < this.elements.length; i++){
		this.elements[i].style.display='none';
	}
	return this;
}
Base.prototype.center=function(width,height){
	var top=(document.documentElement.clientHeight-height)/2;
	var left=(document.documentElement.clientWidth-width)/2;
	for (var i = 0; i < this.elements.length; i++){
		this.elements[i].style.top=top+'px';
		this.elements[i].style.left=left+'px';
	}
	return this;
}
Base.prototype.resize=function(fn){
	window.onresize=fn;
	return this;
}