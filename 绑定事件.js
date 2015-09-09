function addEvent(el,name,fn){
	if (el.addEventListener)
		return el.addEventListener(name,fn,false);//false代表同步
	if(el.attachEvent)
		return el.attachEvent('on'+name,fn);
}