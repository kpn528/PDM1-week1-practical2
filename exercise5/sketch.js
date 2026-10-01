function setup() {
    createCanvas(800, 800);
    strokeWeight(20);
}

function draw() {
    // background design
    background(255, 125, 125);

    stroke(255, 255, 255, 150)
    // sets the stroke

    fill(255, 255, 0, 150);
    rectMode(CENTER);
    // uses RGB(A) to make centre brighter, as well as centers the coordinates
    rect(200, 200, 100, 400);
    rect(200, 200, 400, 100);

    rect(600, 200, 100, 400);
    rect(600, 200, 400, 100);

    rect(200, 600, 100, 400);
    rect(200, 600, 400, 100);

    rect(600, 600, 100, 400);
    rect(600, 600, 400, 100);

    // start of the body
    stroke(255, 255, 255 ,150);

    fill(255, 0, 0);
    circle(100, 375, 100);

    fill(255, 125, 0);
    circle(175, 400, 100);

    fill(125, 255, 0);
    circle(250, 375, 100);

    fill(0, 255, 125);
    circle(325, 400, 100);

    fill(125, 0, 255);
    circle(400, 375, 100);

    fill(125, 0, 125);
    circle(475, 400, 100);

    fill(125, 125, 0);
    circle(550, 375, 100);

    fill(0, 125, 125);
    circle(625, 400, 100);

    fill(255, 0, 255);
    circle(700, 375, 100);

    // the eyes

    noStroke();
    fill(0);
    circle(675, 365, 40);
    circle(725, 365, 40);

    fill(255);
    circle(675, 365, 20);
    circle(725, 365, 20);
}