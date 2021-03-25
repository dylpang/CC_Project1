radius = 50;	
bomb_radius = 100;
let bomb = new Explosive();


class Fire{

	constructor(x, y, s){
		this.xpos = x;
		this.ypos = y;
		this.speed = s
		this.position = new createVector(random(0, width), this.ypos);
		this.velocity = new createVector(this.speed, this.speed);

	}

	update(){ // allows movement
		this.position.add(this.velocity);

	}

	checkEdges(){ // repositions fire
		if(this.position.x > width){
			this.position.x = 0;
		}else if(this.position.x < 0){
			this.position.x = width;
		}
		if(this.position.y > height){
			this.position.y = 0;
		}else if(this.position.y < 0){
			this.position.y = height;
		}

	}


	display(){
		shape(this.position.x, this.position.y);
	}

	collide(bomb){ //boolean that checks for collision (still haven't got this to work yet)
		let distance = dist(this.position.x, this.position.y, bomb.position.x, bomb.position.y);
		if (distance < this.radius + bomb.bomb_radius){
			return true;
		}else{
			return false;
		}

	}


	

}



function shape(x, y){ // fire shape
	noStroke()
	fill("#ff9900");
	ellipse(x, y, 50, 50);
	triangle(x-25, y, x-25, y-50, x+20, y-15);
	fill("#ffcc80")
	ellipse(x,y, 25, 25);
}

