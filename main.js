song = "";
peter_pan = "";
harryPotter = "";
leftWristX = 0;
leftWristY = 0;
rightWristX = 0;
rightWristY = 0;
leftWristscore = 0;
rightWristscore = 0;

function preload() {
    peter_pan = loadSound("music2.mp3");
    harryPotter = loadSound("music.mp3");
}

function setup() {
    canvas = createCanvas(600, 500);
    canvas.center();

    video = createCapture(VIDEO);
    video.hide();

    poseNet = ml5.poseNet(video, modelLoaded);
    poseNet.on('pose', gotPoses);
}

function modelLoaded() {
    console.log('PoseNet Is Initialized');
}

function gotPoses(results)
{
    if(results.length > 0)
    {
        console.log(results);
        rightWristscore = results[0].pose.keypoints[10].score;
        leftWristscore = results[0].pose.keypoints[9].score;
        console.log("rightWristscore = " + rightWristscore + "leftWristscore = " + leftWristscore);

        rightWristX = results[0].pose.rightWrist.x;
        rightWristY = results[0].pose.rightWrist.y;
        console.log("rightWristX = " + rightWristX + " rightWristY = " + rightWristY);

        leftWristX = results[0].pose.leftWrist.x;
        leftWristY = results[0].pose.leftWrist.y;
        console.log("leftWristX = " + leftWristX + " leftWristY = " + leftWristY);
    }
}

function draw() {
    image(video, 0, 0, 600, 500);
    fill("#4169E1");
    stroke("#4169E1");


 if(leftWristscore > 0.2)
 {
     circle(leftWristX, leftWristY, 20);
     song.stop(harryPotter);
     
     song.isPlaying(peter_pan);
     if (peter_pan == false) 
     {
         song.play(peter_pan);
         document.getElementById("song_changes").innerHTML = "song = " + song;
     }
 }
 
 song.isPlaying(harryPotter);
 
 if (rightWristscore > 0, 2) 
 {
     circle(rightWristX, rightWristY, 20);
     song.stop(peter_pan)

     if (harryPotter == false) 
     {
         song.play(harryPotter);
         document.getElementById("song_changes").innerHTML = "song = " + song;
        }
    }
}
