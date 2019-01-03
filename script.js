var current = document.querySelector('h3');
var color1 = document.getElementById('color1');
var color2 = document.getElementById('color2');
var body = document.querySelector('body');


function changeGradient() {
	var currentGradient = 'background: linear-gradient(to right, ' 
		+ color1.value + ', ' + color2.value + ');';
	body.setAttribute('style', currentGradient);
	current.textContent = currentGradient;
}


body.addEventListener('input', changeGradient);
