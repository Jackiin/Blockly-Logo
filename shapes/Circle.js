function Circle(inputs) {
	this.draw_count=1;
	//this.coor = pointerCoor;
	this.radius = inputs[0];
	this.end = false;
	//this.segments = [];
	this.draw = function() {
		if(!this.end){
			//let angle = -(this.draw_count*Math.PI/15);
			//let id = this.draw_count-1;
			if(this.draw_count==1){
				pointerDir = pointerDir+6;
			}
			/*
			let x = this.coor[0]+this.radius-this.radius*cos(angle);
			let y = this.coor[1]+this.radius*sin(angle);
			*/
			//line(pointerCood[0],pointerCood[1],x,y);
			//let inputs = [];
			//this.segments.push(new Segment(TWO_PI*this.radius/30));
			let segment = new Segment(TWO_PI*this.radius/30);
			segment.draw();
			//pointerCoor = [this.segments[id].x2,this.segments[id].y2];
			pointerDir = degrees(segment.angle())+12;//rotate pointer
			this.draw_count++;
			if(this.draw_count==31){
				pointerDir = floor(pointerDir-6);
				//console.log(pointerDir);
				this.end = true;
			}
		}
	}
}