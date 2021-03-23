
class Explosive{
	constructor(x, y){
		this.xpos = x;
		this.ypos = y;
	}

	display() {
		//left leg
		noStroke();
		fill("#FF9A25");
		ellipse(this.xpos + 475, this.ypos + 545, 45, 35);
		//fuse
		strokeWeight(2);
		stroke(0)
		fill(210,105,30);
		rectMode(CENTER);
		rect(this.xpos + 500, this.ypos + 450, 10, 50);
		// top
		strokeWeight(2);
		stroke(0);
		fill(100);
		rectMode(CENTER);
		rect(this.xpos + 500, this.ypos + 450, 50, 25, 20);
		noStroke();
		// outer circle
		fill(0);
		circle(this.xpos + 500,this.ypos + 500, 100);

		//eyes	
		fill(255);
		ellipse(this.xpos + 485, this.ypos + 485, 15,  25);
		ellipse(this.xpos + 515, this.ypos + 485, 15,  25);
		//right leg
		fill("#FF9A25");
		ellipse(this.xpos + 525, this.ypos + 545, 45, 35);


	}

}	