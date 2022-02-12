leftWristX = 0;
rightWristX = 0;

function setup(){
    video = createCapture(VIDEO);
    video.size(400,400);
    video.position(10,50);

    canvas = createCanvas(800,400);
    canvas.position(430,130);

    poseNet = ml5.poseNet(video,modelDone);
    poseNet.on('pose',gotposes);
}

function modelDone(){
    console.log("PoseNet Is Initialized And Loaded");
}

function gotposes(results,error){
    if(error){
        console.error(error);
    }
    if(results.length > 0){
        console.log(results);

        leftWristX = results[0].pose.leftWrist.x;
        rightWristX = results[0].pose.rightWrist.x;

        difference = floor(leftWristX - rightWristX)

        console.log("Left_Wrist_X = " + leftWristX + ", Right_Wrist_X = " + rightWristX + ", Their difference is = " + difference);

        console.log("Right Wrist X = " + results[0].pose.rightWrist.x + " Right Wrist Y = " + results[0].pose.rightWrist.y);
        console.log("Left Wrist X = " + results[0].pose.leftWrist.x + " Left Wrist Y = " + results[0].pose.leftWrist.y);
        console.log("Their Difference is = " + difference);
    }
    }

    function draw(){
        background("#5196e3");
        document.getElementById("font_size").innerHTML = "Font size of the text will be = " + difference + "px  ";
        textSize(difference);
        fill('#FFE787');
        text('ARHANT', leftWrist, rightWrist, 50, 400);
    }