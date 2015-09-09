function setcookie(name,value,hours){
	var date=new Date();
	var expires=new Date();
	expires.setTime(date.getTime()+hours*60*60*1000);
	// document.cookie=name+'='+value+';expires='+expires.toUTCString();
	document.cookie=name;
	alert(document.cookie);
}
function getcookie(name){
	// var cookie=document.cookie.split(';');
	var cookie=document.cookie;
	var index=cookie.indexOf(name);
	if(index!==-1&&cookie!==''){
		return cookie.substring(index,cookie.length+1);
	}
}
function login(){
	var user=document.getElementById('user').value;
	// $('#password')
	// $('#comfirm')
	// $('#mail')
	// $('#sex')
	setcookie('user',user,1);
	// var cookie=getcookie('user');
	// alert(cookie);

}