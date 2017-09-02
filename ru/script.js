var photo = document.getElementsByClassName('photo');
var left = document.getElementsByClassName('left');
var text = document.getElementsByClassName('text');
var menu = document.getElementById('menu');
var hello = document.getElementsByClassName('hello');


var width = window.innerWidth;
var height = window.innerHeight;

function checkScreen(w, h){
	if (w > h){
		menu.style.font = '3vw';
		left[0].style.width = '40vw';
		left[0].style.height = '100vh';
		text[0].style.width = '60vw';
		text[0].style.height = '100vh';
		text[0].style.font = '8vh';
		photo[0].style.width = '35vh';
		photo[0].style.height = '55vh';
		photo[0].style.margin = '0px';
		photo[0].style.left = '10vw';
		hello[0].style.left = '0px';
	}
	else {
		menu.style.font = '3vh';
		left[0].style.width = '100vw';
		left[0].style.height = '50vh';
		text[0].style.width = '100vw';
		text[0].style.height = '50vh';
		text[0].style.font = '8vw';
		photo[0].style.width = '35vw';
		photo[0].style.height = '55vw';
		photo[0].style.left = '0px';
		hello[0].style.margin = '0 auto';
		photo[0].style.margin = '0 0 50vh 30%';
	}
}
checkScreen(width, height);
window.onresize = function () {
	var width = window.innerWidth;
	var height = window.innerHeight;
  checkScreen(width, height);
}