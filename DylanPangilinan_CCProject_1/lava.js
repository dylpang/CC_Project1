// simple rising lava effect
class Lava {
	constructor(){
		this.x = 500;
		this.y = 2000;
		this.velocity_y = -.25;

	}

	update(){
		this.y += this.velocity_y;
	}

	display(){
		fill(207, 18, 31, 240);
		rect(this.x, this.y , 1000, 2000);
	}
}