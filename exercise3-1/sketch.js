function setup() {
    createCanvas(300, 300);
    noStroke();
}

function draw() {
    background(0);
    fill(255);
    rectMode(CENTER)
    square(50, 50, 100);
    square(250, 50, 100);
    square(50, 250, 100);
    square(250, 250, 100);
}