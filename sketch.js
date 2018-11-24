var pointerCoor;
var pointerDir;
var pointerSignCoor;
var penColor;
var bgColor;
var rotateAngle;
var commands;//commands
var startIndex;

function setup() {
	let d = document.getElementById('draw');
	let canvas = createCanvas(600,600);
	canvas.parent(d);
	addBr('#draw');
	addButton("Run the program",'primary','runCode','#draw');
	let clsBtn = addButton("Clear",'secondary','clearCanvas','#draw',true);
	clsBtn.mouseClicked(clearCanvas);
	init();
	background(bgColor);
}

function init() {
	running = false;
	runned = false;
	pointerCoor = [0,0];
	pointerSignCoor = [250,-265];
	pointerDir = -90; 
	penColor = 245;
	bgColor = 50;
	//rotateAngle = 0;
	commands = [];//commands
	startIndex=0;
}

function draw() {
	/*
	if(clear){
		clearCanvas();
	}
	*/
	if(running){
		translate(width/2,height/2);
		clearPointer();
		//rotate(rotateAngle*2*Math.PI/360);
		if(!runned){
			for (let n=startIndex;n<startIndex+1;n++){
				commands[n].run();
				if(commands[n].isEnd()){
					if(n==commands.length-1){
						console.log("successful run!");
						document.getElementById('clearCanvas').disabled = false;
						runned = true;
					} else {
						startIndex = n+1;
					}
				}
			}
		}
		drawPointer();
	}
}

var clearPointer = function() {
	push();
	fill(bgColor);
	noStroke();
	let x = pointerSignCoor[0];
	let y = pointerSignCoor[1];
	//line(x,y,x+25*cos(radians(pointerDir)),y+25*sin(radians(pointerDir)));
	rect(x-30,y-30,60,60);
	pop();
}

var drawPointer = function() {
	push();
	stroke(255);
	let x = pointerSignCoor[0];
	let y = pointerSignCoor[1];
	line(x,y,x+25*cos(radians(pointerDir)),y+25*sin(radians(pointerDir)));
	pop();
}

function addBr(p) {
	let br = createElement('br');
	checkParent(br,p);
	return br;
}

function addButton(txt,c,id,p,d) {
	let btn = createButton(txt);
	btn.class(c);
	btn.id(id);
	checkParent(btn,p);
	checkDisability(btn,d);
	return btn;
}

function checkParent(e,p){
	if(!p){
		e.parent('body');
	}else{
		e.parent(p);
	}
}

function checkDisability(e,d){
	if(d){
		e.attribute('disabled',d);
	}
		
}

function clearCanvas(event){
	init();
	background(bgColor);
	document.getElementById('runCode').disabled = false;
	document.getElementById('clearCanvas').disabled = true;
}