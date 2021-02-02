
var drawing = [];
var currentPath = [];

function setup() {
  var canvas = createCanvas(1250,550);
  canvas.mousePressed(startPath);
  canvas.mouseReleased(endPath);
}

function startPath(){
   currentPath = [];
   drawing.push(currentPath);
}

function endPath(){

}

function draw() {
  background("black");

  strokeWeight(5);
  stroke("lime");
  fill ("blue");
  textSize(20)
  text("Your own Blackboard!",600,50);
  if(mouseIsPressed){
    var point = {
      x : mouseX,
      y : mouseY
    }
    
    currentPath.push(point);

  } 

  noFill("blue");
  stroke(color(random(0, 255), random(0, 255), random(0, 255)));

  strokeWeight(10);

  for(var i = 0; i< drawing.length; i++){
    var path = drawing[i];
    beginShape();
    for(var p = 0; p< path.length; p++){
        vertex(path[p].x, path[p].y);
    }
    endShape();
  }

}