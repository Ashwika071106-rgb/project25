class Paper{

    constructor(x,y,radius){

        var options = {
            isStatic:false,
            restitution:0.8,
            friction:0.5,
            density:1.2
        }
        //this.x=body.position.x;
        //this.y=body.position.y
        this.radius=radius;
        this.body = Bodies.circle(x,y,this.radius/2,options);
        this.image = loadImage("sprites/paper1.png");
        //this.x= body.position.x;
        //this.y=body.position.y;
        World.add(world, this.body);
    }

    display(){
        var pos = this.body.position;
      
      //var angle = this.body.angle;
      //push();
      //translate(this.body.position.x,this.body.position.y ); 
      
     // stroke(255);
     // strokeWeight(3);
      //fill(rgb(176,224,230));
      imageMode(CENTER);
      image(this.image,pos.x,pos.y, this.radius,this.radius);
      //pop();
    }
}