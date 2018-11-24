var ws;
var view_src=false;
var code_txt='';
var running = false;
var runned = false;
var clear = false;

window.onload = function(){
	ws = Blockly.inject('blocklyDiv',{toolbox:document.getElementById('toolbox'),trashcan:true});//work space
	ws.addChangeListener(updateCode);
	let vsBtn = document.getElementById('viewCode');
	let rcBtn = document.getElementById('runCode');
	vsBtn.addEventListener("click",viewSrc);
	rcBtn.addEventListener("click",runCode);
}

function updateCode(event) {
	let code = Blockly.JavaScript.workspaceToCode(ws);
	code_txt = code;
	if(view_src){
		document.getElementById('codeArea').value = code_txt;
	}
}

function viewSrc(event) {
	let btn = event.target;
	view_src=!view_src;
	btn.innerHTML=view_src?"Hide source code":"View source code";
	document.getElementById('codeArea').value=view_src?code_txt:'';
	//btn.disabled = true;
}

function runCode(event) {
	let btn = event.target;
	btn.disabled = true;//disable the button before drawing is done
	//block to code 
	Blockly.JavaScript.addReservedWords('code');
	var code = Blockly.JavaScript.workspaceToCode(ws);
	try {
		eval(code);
	} catch (e) {
		alert(e);
	}
	running = true;
}

function drawShape(shapeType,arr){
	if(shapeType&&arr){
		//let type = shapeType.toString();
		let str='';
		if(Array.isArray(arr)){
			arr.forEach(e => {
				str = str+' '+e;
			});
		} else {
			str=str+' '+arr;
		}
		str=(shapeType+str).toString();
		let cmd = new Command(str);
		cmd.read();
		commands.push(cmd);
		//console.log(commands[0]);
	}
}

function runCommand(cmdType,arr){
	if(cmdType&&arr){
		let str='';
		if(Array.isArray(arr)){
			arr.forEach(e => {
				str = str+' '+e;
			});
		} else {
			str=str+' '+arr;
		}
		str=(cmdType+str).toString();
		let cmd = new Command(str);
		cmd.read();
		commands.push(cmd);
	}
}

var pickColor = function(r,g,b){
	let arr = r+','+g+','+b;
	return arr;
}

/*
function addCmd(type,inputs) {
	let shape;
	switch (type) {
		case 'circle':
			shape = new Circle(inputs.r,inputs.c);
		break;
	}
	commands.push(shape);
	return shape;
}
*/
/*
function removeCmd(id) {
	commands.splice(id,commands.length-(id+1));
}
*/

