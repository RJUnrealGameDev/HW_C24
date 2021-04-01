
const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;

var engine, world;

function setup(){
    createCanvas(700,700);
    engine = Engine.create();
    world = engine.world;

    platform = new Ground(350,680,700,40);
    wood1 = new Wood(mouseX, mouseY, 50,50);
    wood2 = new Wood();
}

function draw(){
    background("lightblue");

    Engine.update(engine);

    platform.display();
    wood1.display();
    wood2.display();
}
