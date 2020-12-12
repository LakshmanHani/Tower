class Stand{
    constructor(x,y,width,height){
        var options={
            isStatic:true
        }
        this.width=width;
        this.height=height;
        this.body = Bodies.rectangle(x,y,width,height,options);
    }
    display(){
        var pos=this.body.position;
        var angle =this.body.angle;
        push();
        translate(pos.x,pos.y);
        rotate(angle)
        rectMode(CENTER)
        pop();
    }
}