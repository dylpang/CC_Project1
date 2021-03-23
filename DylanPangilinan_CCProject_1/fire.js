let position;
let velocity;
let acceleration;

class Fire{
	constructor(x, y){
		this.xpos = x;
		this.ypos = y;
		this.position = new createVector(500, 500);
		this.velocity = new createVector(2,3);
	}

	update(){
		this.position.add(this.velocity);

	}


	display(){
		shape(this.xpos, this.ypos);
	}

	

}


function shape(x, y){
	fill("#ff9900");
	ellipse(x, y, 50, 50);
	triangle(x-25, y, x-25, y-50, x+25, y);
	fill("#ffcc80")
	ellipse(x,y, 25, 25);

}