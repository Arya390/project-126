peter_pan = "";
harryPotter = "";

function preload()
{
    peter_pan = loadSound("music2.mp3");
    harryPotter = loadSound("music.mp3");
}

function setup()
{
   canvas = createCanvas(600, 500);
   canvas.center();

   video = createCapture(VIDEO);
   video.hide();
}

function draw()
{
    image(video, 0, 0, 600, 500);
}
