class Ground{

constructor(x,y,width,height){

var ground_option={
    isStatic : true
}


    this.body = Bodies.rectangle(x,y,width,height,ground_option)
    World.add(world,this.body);
    this.w = width;
    this.h = height;



}                         

display(){

rectMode(CENTER);    
rect(this.body.position.x,this.body.position.y,this.w,this.h);


}



}