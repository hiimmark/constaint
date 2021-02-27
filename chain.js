class Chain{
    constructor(bodyA1,bodyB1){
        var options = {
            bodyA : bodyA1,
            bodyB : bodyB1,
            stiffness:0.04,
            length:10
          }
          
           this.chain = Constraint.create(options);
           this.chain.bodyA = bodyA1;
           this.chain.bodyB = bodyB1;
          World.add(gameworld,this.chain);
    }
    display(){
        var pointA = this.chain.bodyA.position;
        var pointB = this.chain.bodyB.position;
        strokeWeight(4);
        line(pointA.x,pointA.y,pointB.x,pointB.y);
    }
}