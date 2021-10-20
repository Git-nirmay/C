video="";
status=""
function preload()
{
video=createVideo('video.mp4');
video.hide();
}



function setup()
{
canvas=createCanvas(480, 380);
canvas.center();
}



function draw()
{
image(video, 0, 0, 480, 380);
}



function start()
{
object_detector=ml5.objectDetector('cocossd', modelLoaded);
document.getElementById("Status").innerHTML="Status:Detecting Objects";
}



function modelLoaded()
{
console.log("modelLoaded");
status=true;
video.loop();
video.rate(1);
video.volume(0);        
}