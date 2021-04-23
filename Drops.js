class Drops{
    constructor(x,y){

        var options = {
            friction:0.001,
            restitution: 0.1
        }
       // this.x=x;
        //this.y=y;
        this.Drops = Bodies.circle(x, y, 5, options);
        this.radius=5;
         
        World.add(world, this.Drops);
    }

    updateY(){
        if(this.Drops.position.y>height){
           MutationObserver.Body.setPosition(this.Drops, {x:random(0, 800), y:random(0,800)});
        }
    }

    showDrops(){
        fill("blue");
        ellipseMode(CENTER);
        ellipse(this.Drops.position.x, this.Drops.position.y,this.radius);
                
    }
}