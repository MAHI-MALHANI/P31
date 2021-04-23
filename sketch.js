const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world;
var drops;
var umbrella,umbrellaImg;
var thunder, thunderImg1, thunderImg2, thunderImg3, thunderImg4;
var rand;

function preload(){
    umbrellaImg=loadImage("walking_1.png");
    thunderImg1=loadImage("1.png");
    thunderImg2=loadImage("2.png");
    thunderImg3=loadImage("3.png");
    thunderImg4=loadImage("4.png");

}

function setup(){
    var canvas = createCanvas(800,1200);

    var maxDrops;
    engine = Engine.create(); 
    world = engine.world; 
    createCanvas(400,700); 
    umbrella = new Umbrella(200,500);
    drops= new Drops();
      
     if(frameCount % 150 === 0){
          for(var i=0; i<maxDrops; i++){
               drops.push(new createDrop(random(0,800), random(0,800)));
             }
        }

        //drops=new Drops(random(800, 1200), random(800, 1200));

}

function draw(){
    background(0);
    Engine.update(engine);

    rand=Math.round(random(1,4));
    if(frameCount%100===0){
        thunderCreatedFrame=frameCount;
        thunder=createSprite(random(10, 770), random(1,30), 10, 10);
        switch(rand){
            case 1: thunder.addImage(thunderImg1);
            break;
            case 2: thunder.addImage(thunderImg2);
            break;
            case 3: thunder.addImage(thunedrImg3);
            break;
            case 4: thunder.addImage(thunedrImg4);
            default: break;

        }
        thunder.scale= random(0.3, 0.6);
    }
    
    
    drops.display();
    umbrella.display();

    drawSprites();
}   