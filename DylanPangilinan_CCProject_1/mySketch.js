// Dylan Pangilinan
// Project 1
/*
My goal is to create a game where you're able to move the bomb around
trying to avoid getting hit by fireballs
*/
let fires = [];
let particles = [];

function setup() {
	createCanvas(1000, 1000);
	bomb_one = new Explosive(0, 0);

	for (let i= 0; i <= 10; i++){
			fires[i] = new Fire(0, 0, random(2, 5));
	}

}


function draw() {
	//platform
	background("#a32014");
	fill("#7d692e");
	quad(100, 700, 200, 400, 800, 400, 900, 700);
	rect(125, 850, 50, 300);
	rect(875, 850, 50, 300);

	bomb_one.display();
	bomb_one.mover();

	let p = new Smoke();
	particles.push(p);

	for (let index = 0; index < particles.length; index++){
		particles[index].update();
		particles[index].display();
	}




	for (let index = 0; index < fires.length; index++){
		fires[index].update();
		fires[index].checkEdges();
		fires[index].display();
	}

	if(mouseIsPressed){
		bomb_one.displayDead();
	}

}


/*
function checkCollision(){
for(let i = 0; i < length - 1; i++){
	if(fires[i].collide(bomb_one)){
		bomb_one.displayDead();
		}
}
}
*/

