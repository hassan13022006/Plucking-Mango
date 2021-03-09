class Chain{
    constructor(bodyA, pointB){
        var options = {
            bodyA: bodyA,
            pointB: pointB,
            stiffness: 0.04,
            length: 10
        }
        this.pointB =pointB;
        this.Chain = Constraint.create(options);
        World.add(world, this.Chain);
    }
  
    fly(){
        this.Chain.bodyA = null;
    }
  
   display(){

        strokeWeight(4);
        var pointA = this.Chain.bodyA.position;
        var pointB = this.pointB;
        line(pointA.x, pointA.y, pointB.x, pointB.y);
    }
}