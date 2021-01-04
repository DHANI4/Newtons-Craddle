class Sling {
    constructor(bodyA, pointB) {
      var options = {
        bodyA: bodyA,
        pointB: pointB,
        stiffness: 0.2,
        length: 220
      };
      this.pointB = pointB;
      this.pointX = bodyA.x;
      this.pointY = bodyA.y - 250;
      this.sling = Constraint.create(options);
      World.add(world, this.sling);
    }

    fly(){
        this.sling.bodyA=null;
       }
  
    display() {
      if (this.sling.bodyA) {
        var pointA = this.sling.bodyA.position;
        var pointB = this.pointB;
        push();
        strokeWeight(4.5);
       // stroke("#fff");
        line(pointB.x, pointB.y, pointA.x, pointA.y);
        pop();
      }
    }
  }