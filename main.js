img = "";
status = "";

function preload(){
    img = loadImage('dog_cat.jpg');
}

function setup(){
  canvas=createCanvas(740, 520);
  canvas.center();
  objectDetector = ml5.objectDetector('cocossd', modelLoaded);
  document.getElementById("status").innerHTML = "Status : Detecting Objects";
}

function modelLoaded()
{
  console.log("Model Loaded");
  status = true;
objectDetector.detect(img, gotResult);
}

function gotResult(error, results)
{
if (error)
{
console.error(error);
}
console.log(results);
}

function draw(){
image(img, 0, 0, 740, 520)
fill("#FF0000");
text("Dog", 45, 75);    
noFill();
stroke("#FF0000");
rect(30, 60, 350, 450);
fill("#FF0000");
text("Cat", 330, 120);
noFill();
stroke("#FF0000");
rect(325, 90, 325, 400);
}