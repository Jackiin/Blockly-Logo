function Segment(inputs) {
	this.x1 = pointerCoor[0];
	this.y1 = pointerCoor[1];
	this.x2 = this.x1+inputs*cos(radians(pointerDir)); 
	this.y2 = this.y1+inputs*sin(radians(pointerDir));
	
	this.draw = function() {
		//rgb
		let st = Array.isArray(penColor)?stroke(penColor[0],penColor[1],penColor[2]):stroke(penColor);
		line(this.x1,this.y1,this.x2,this.y2);
		pointerCoor = [this.x2,this.y2];
	}
	this.angle = function() {
		return atan2(this.y2-this.y1,this.x2-this.x1);
	}
}