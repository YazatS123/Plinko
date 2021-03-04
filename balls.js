class Plinko {
    constructor(x, y){
        var options ={
            restitution:0.4
        }
        //this.radius=r;
        this.body = Bodies.circle(x, y, 4, options);
        World.add(world, this.body);
    }
    display(){
        var pos = this.body.position;
        var angle = this.body.angle;

        push();
        translate(pos.x, pos.y);
        rotate(angle);
        noStroke();
        fill("white");
        ellipseMode(RADIUS)
        ellipse(0, 0, 9, 9);
        pop();
    }
}
class Particle {
    constructor(x, y, r){
        var options ={
            restitution:0.4
            //isStatic:true
        }
        this.radius=r;
        this.body = Bodies.circle(x, y, 9, options);
        this.color = color(random(0, 255), random(0, 255), random(0, 255));
        World.add(world, this.body);
    }
    display(){
        var pos = this.body.position;
        var angle = this.body.angle;

        push();
        translate(pos.x, pos.y);
        rotate(angle);
        noStroke();
        fill(this.color);
        ellipseMode(RADIUS)
        ellipse(0, 0, 9, 9);
        pop();
    }
}