function setup() {
    createCanvas(300, 300);
    noStroke();
}

function draw() {
    background(0);
    fill(255);
    square(0, 0, 100);
    square(200, 0, 100);
    square(0, 200, 100);
    square(200, 200, 100);
}