class ControlPoint {
  constructor(x, y, c) {
    this.x = x;
    this.y = y;
    this.c = c;
  }
  
  show() {
    fill(this.c);
    noStroke();
    ellipse(this.x, this.y, 8);
  }
}

let p0, p1, p2, p3;
let t;
let res = 100;

function setup() {
  createCanvas(400, 400);
  t0 = 0;
  delta = 0.01;
}

function draw() {

  background(0);
  p0 = new ControlPoint(100, 0.5*height, color(255, 255, 255));
  p1 = new ControlPoint(150, 0.2*height, color(255, 0, 0));
  p2 = new ControlPoint(250, 0.2*height, color(0, 255, 0));
  p3 = new ControlPoint(300, 0.5*height, color(0, 100, 255));
  
  p0.show();
  p1.show();
  p2.show();
  p3.show();
  
  noFill();
  stroke(255);
  beginShape();
  
  for(i = 0; i < res; i++) {
    t = map(i, 0, res, 0, 1);
    let Bx =   ( Math.pow((1-t), 3) * p0.x ) +
               ( 3 * Math.pow((1-t), 2) * t * p1.x ) +
               ( 3 * (1-t) * Math.pow(t, 2) * p2.x ) +
               ( Math.pow(t, 3) * p3.x )
    
    let By =   ( Math.pow((1-t), 3) * p0.y ) +
               ( 3 * Math.pow((1-t), 2) * t * p1.y ) +
               ( 3 * (1-t) * Math.pow(t, 2) * p2.y ) +
               ( Math.pow(t, 3) * p3.y )
    
    vertex(Bx, By);
  }
  
  endShape();
  
  let tx =   ( Math.pow((1-t0), 3) * p0.x ) +
             ( 3 * Math.pow((1-t0), 2) * t0 * p1.x ) +
             ( 3 * (1-t0) * Math.pow(t0, 2) * p2.x ) +
             ( Math.pow(t0, 3) * p3.x )

  let ty =   ( Math.pow((1-t0), 3) * p0.y ) +
             ( 3 * Math.pow((1-t0), 2) * t0 * p1.y ) +
             ( 3 * (1-t0) * Math.pow(t0, 2) * p2.y ) +
             ( Math.pow(t0, 3) * p3.y )

  fill(255);
  noStroke();
  ellipse(tx, ty, 8);
  console.log(t);
  t0 += delta;
  
  if(t0 > 1) {
    delta = delta * -1;
  }else if(t0 < 0) {
    delta = delta * -1;
  }
  
}