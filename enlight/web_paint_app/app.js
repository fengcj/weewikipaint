var inputBox = document.getElementById('penColor');
var inputBoxWidth = inputBox.width;
var inputBoxHeight = inputBox.height;
var canvasContext = document.getElementById('canvas').getContext('2d');
var position = {
	x: 0,
	y: 0
};

resize();

window.addEventListener('mouseover', setPosition);
window.addEventListener('mousedown', setPosition);
window.addEventListener('mousemove', draw);

window.addEventListener('resize', resize);

function resize(event) {
	canvasContext.canvas.width = window.innerWidth;
	canvasContext.canvas.height = window.innerHeight;
}

function setPosition(event) {
	position.x = event.clientX;
	position.y = event.clientY;
}

function draw(event) {

	if (event.buttons !== 1) return;
	//  console.log(event.clientX,event.clientY);
	var penColor = inputBox.value;
	console.log(penColor);
	// set pen style
	canvasContext.lineWidth = '20px';
	canvasContext.lineCap = "round";
	canvasContext.strokeStyle = penColor;

	// draw the line
	canvasContext.beginPath();
	canvasContext.moveTo(position.x, position.y);
	setPosition(event);
	canvasContext.lineTo(position.x, position.y);
	canvasContext.stroke();
}