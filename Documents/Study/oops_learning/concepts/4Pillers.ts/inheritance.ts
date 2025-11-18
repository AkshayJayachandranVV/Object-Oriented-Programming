class Shape {
  x: number;
  y: number;

  constructor(x: number, y: number) {
    this.x = x;
    this.y = y;
  }

  describe() {
    console.log(`This is a shape at position (${this.x}, ${this.y}).`);
  }
}

class Circle extends Shape {

    radius : number

    constructor(x: number, y: number,radius : number){
        super(x,y)
        this.radius = radius
    }

    area(){
        return Math.PI * this.radius ** 2
    }

}


const circleArea = new Circle(10,20,2)

console.log(circleArea.describe())
console.log(circleArea.area())
