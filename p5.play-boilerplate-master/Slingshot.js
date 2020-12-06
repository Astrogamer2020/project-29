class SlingShot{
    constructor(bodyA,pointB)
    {
        var options={
            bodyA:bodyA,
            pointB:pointB,
            stifness:100,
            length:100.
        }
this.pointB=pointB;

        this.chain=Matter.Constraint.create(options);
        World.add(world,this.chain);
      
          
        
    
    }
    
    fly()
    {
        this.chain.bodyA=null;
    }

    
    display(){
        if(this.chain.bodyA)
        {

        
        var pointA = this.chain.bodyA.position;
        var pointB = this.pointB;
        strokeWeight(4);
        line(pointA.x, pointA.y, pointB.x, pointB.y);
        }
    }
    }