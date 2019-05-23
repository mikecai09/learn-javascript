var t = 0;
var myvar = setInterval(Timer, 1000);

function Timer(){
	t+=1;
	if(t==3600){
		alert("You need a break");
	}
}