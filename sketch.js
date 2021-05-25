var countDistanceX=0
function preload()
{}

function setup() {
  createCanvas(9000, 668);
  

  for(var i=0; i<20; i++){
platform1= new Platform(countDistanceX)
gap= random([10, 20, 30, 5])
countDistanceX=countDistanceX+platform1.rw

  }
  }





function draw() {
  background('skyblue'); 
 drawSprites();
}

