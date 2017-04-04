var count = 0;

function setup() {
    var can = createCanvas(windowWidth, 650);
    can.parent('p5-sketch');
}

function draw() {
    var r = 255;
    var g = 255;
    var b = 255;
    var a = Math.floor(Math.random() * 82);
    background(0);
    drawCircle(width / 2, height / 2, count);
    count += 1;
    if (count === 2000)
        count = 1999;
}

function windowResized() {
    resizeCanvas(windowWidth, 650);
}

function drawCircle(x, y, radius) {
    noFill();
    var r = 255;
    var g = 255;
    var b = 255;
    var a = Math.floor(Math.random() * 82);
    stroke(color(r, g, b, a));
    ellipse(x, y, radius, radius);
    if (radius > 200) {
        drawCircle(x + radius, y, radius / 1.5);
        drawCircle(x - radius, y, radius / 1.5);
    }
}