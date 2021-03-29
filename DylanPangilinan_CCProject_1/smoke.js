// I got lots of help from the coding train to make this smoke effect
// https://www.youtube.com/watch?v=UcdigVaIYAk&ab_channel=TheCodingTrain

class Smoke{
	constructor(){
		this.x = 500;
		this.y = 400;
		this.velocity_x = random(-5, 5);
		this.velocity_y = random(-5, -10);
		this.opac = 255;

	}

	update(){
		this.x += this.velocity_x;
		this.y += this.velocity_y;
		this.opac -= 5;
	}

	display(){
	fill(70, this.opac);
	ellipse(this.x, this.y, 50);



	}






}