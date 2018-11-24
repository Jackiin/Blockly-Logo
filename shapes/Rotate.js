function Rotate() {
	this.end = false;
	this.do = function(a){
		let angle = -(a/360)*2*Math.PI;
		rotate(angle);
		this.end = true;
	}
}