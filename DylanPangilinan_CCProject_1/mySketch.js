// Dylan Pangilinan
// Project 1
/*
My goal is to create a game where you're able to move the bomb around
trying to avoid getting hit by fireballs
*/
let fires = [];

function setup() {
	createCanvas(1000, 1000);
	bomb_one = new Explosive(0, 0);

	for (let i= 0; i <= 10; i++){
			fires[i] = new Fire(0, 0, random(2, 5));
	}

}


function draw() {
	background("#a32014");
	fill("#7d692e");
	quad(-100, 1000, 200, 500, 800, 500, 1100, 1000);


	bomb_one.display();
	bomb_one.mover();


	for (let index = 0; index < fires.length-1; index++){
		fires[index].update();
		fires[index].checkEdges();
		fires[index].display();
	}

	checkCollision();

}



function checkCollision(){
for(let i = 0; i < length - 1; i++){
	if(fires[i].collide(bomb_one)){
		bomb_one.displayDead();
		}
}	

}


