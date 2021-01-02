class Bird extends BaseClass {
  constructor(x,y){
    /* super() helps to transfer properties of parent class through 
    parent class constructor*/
    super(x,y,50,50);
    this.image = loadImage("sprites/bird.png");
  }

  display() {
    this.body.position.x = mouseX;
    this.body.position.y = mouseY;
    /*super.display() overrides the display of baseclass*/
    super.display();
  }
}
