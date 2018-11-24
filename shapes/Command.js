function Command(str) {
	this.cmd_str=str;
	this.type;//1:segment,2:circle,3:rectangle,4:polygon,5:rotate
	this.inputs=[];
	this.obj;
	this.end;
	//this.end=false;
	this.read = function() {
		let arr = this.cmd_str.split(" ");
		switch (arr[0]){
			case 'segment':
				this.type = 1;
			break;
			case 'circle':
				this.type = 2;
			break;
			case 'rectangle':
				this.type = 3;
			break;
			case 'polygon':
				this.type = 4;
			break;
			case 'forward':
				this.type = 5;
			break;	
			case 'backward':
				this.type = 6;
			break;			
			case 'rotate':
				this.type = 7;
			break;
			case 'pencolour':
				this.type = 8;
			break;
			case 'pointer':
				this.type = 9;
			break;
		}
		for (let n=1;n<arr.length;n++){
			if(arr[n].includes(",")){
				let arr_ = arr[n].split(",");
				arr_.forEach(v => {
					v = parseInt(v);
				});
				this.inputs.push(arr_);
			} else {
				let normal = parseInt(arr[n]);
				this.inputs.push(normal);
			}
		}
		console.log("read success!");
	}

	this.run = function() {
		let ip = this.inputs;
		switch (this.type) {
			case 1:
				if(!this.obj){
					this.obj = new Segment(ip);
				}
				this.obj.draw();
				this.end=true;
			break;
			case 2:
				if(!this.obj){
					this.obj = new Circle(ip);
				}
				this.obj.draw();
			break;
			case 3:
				if(!this.obj){
					this.obj = new Rectangle(ip);
				}
				this.obj.draw();
			break;
			case 4:

			break;
			case 5:
				pointerCoor[0] += ip[0]*cos(radians(pointerDir));
				pointerCoor[1] += ip[0]*sin(radians(pointerDir));
				this.end=true;
			break;
			case 6:
				pointerCoor[0] -= ip[0]*cos(radians(pointerDir));
				pointerCoor[1] -= ip[0]*sin(radians(pointerDir));
				this.end=true;
			break;	
			case 7:
				//clearPointer();
				pointerDir -= ip[0];
				if(abs(pointerDir)>=360){
					pointerDir=(pointerDir/abs(pointerDir))*(abs(pointerDir)%360);
				}
				//drawPointer();
				this.end=true;
			break;
			case 8:
				penColor = ip[0];
				this.end=true;
			break;
			case 9:
				pointerCoor = this.inputs[0];
			break;
		}
	}

	this.isEnd = function(){
		if(this.obj){
			return this.obj.end||this.end;
		} else {
			return this.end;
		}
	}

	this.reset = function(){

	}
}