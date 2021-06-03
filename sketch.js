function setup() {
  createCanvas(400, 400);
  background("blue");
}

function draw() {
  fill("rgba(230,0,0,.25)");
  stroke("magenta");
  bezier(400, 0, 70, 60, 210, 210, 0, 400);
  stroke("magenta");
  bezier(400, 0, 90, 1, 21, 210, 0, 400);
  stroke("magenta");
  bezier(300, 0, 90, 1, 21, 210, 0, 300);
  stroke("red");
  bezier(0, 300, 1, 90, 210, 21, 300, 0);
  fill("rgba(20,215,0,.25)");
  stroke("red");
  bezier(300, 0, 1, 90, 210, 21, 300, 400);
  strokeWeight(2);
  stroke("blue");
  bezier(300, 0, 20, 90, 10, 1, 300, 400);
  stroke("magenta");
  bezier(300, 0, 20, 90, 10, 1, 400, 400);
  stroke("magenta");
  bezier(300, 0, 20, 90, 10, 1, 400, 200);
  stroke("magenta");
  bezier(300, 0, 20, 90, 10, 1, 400, 300);
  stroke("blue");
  bezier(200, 0, 150, 150, 150, 150, 0, 100);
  fill("rgba(10,0,150,.20)");
  stroke("blue");
  bezier(200, 0, 170, 170, 170, 170, 0, 100);
  
  bezier(200, 0, 150, 150, 150, 150, 0, 100);
  fill("rgba(150,0,255,.50)");
  stroke("blue");
  bezier(100, 0, 170, 170, 170, 170, 0, 100)
  
  
}
