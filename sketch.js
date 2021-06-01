var bg, bgImg;
var cat, catFixed, catMoving, catSitting;
var mouse, mouseFixed, mouseMoving, mouseGlass;

function preload() {
    //load the images here
    bgImg=loadImage("garden.png");
    
    catFixed=loadAnimation("cat1.png");
    catMoving=loadAnimation("cat2.png", "cat3.png");
    catSitting=loadAnimation("cat4.png");

    mouseFixed=loadAnimation("mouse1.png");
    mouseMoving=loadAnimation("mouse2.png", "mouse3.png");
    mouseGlass=loadAnimation("mouse4.png");
}

function setup(){
    createCanvas(1000,800);
    //create tom and jerry sprites here
    bg=createSprite(500, 400);
    bg.addImage(bgImg);
    
    cat=createSprite(700, 600, 20, 20);
    cat.addAnimation("sitting", catFixed);
    cat.scale=0.15;

    mouse=createSprite(200, 600, 20, 20);
    mouse.addAnimation("walking", mouseFixed);
    mouse.scale=0.15;
}

function draw() {

    background(0);
    //Write condition here to evalute if tom and jerry collide
    if(cat.x-mouse.x<cat.width/2+mouse.width/2){
        cat.addAnimation("catSit", catSitting);
        cat.changeAnimation("catSit");
        cat.velocityX=0;

        mouse.addAnimation("mouseStand", mouseGlass);
        mouse.changeAnimation("mouseStand");
    }

    drawSprites();
}


function keyPressed(){

  //For moving and changing animation write code here
    if(keyCode === LEFT_ARROW){
        mouse.addAnimation("mouseTeasing", mouseMoving);
        mouse.changeAnimation("mouseTeasing");
        mouse.frameDelay=25;

        cat.addAnimation("catMoving", catMoving);
        cat.changeAnimation("catMoving");
        cat.frameDelay=25;
        cat.velocityX=-3;
    }

}
