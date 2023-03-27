img = "";
nose_x = 0;
nose_y = 0;
mariox = 325;
marioy = 325;

function preload(){
  img = loadImage("mario05.png")
}
function setup() {
createCanvas(650,400);
video = createCapture(VIDEO);
video.size(600,300);

poseNet = ml5.poseNet(video, modelLoaded);
poseNet.on('pose', gotPoses);
}
function modelLoaded() {
  console.log("model loaded!")
}
function gotPoses(results) {
  if(results.length>0){
    nose_x = results[0].pose.nose.y
    nose_y = results[0].pose.nose.y
    console.log("nose x = " + nose_x + "nose y =" + nose_X)
  }
  
}
function draw(){
background("#ddff22");
if(nose_x<300){
  mariox = mariox - 1
}
if(nose_x>300)
  {
    mariox = mariox + 1
    
  }
if(nose_y<150)
  {
    marioy = marioy -1
  }
image(img,mariox,marioy,40,70)
}