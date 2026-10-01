function setup() {
    createCanvas(300, 300);
}

function draw() {
    background(0, 150, 150);
    // draw background as a teal

    strokeWeight(20);
    stroke(255, 255, 255, 150)
    // sets the stroke

    fill(255, 255, 0, 150);
    rectMode(CENTER);
    // uses RGB(A) to make centre brighter, as well as centers the coordinates
    rect(150, 150, 100, 300);
    rect(150, 150, 300, 100);
}