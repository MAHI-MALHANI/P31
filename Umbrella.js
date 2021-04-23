class Umbrella{
    constructor(x, y){

        var options = {
            stiffness: 0.04,
            length: 10,
            isStatic: true
        }
        //this.x=x;
        //this.y=y;
        this.Umbrella = Bodies.circle(x, y, 5, options);
         
        World.add(world, this.Umbrella);
        this.image=loadImage("walking_1.png");
    }

    display(){
       
       var pos=this.body.position;
       push();
       translate(pos.x, pos.y);
       ImageMode(CENTER);
       pop();
    }
    
};