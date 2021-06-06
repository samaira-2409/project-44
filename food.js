class Food{
    constructor(x,y){
        var options={
            'isStatic':true
    
        }
        this.r = 3;
        this.body = Bodies.circle(x,y,this.r,options);
        World.add(world,this.body);
    }


    display(){
        var pos = this.body.position;
       
      

       fill("yellow");
      ellipseMode(RADIUS);
      ellipse(pos.x,pos.y,3,3);
      
      

    }
}