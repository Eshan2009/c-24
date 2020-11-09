class bird {
    constructor(x, y) {
        var options = {
            'restitution':0.8,
            'friction':1,
            'density':1.0
        }
        this.body = Bodies.rectangle(x, y, 50, 50, options);
        this.width = 50;
        this.height = 50;
        
        World.add(world, this.body);
      }
      display(){
       this.body.position.x = mouseX;
       this.body.position.y = mouseY;
        
        push()
        rectMode(CENTER);
        strokeWeight(5);
        stroke("white");
        fill("green")
        rect(this.body.position.x, this.body.position.y, this.width, this.height);
        pop();
      }

}