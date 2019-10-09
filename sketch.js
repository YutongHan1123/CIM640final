let spritesheet;
let spritedata;

var radius = 40;
var x = -radius;
var speed = 0.5;
var a;
var b;

var stopSign;
var dog;
var ball;

var scr = 1;

var ellipse;
var brake;
var ex = 250;
var ey = 330;
var ez = 35;

var gif;

var countdown = 0;

var interval = 1000;

var secondsEllapsed = 0;

var info = "";

var i = 0;
var j = 0;

var spot = {
  g: 100,
  h: 50
}
var g, h;

var gif_createImg;

var saveTime = false;
var currentTime = 0;

var obsticle = 0;


function preload(){
  // spritedata = loadJSON('horse.json');
  spritesheet = loadImage('assets/road1.jpg');
  stopSign = loadImage('assets/stop.svg');
  coll = loadImage('assets/coll.jpg');
  happy = loadImage('assets/happy.jpg');
  dollar = loadImage('assets/dollar.svg');
  coll01 = loadImage('assets/coll01.svg');
  police = loadImage('assets/police.svg');
  ambulance = loadImage('assets/ambulance.svg');
  dog = loadImage('assets/dog.svg');
  ball = loadImage('assets/ball.svg');

  brak = loadSound('assets/brake.mp3');
  patrol = loadSound('assets/patrol.mp3');
  ambu = loadSound('assets/ambulance.mp3');
  gif_createImg = createImg('assets/cry.gif');
  happy1 = createImg('assets/happy.gif');
  gif_createImg.hide();
  happy1.hide();


}


function setup() {
 createCanvas(628, 348);
 // g = width/2;
 // h = height;

 // ellipseMode(RADIUS);

 frameRate(60);


}


function draw() {
  // background(spritesheet);
  // x += speed; // Increase the value of x arc(x, 60, radius, radius, 0.52, 5.76);
  // if (x > width+radius) { // If the shape is off screen
  //   x = -radius;  // move to the left edge
  //     }
  //   arc(x, 60, radius, radius, 0.52, 5.76);

  secondsEllapsed= Math.floor(millis() / 1000);

  //console.log(secondsEllapsed);


  if (scr === 1) {
    happy1.hide();

    if(saveTime == false){
      currentTime = secondsEllapsed;
      saveTime = true;
      obsticle = random(0,3);
      obsticle = Math.floor(obsticle);
      console.log(obsticle);
    }
    drawScreen1();


  } else if (scr === 2) {
    if(saveTime == false){
      currentTime = secondsEllapsed;
      saveTime = true;
    }
    drawScreen2();
    //
  } else if (scr === 3) {
    drawScreen3();
  } else if (scr === 4) {
    drawScreen4();
  }
}

function drawScreen1(){
  background(spritesheet);

  push();
   stroke(255);
   textSize(25);
   text("Safe Driving",17,27);
  pop();

    fill(0);
    ellipse(ex, ey, ez, ez);

    if(secondsEllapsed - currentTime > 3 && secondsEllapsed - currentTime < 5){

      if(obsticle == 0){
        var d = 155;
        var a = 40;
        var b = 50;
        var c = 65;
        image(stopSign,117+c,50+d,a,b);
      }else if(obsticle == 1){
        image(ball,130,150,50,50);
        // ellipse(width/2,height/2, 25, 25);
      }else if(obsticle == 2){
        image(dog,150,220,50,50);
      }
        countdown = 0;
    }

    if(secondsEllapsed - currentTime >= 5 && secondsEllapsed - currentTime < 7){
      if(obsticle == 0){
      var d = 120;
      var a = 80;
      var b = 100;
      var c = 100;
      image(stopSign,117+c,50+d,a,b);
    }else if(obsticle == 1){
      image(ball,175,110,100,100);
      // ellipse(width/2,height/2, 100, 100);
    }else if(obsticle == 2){
      image(dog,175,170,100,100);
    }
    countdown = 1;
    }

    if(secondsEllapsed - currentTime >= 7 && secondsEllapsed - currentTime < 9){
      if(obsticle == 0){
      var d = 30;
      var a = 320;
      var b = 400;
      var c = 80;
      image(stopSign,117+c,50+d,a,b);
    }else if(obsticle == 1){
      image(ball,200,50,200,200);
      // ellipse(width/2,height/2, 300,300);
    }else if(obsticle == 2){
      image(dog,200,80,200,200);
    }
    countdown = 2;
    }

    if(secondsEllapsed - currentTime >= 9 && secondsEllapsed - currentTime  < 11){
      if(obsticle == 0){
      var d = 0;
      var a = 640;
      var b = 800;
      var c = 0;
      image(stopSign,117+c,50+d,a,b);
    }else if(obsticle == 1){
      image(ball,100,10,400,400);
      // ellipse(width/2,height/2, 200,200);
    }else if(obsticle == 2){
      image(dog,100,40,400,400);
    }
    countdown = 3;
    }

     if (countdown == 3){
    // go to crash scene
     info = "crashed";
     scr =3;
     console.log(scr);
     patrol.setVolume(1.0);
     patrol.play();
     ambu.setVolume(1.0);
     ambu.play();
   }
    text(info, width/2, height/2);
}



function drawScreen2() {
  background(happy);

  if(secondsEllapsed - currentTime >= 5){
    scr = 1;
    saveTime = false;
  }

  if(j == 0){
    brak.setVolume(1.0);
    brak.play();
  }
  j++;



    happy1.position( 20, 0);
    happy1.show();


}

function drawScreen3() {
  background(coll);
  info = "crashed";
    if(i = 0){
      patrol.setVolume(2.0);
      patrol.play();
      ambu.setVolume(2.0);
      ambu.play();
    }
    i++;


    if(secondsEllapsed - currentTime >= 10 && secondsEllapsed - currentTime < 12){
    //  console.log("here");
      countdown = 4;
      image(coll01,100,0,500,500);
    }

    if(secondsEllapsed - currentTime >= 12 && secondsEllapsed - currentTime < 14){
    //  console.log("here");
      countdown = 5;
      image(ambulance,210,200,60,60);
      image(police,130,200,100,100);
    }

    if(secondsEllapsed - currentTime >= 14 && secondsEllapsed - currentTime < 16){
    //  console.log("here");
      image(ambulance,160,150,120,120);
      image(police,110,160,150,150);
      countdown = 6;
    }

    if(secondsEllapsed - currentTime >= 16 && secondsEllapsed - currentTime < 18){
    //  console.log("here");
      image(ambulance,90,90,200,200);
      image(police,10,70,400,400);
      countdown = 7;
    }

    if(secondsEllapsed - currentTime >=18){
    //  console.log(countdown);
      countdown = 8;
      if (countdown == 8){
      scr = 4;
      patrol.stop();
      ambu.stop();
    //  console.log(scr);
    }
  }
}

function drawScreen4() {
  background(255);
  frameRate(3);

  gif_createImg.position(350, 200);
  gif_createImg.show();

  spot.g = random(0, width);
  spot.h = random(0, height);
  image(dollar, spot.g, spot.h,75,75);

  spot.g = spot.g + random(-1, 1);
  // Moving up at a constant speed
  spot.h = spot.h - 1;


  if (spot.h < 0) {
    spot.h = height;
  }
}


function mousePressed() {
    var overCircle = dist(mouseX, mouseY, ex,ey);
  if (scr == 1 && overCircle < ez/2 && countdown == 1){
    info = "too early";
  }
  if(scr == 1 && overCircle < ez/2 && countdown == 2){
    scr = 2;
    saveTime = false;
  }
}

// function mouseClicked() {
//
//     if (scr == 3 && mouseOn(150, 150, 150, 275)) {
//     scr = 4;
//   }
// }
