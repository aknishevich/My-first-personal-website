    //      Created by Alexander Knishevich
    //      My contacts:
    //              VK: https://vk.com/aknishevich
    //              E-mail: aknishevich@gmail.com
    //              Upwork-Profile: https://www.upwork.com/freelancers/~016171e34f311aeb56
var img = 1;
function prevImg(){
	if (img === 1) img = 3;
	else img--;
	$(".photo img").attr('src', 'img/slider/slide'+img+'.jpg');
}
function nextImg(){
	if (img === 3) img = 1;
	else img++;
	$(".photo img").attr('src', 'img/slider/slide'+img+'.jpg');
}