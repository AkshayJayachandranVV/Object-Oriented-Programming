abstract class Shapes {
  abstract calculateArea(): number;
}


// const shape = new Shapes()  // Cannot create an instance of an abstract class.


class Triangle extends Shapes {
    constructor(private x:number,private y :number){ // privayte parameter proeperty => width and height are now class properties
        super() //call the constructor of parent class
    }

    calculateArea(): number {
        return this.x * this.y
    }

}


function calculateShape(shape : Shapes){
    return shape.calculateArea();
}


const triangle = new Triangle(2,4)

console.log("Area of redtangle :", calculateShape(triangle))