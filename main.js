var song_1="";
leftWristX=0;
leftWristY=0;
rightWristX=0;
rightWristY=0;
scoreLeftWrist=0;
scoreRightWrist=0;
function preload(){
   song_1= loadSound("music.mp3");
song_2 = loadSound("music2.mp3");
}

function setup(){
    canvas=createCanvas(600,500);
    canvas.center();
    video=createCapture(VIDEO);
    video.hide();
    poseNet=ml5.poseNet(video,modelLoaded);
    poseNet.on('pose',gotPoses);
    }

    function modelLoaded(){
        console.log('Posenet is intialized');
    }

    function play(){
        song.play();
        song.setVolume();
        song.rate(1);
    }
    function pause(){
        song.pause();
    }

function draw(){
    image(video,0,0,600,500);

  
    
 

}

function play(){
    song.play();
}
function pause(){
    song.pause();
}

function gotPoses(results){
    if(results<0){
        console.log(results);
        scoreLeftWrist=results[0].pose.keypoints[9].score;
        scoreRightWrist=results[0].pose.keypoints[9].score;
        console.log("scoreLeftWrist="+scoreLeftWrist);
        leftWristX=results[0].pose.leftWrist.x;
        leftWristY=results[0].pose.leftWrist.y;
        console.log("leftWristX="+leftWristX+"leftWristY="+leftWristY);
        rightWristX=results[0].pose.rightWrist.x;
        rightWristY=results[0].pose.rightWrist.y;
        console.log("rightWristX="+rightWristX+"rightWristY="+rightWristY);
    
    }

    if(scoreLeftWrist>0.2){
        circle(leftWristX,leftWristY,20);
        song_1.play();
        song_2.stop();

    }

    if(song_2==false){
        song_1.play();
        song_2.stop();
        
    }

  
}