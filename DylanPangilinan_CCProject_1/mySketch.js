// Dylan Pangilinan
// Project 1

let fires = [];

function setup() {
	createCanvas(1000, 1000);

	bomb_one = new Explosive(0, 0);

	for (let i= 0; i <= 10; i++){
			fires[i] = new Fire(0, 0, random(2, 5));
	}
}


function draw() {
	background("#F5F5DC");
	bomb_one.mover();
	bomb_one.display();


	for (let index = 0; index < fires.length-1; index++){
		fires[index].update();
		fires[index].checkEdges();
		fires[index].display();
	}



}



function checkCollision(){
	if(fires.collide(bomb_one)){
		bomb_one.displayDead();
	}


}


