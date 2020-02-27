setTimeout(function(){ 
	document.querySelector('div#exampleModalCenter').style.display = "block";
	document.querySelector('div#exampleModalCenter').style.opacity  = "1";
}, 3000);
new WOW().init();
document.querySelector('button#close').onclick = () => {
	document.querySelector('div#exampleModalCenter').style.display = "none";
	document.querySelector('div#exampleModalCenter').style.opacity  = "0";
}