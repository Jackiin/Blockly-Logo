function Rectangle(inputs){
	this.draw_count=0;
	this.coor = pointerCoor;
	this.width = inputs[0];
	this.height = inputs[1]?inputs[1]:this.width;
	this.end = false;
	//this.segments = [];
	this.draw = function() {
		if(!this.end){
			let side = floor(this.draw_count/10);//0,1,2,3
			if(this.draw_count%10==0){
				if(this.draw_count>0){
					pointerDir+=90;
				}
			}
			let segment;
			if (side==0||side==2){
				segment = new Segment(this.width/10);
			} else if (side==1||side==3){
				segment = new Segment(this.height/10);
			}
			segment.draw();
			this.draw_count++;
			if(this.draw_count==40){
				//console.log(pointerDir);
				pointerDir+=90;
				this.end = true;
			}
		}
	}
}