new WOW().init();
setTimeout(function(){ 
	document.querySelector('div#exampleModalCenter').style.display = "block";
	document.querySelector('div#exampleModalCenter').style.opacity  = "1";
}, 2000);
document.querySelector('button#close').onclick = () => {
	document.querySelector('div#exampleModalCenter').style.display = "none";
	document.querySelector('div#exampleModalCenter').style.opacity  = "0";
}