// Dylan Pangilinan
// Project 1

let bomb;

function setup() {
	createCanvas(1000, 1000);
	background("#F5F5DC");
}


function draw() {
	bomb = new Explosive(0, 0);
	bomb.display();


}


