// Dylan Pangilinan
// Project 1
let bombs = [bomb_one, bomb_two, bomb_three];

function setup() {
	createCanvas(1000, 1000);
	background("#F5F5DC");
}


function draw() {
	bomb_one = new Explosive(0, 0);
	bomb_one.display();

	bomb_two = new Explosive(-200, 0);
	bomb_two.display();

	bomb_three = new Explosive(200, 0);
	bomb_three.display();


}


