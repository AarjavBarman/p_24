class Ball {
    constructor(x,y,radius){
        var ball_options ={
        isStatic: true   
        } 
        
    this.body=Bodies.circle(x, y, this.radius/2, ball_options)
    World.add(world,this.body);
    }
    display(){
    fill("red");
    circle (this.x,this.y,this.radius)
    }
}