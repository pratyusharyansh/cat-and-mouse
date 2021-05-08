var backgroundj,backgroundimg;
var tom,tomimg,tomwalking,tomsit;
var jerry,jerryimg,jerryteasingimg,jerry2img;
function preload() {
   // loading the images here
    tomimg= loadImage ("images/cat1.png");
    tomwalking= loadAnimation ("images/cat2.png","images/cat3.png");
    jerryimg= loadImage ("images/mouse1.png");
    backgroundimg = loadImage ("images/garden.png");
    jerryteasingimg = loadAnimation ("images/mouse2.png","images/mouse3.png");
    jerry2img = loadImage("images/mouse4.png");
    tomsit = loadImage("images/cat4.png");
}

function setup(){
    createCanvas(500,350);
    //garden
    backgroundj = createSprite(400,400)

    //creating tom and jerry sprites here
    tom=createSprite(400,300,25,25)
    tom.addImage("sleeping",tomimg) 

    jerry=createSprite(50,300,25,25)
    jerry.addImage("cheese",jerryimg)
}

function draw() {

    background(225);
    //Write condition here to evalute if tom and jerry collide
    if(tom.x - jerry.x < (tom.width - jerry.width/2)){
       tom.velocityX=0;
       tom.changeAnimation("siting",tomsit)
       jerry.changeAnimation("finding",jerry2img)
    }
    keyPressed();              
    drawSprites();
}


function keyPressed(){

  //For moving and changing animation write code here
if (keyDown("space")) {
    jerry.changeAnimation("teasing",jerryteasingimg);
    tom.changeAnimation("walking",tomwalking),
    tom.velocityX=-3; 
}

}
