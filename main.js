song = "";
leftWristX = 0;
leftWristY = 0;
righWristX = 0;
righWristY = 0;
cancion = "";
cancion2 = "";
cancion3 = "";
cancion4 = "";
scoreRightWrist = 0;
scoreLeftWrist = 0;

function preload()
{
    cancion = loadSound("musica1.mp4");
    cancion2 = loadSound("adoptme.mp3");
    cancion3 = loadSound("adoptme2023.mp3");
    cancion4 = loadSound("ninjago.mp3");

}

function setup() {
    canvas = createCanvas(600, 500);
    canvas.center();    

    video = createCapture(VIDEO);
    video.hide();

    poseNet = ml5.poseNet(video, modelLoaded);
    poseNet.on('pose', gotPoses);
}

function gotPoses(results) {
    if(results.length > 0)
    {
        console.log(results);
        scoreLeftWrist = results[0].pose.keypoints[9].score;
        console.log("scoreLeftWrist =" + scoreLeftWrist);

        leftWristX = results[0].pose.leftWrist.x;
        leftWristY = results[0].pose.leftWrist.y;
        console.log("leftWristX = " + leftWristX +"leftWristY "+ leftWristY);
        
        righWristX = results[0].pose.rightWrist.x;
        righWristY = results[0].pose.rightWrist.y;
        console.log("rightWristX = " + righWristX +" rightWristy = "+ righWristY);
    }
}

function modelLoaded() {
    console.log('PoseNet Is Initialized');
}

function draw() {
    image(video, 0, 0, 600, 500);

    fill("#234EDF");
    stroke("#234EDF");

    if(scoreLeftWrist > 0.2)
    {
    circle(leftWristX,leftWristY,20);
    InNumberleftWristY = Number(leftWristY);
    remove_decimals = floor(InNumberleftWristY);
    volume = remove_decimals/500;
    document.getElementById("volume").innerHTML = "Volumen =" + volume;
    song.setVolume(volume);
    }
}

function play()
{
    song = cancion;
    song.play();
    song.setVolume(1);
    song.rate(1);
}
function play2()
{
    song = cancion2;
    song.play();
    song.setVolume(1);
    song.rate(1);
}
function play3()
{
    song = cancion3;
    song.play();
    song.setVolume(1);
    song.rate(1);
}
function play4()
{
    song = cancion4;
    song.play();
    song.setVolume(1);
    song.rate(1);
}