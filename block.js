class Block{
    constructor(x,y,width,height){
        var option={
        restitution:0.4,
        friction:0
        }
        this.body = Bodies.rectangle(x,y,width,height,option);
        this.width = width;
        this.height = height;
        World.add(world,this.body);
    }
    display(){
        var pos=this.body.position;
        var angle=this.body.angle;		
			push()
            translate(pos.x, pos.y);
            rotate(angle);
            rectMode(CENTER);
            rect(this.image, 0, 0, this.width, this.height);
			pop()
    }
}