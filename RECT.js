 class Rect{

    constructor(x,y,width,height){

        var options = {
      'friction':0.3,
      isStatic : true,
        'density':1.0
    }
    this.body = Bodies.rectangle(x, y, width, height, options);
    this.width = width;
    this.height = height;
    
    World.add(world, this.body);
  }

    display(){

    rectMode(CENTER);
    rect(this.body.position.x,this.body.position.y,this.width,this.height);
}

}