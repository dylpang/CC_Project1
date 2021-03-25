radius = 50;	

class Fire{

	constructor(x, y, s){
		this.xpos = x;
		this.ypos = y;
		this.speed = s
		this.position = new createVector(random(0, width), this.ypos);
		this.velocity = new createVector(this.speed, this.speed);
	}

	update(){
		this.position.add(this.velocity);

	}

	checkEdges(){
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

	collide(bomb){
		let distance = dist(this.position.x, this.position.y, bomb.position.x, bomb.position.y);
		if (distance < this.radius + bomb.radius){
			return true;
		}else{
			return false;
		}

	}


	

}



function shape(x, y){
	noStroke()
	fill("#ff9900");
	ellipse(x, y, 50, 50);
	triangle(x-25, y, x-25, y-50, x+25, y);
	fill("#ffcc80")
	ellipse(x,y, 25, 25);
}

